async function htmlCollector(res, callback) {
  let data = '';
  for await (let chunk of res) {
    data += chunk;
  }
  callback(null, data);
}

module.exports = htmlCollector;