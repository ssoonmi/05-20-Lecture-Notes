const { expect } = require('chai');
const { resolve } = require('path');
const { readFile } = require('fs').promises;
const { Client } = require('pg');

function createClient() {
  return new Client({
    host: 'localhost',
    user: 'merchant_app',
    database: 'merchant_development',
    password: 'bhKx5P6V'
  });
}

describe('The SQL statement', () => {
  let client;
  let createError;
  let resultSet;
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

      const createSqlPaths = [
        '../create-countries-table.sql',
        '../create-merchant-types-table.sql',
        '../create-users-table.sql',
        '../create-merchants-table.sql'
      ];
      for (sqlPath of createSqlPaths) {
        const createSqlPath = resolve(__dirname, sqlPath);
        const createSql = await readFile(createSqlPath, 'utf-8');
        await client.query(createSql);
      }

      const insertSqlPaths = [
        '../insert-countries-data.sql',
        '../insert-merchant-types-data.sql',
        '../insert-users-data.sql',
        '../insert-merchants-data.sql'
      ];
      for (sqlPath of insertSqlPaths) {
        const insertSqlPath = resolve(__dirname, sqlPath);
        const insertSql = await readFile(insertSqlPath, 'utf-8');
        await client.query(insertSql);
      }

      sqlPath = '../joined-data-query.sql';
      const selectSqlPath = resolve(__dirname, '..', 'joined-data-query.sql');
      const selectSql = await readFile(selectSqlPath, 'utf-8');
      resultSet = await client.query(selectSql);
    } catch (e) {
      createError = { e, sqlPath };
    }
  });

  after(async () => {
    if (client) {
      client.end();
    }
  });

  it('has four records in the correct order', () => {
    const expected = [{
      full_name: 'Zaphod Beeblebrox',
      type: 'Wholesale',
      name: 'USA',
      merchant_name: 'Better Products 4 U'
    }, {
      full_name: 'Zaphod Beeblebrox',
      type: 'Retail',
      name: 'USA',
      merchant_name: 'Snglrify'
    }, {
      full_name: 'Blart Versenwald III',
      type: 'Wholesale',
      name: 'China',
      merchant_name: 'Widgets International'
    }, {
      full_name: 'Zaphod Beeblebrox',
      type: 'Retail',
      name: 'Brazil',
      merchant_name: 'Zingo'
    }];
    expect(resultSet.rows).to.eql(expected);
  });
});
