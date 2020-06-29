import { getClue as getClueFromCallback } from './callback-version.js';
import { getClue as getClueFromPromise } from './promise-version.js';
import { getClue as getClueFromAsyncFunction } from './async-await-version.js';

function setHtmlFromClue(clue) {
  document.getElementById('answer').innerHTML = clue.answer;
  document.getElementById('value').innerHTML = clue.value;
  document.getElementById('category-title').innerHTML = clue.category.title;
  document.getElementById('question').innerHTML = clue.question;

  let validity = 'valid';
  if (clue.invalid_count && clue.invalid_count > 0) {
    validity = 'invalid';
  }
  document.getElementById('invalid-count').innerHTML = validity;
}

document
  .getElementById('use-callback')
  .addEventListener('click', () => {
    getClueFromCallback((err, clue) => {
      if (err !== null) return console.error(err);
      setHtmlFromClue(clue);
    });
  });

  document
  .getElementById('use-promise')
  .addEventListener('click', () => {
    getClueFromPromise()
      .then(clue => {
        console.log('step 2');
        setHtmlFromClue(clue)
        return 2;
      })
      .catch(err => console.error(err.message));

    // Could also be the following code. Why?
    // getClueFromPromise()
    //   .then(setHtmlFromClue)
    //   .catch(err => console.error(err.message));
  });

document
  .getElementById('use-async-await')
  .addEventListener('click', async () => {
    try {
      const clue = await getClueFromAsyncFunction();
      setHtmlFromClue(clue);
    } catch (e) {
      console.error(e.message);
    }
  });
