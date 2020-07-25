const { close } = require('./test-utils');

after(async () => {
  if (close) {
    await close();
  }
});
