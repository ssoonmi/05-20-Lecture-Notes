const crypto = require('crypto');

// console.log(crypto.getHashes());

// // no matter how many times I run this message through,
// // it will always return the same digest
// const hasher = crypto.createHash('sha512');
// hasher.update('this is my secret message');
// const digest = hasher.digest();
// console.log(digest.toString('base64'));


const password = 'my secret password';
const util = require('util');
const salter = util.promisify(crypto.randomBytes);
const hasher = util.promisify(crypto.pbkdf2);

(async () => {
  const salt = await salter(64);
  const hashedPassword = await hasher(
    password, // password
    salt, // salt
    10000, // 10000 times
    64, // length of 64
    'sha512' // algorithm
  );
  const salts = salt.toString('base64');
  const pwds = hashedPassword.toString('base64');
  const hashedPwdForDb = `${salts}:${pwds}`;
  console.log(hashedPwdForDb);

  // crypto.randomBytes(64, (err, salt) => {
  //   crypto.pbkdf2(
  //     password,
  //     salt,
  //     10000,
  //     64,
  //     'sha512',
  //     (err, hashedPassword) => {
  //       const salts = salt.toString('base64');
  //       const pwds = hashedPassword.toString('base64');
  //       const hashedPwdForDb = `${salts}:${pwds}`;
  //       console.log(hashedPwdForDb);
  //     }
  //   )
  // });
})();