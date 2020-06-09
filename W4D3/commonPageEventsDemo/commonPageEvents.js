// window.addEventListener("DOMContentLoaded", () => {
  
//   const button = document.getElementById('increment-count');
//   const count = document.getElementById('clicked-count');

//   button.addEventListener('click', event => {
//     // console.log(event);
//     count.innerHTML = `${event.detail}`;
//     // button.innerHTML = `I have been clicked ${event.detail} times.`
//   });
// })


// window.onload = () => {
//   const checkbox = document.getElementById('on-off');
//   const divShowHide = document.getElementById('now-you-see-me');
//   const h1 = document.getElementById('the-h1');
//   console.log(checkbox.checked);
//   checkbox.addEventListener('click', () => {
//     if (checkbox.checked) {
//       divShowHide.classList.remove('hide');
//       divShowHide.classList.add('show');
//     } else {
//       divShowHide.classList.remove('show');
//       divShowHide.classList.add('hide');
//     }
//   })

//   h1.addEventListener('click', event => {
//     console.log(event.target);
//   })
// }



// window.addEventListener("DOMContentLoaded", () => {
//   const stopCyanMadness = () => {
//     const inputValue = document.getElementById('stopper').value;

//     if (inputValue !== 'STOP') {
//       document.body.style.backgroundColor = 'cyan';
//     }
//   }

//   setTimeout(stopCyanMadness, 5000);
// })