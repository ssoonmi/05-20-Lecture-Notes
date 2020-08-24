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

describe('The users table', () => {
  context('when created', () => {
    let client;
    let createError;
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

        const createSqlPath = resolve(__dirname, '../create-users-table.sql');
        const createSql = await readFile(createSqlPath, 'utf-8');
        await client.query(createSql);
      } catch (e) {
        createError = e;
      }
    });

    after(async () => {
      if (client) {
        client.end();
      }
    });

    it('has id, full_name, and created_at columns with proper specs', async () => {
      if (!client) {
        expect.fail('Cannot connect to localhost database with merchant_app/bhKx5P6V');
      }
      if (createError) {
        expect.fail(`Error while running create-users-table.sql: ${createError.message}`);
      }

      await client.query(`
        INSERT INTO users(full_name, created_at)
        VALUES ('test', CURRENT_TIMESTAMP);
      `);

      await testColumnLength(client, 255, 'full_name', `
        INSERT INTO users(full_name, created_at)
        VALUES ($1, CURRENT_TIMESTAMP);
      `);

      const valuesList = [
        [null, '', new Date(), 'id'],
        [100, null, new Date(), 'full_name'],
        [200, '', null, 'created_at'],
      ];
      for (let values of valuesList) {
        const columnName = values.pop();
        await testNulls(client, values, columnName, `
          INSERT INTO users(id, full_name, created_at)
          VALUES ($1, $2, $3);
        `);
      }
    });
  });
});
