export function getClue() {
  return fetch('https://jservice.xyz/api/random-clue')
    .then(response => {
      console.log('step 1');
      if (!response.ok) throw new Error(response.status);

      return response.json();
    });
}
getClue().then

fetch('sdflkj') // Pending promise gets fulfilled/resolved when response comes back
  .then(res => console.log(res)) // entire response of the fetch request
