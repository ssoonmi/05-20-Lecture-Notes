const { expect } = require('chai');

module.exports.testColumnLength = async (client, length, columnName, sql) => {
  let failed = false;
  try {
    let longValue = '';
    for (let i = 0; i < length + 1; i += 1) {
      longValue += 'a';
    }
    await client.query(sql, [longValue])
  } catch (e) {
    failed = true;
  }
  if (!failed) {
    expect.fail(`${columnName} column allows values longer than ${length} characters.`);
  }
};


module.exports.testNulls = async (client, values, columnName, sql) => {
  let failed = false;
  try {
    await client.query(sql, values);
  } catch (e) {
    failed = true;
  }
  if (!failed) {
    expect.fail(`${columnName} should not be nullable`);
  }
}
