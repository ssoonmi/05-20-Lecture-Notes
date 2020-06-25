const fetch = require('node-fetch');

// fetch('https://api.github.com/users/azablan')
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .then((secondThenReturn) => {
//     console.log(secondThenReturn);
//     console.log('done parsing result')
//   });













// get your API Key here: http://www.omdbapi.com/
const MOVIE_API_KEY = '';

// const queryParams = {
//   t: 'fight club',
//   apikey: 'b4...'
// };

const url = `http://www.omdbapi.com/?t=fight+club`;

fetch(url)
  .then(res => {
    return new Promise((resolve, reject) => {
      if (res.status >= 400) {
        // resolve(res.json())
        reject('unsuccessful')
      } else {
        // resolve(res.json())
      }
    })
  })
  .then(json => console.log('second then', json),
  () => { throw new Error() })
  .then(whatever => console.log(whatever))
  .catch(reason => {
    console.log('rejected because', reason);
  });