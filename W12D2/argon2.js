const password = "my password";

(async () => {
  const argon2 = require("argon2");
  // first argument is the password
  const hashedPwdForDb = await argon2.hash(password);
  console.log(hashedPwdForDb);
})();

const checkPassword = async (password, hashedPwdForDb) => {
  return await argon2.verify(hashedPwdForDb, password);
};
