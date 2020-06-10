

function handler(e) {
  console.log(e.currentTarget.tagName);
}

document.addEventListener('DOMContentLoaded', () => {
  // This is a click event assigned on the body
  document.body.addEventListener('click', handler);






  // There is a p tag inside this div
  // Clicking on the p tag will trigger this event
  let div = document.getElementById('clickable-div');
  div.addEventListener('click', () => {
    alert("The DIV onclick handler!")
  })





  // There is a p tag inside a div inside a main tag
  // Clicking on anyone of these elements will trigger an event
  // That event will bubble up to the parent's events
  document.querySelector('#main-ele').addEventListener('click', handler);
  document.querySelector('#first-div').addEventListener('click',handler);
  document.querySelector('#nested-p').addEventListener('click', handler);






  // There is a p tag inside a div inside a form
  // All of these elements have on onclick attribute
      // which will send an alert.
  // We can stop this event from bubbling up using
      // event.stopPropagation();
  const stopper = document.getElementById('stopper');
  // stopper.onclick = event => {
  //   event.stopPropagation();
  // };

  let ptag = document.getElementById('stopper-p-tag');
  // ptag.addEventListener('click', (event) => {
  //   event.stopPropagation();
  // })





  // Here we have a situation where bubbling is desirable
  // By assigning the event on the ul we do not need to 
      // assign this event on all the li individually.
  document
    .getElementById('my-list')
    .addEventListener('click', e => {
      console.log(e.target.innerHTML);
      console.log(e.currentTarget.id);
    });
})