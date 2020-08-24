const {
  username,
  password,
  database,
  host,
} = require('./index').db;
console.log(username);
console.log(password);
console.log(database);
module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
};