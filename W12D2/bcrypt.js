const password = 'my password';

(async () => {
  const bcrypt = require('bcryptjs');
  // first argument is the password, second argument is the salt rounds
  const hashedPwdForDb = await bcrypt.hash(password,  8);
  console.log(hashedPwdForDb);
  console.log(await bcrypt.compare('hello', hashedPwdForDb));
})();

// const checkPassword = async (password, hashedPwdForDb) => {
// }