const { expect } = require('chai');
const { resolve } = require('path');
const { readFile } = require('fs').promises;
const { Client } = require('pg');
const { testColumnLength, testNulls } = require('./table-testing-utils');

function createClient() {
  return new Client({
    host: 'localhost',
    user: 'merchant_app',
    database: 'merchant_development',
    password: 'bhKx5P6V'
  });
}

describe('The merchants table', () => {
  context('when created', () => {
    let client;
    let createError;
    let sqlPath;
    before(async () => {
      try {
        client = createClient();
        await client.connect();
      } catch (e) {
        client = undefined;
        console.error(e);
      }

      try {
        await client.query('DROP TABLE IF EXISTS merchants');
        await client.query('DROP TABLE IF EXISTS countries');
        await client.query('DROP TABLE IF EXISTS users');
        await client.query('DROP TABLE IF EXISTS merchant_types');

        const sqlPaths = [
          '../create-countries-table.sql',
          '../create-merchant-types-table.sql',
          '../create-users-table.sql',
          '../create-merchants-table.sql'
        ];
        for (sqlPath of sqlPaths) {
          const createSqlPath = resolve(__dirname, sqlPath);
          const createSql = await readFile(createSqlPath, 'utf-8');
          await client.query(createSql);
        }
      } catch (e) {
        createError = { sqlPath, e };
      }
    });

    after(async () => {
      if (client) {
        client.end();
      }
    });

    it('has id, merchant_name, country_id, created_at, admin_id, and merchant_type_id columns with proper specs', async () => {
      if (!client) {
        expect.fail('Cannot connect to localhost database with merchant_app/bhKx5P6V');
      }
      if (createError) {
        expect.fail(`Error while running ${createError.sqlPath}: ${createError.e.message}`);
      }

      const { rows: [{ id: merchantTypeId }] } = await client.query(`
        INSERT INTO merchant_types(type)
        VALUES ('new merc 1')
        RETURNING id;
      `);
      const { rows: [{ id: countryId }] } = await client.query(`
        INSERT INTO countries(name, continent_name)
        VALUES ('new country', 'new cont 1')
        RETURNING id;
      `);
      const { rows: [{ id: userId }] } = await client.query(`
        INSERT INTO users(full_name, created_at)
        VALUES ('new admin', CURRENT_TIMESTAMP)
        RETURNING id;
      `);


      await client.query(`
        INSERT INTO merchants(merchant_name, country_id, created_at, admin_id, merchant_type_id)
        VALUES ('new merchant name', $1, CURRENT_TIMESTAMP, $2, $3);
      `, [countryId, userId, merchantTypeId]);

      await testColumnLength(client, 255, 'merchant_name', `
        INSERT INTO merchants(merchant_name, country_id, created_at, admin_id, merchant_type_id)
        VALUES ($1, ${countryId}, CURRENT_TIMESTAMP, ${userId}, ${merchantTypeId});
      `);

      const valuesList = [
        [null, 'new merchant name 1', countryId, new Date(), userId, merchantTypeId],
        [300, null, countryId, new Date(), userId, merchantTypeId],
        [400, 'new merchant name 2', null, new Date(), userId, merchantTypeId],
        [500, 'new merchant name 3', countryId, null, userId, merchantTypeId],
        [600, 'new merchant name 4', countryId, new Date(), null, merchantTypeId],
        [700, 'new merchant name 5', countryId, new Date(), userId, null],
      ];
      for (let values of valuesList) {
        const columnName = values.pop();
        await testNulls(client, values, columnName, `
          INSERT INTO merchants(id, merchant_name, country_id, created_at, admin_id, merchant_type_id)
          VALUES ($1, $2, $3, $4, $5, $6);
        `);
      }
    });
  });
});
