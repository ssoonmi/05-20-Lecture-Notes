// Event Handler
    // We can assign events to HTML elements on the page.
    // These events may involve user interaction, time delays, etc.
    // HTMLelement.addEventListener
        // We have been using this method on the document!
        // There are many built in events which we can listen for
            // 'click'
            // 'mouseover'
            // 'submit'
            // A LOT MORE
        // .addEventListener takes in two arguments
            // 1st. An event in the form of a string
            // 2nd. A callback to be executed when the event occurs
                // This callback takes the event object as an arugment
                // This event object has MANY useful built in methods, 
                // some of which we'll learn today





// Events in the following examples
  // 'click'




//  New Methods Shown in Examples
  // event.detail
  // HTMLelement.classList.remove('class-to-remove')
  // HTMLelement.classList.add('class-to-add')
  // HTMLelement.innerHTML
  // HTMLelement.style
  // HTMLelement.value





// NOTE: event.detail
// event.detail description from MDN:
  // The UIEvent.detail read-only property, when non-zero, 
    // provides the current(or next, depending on the event) click count.
  // For click or dblclick events, UIEvent.detail is the current click count.
  // For mousedown or mouseup events, UIEvent.detail is 1 plus the current click count.
  // For all other UIEvent objects, UIEvent.detail is always zero.
  // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail






  // Here, we estabish an event listener on the window for when the page has loaded it's content
window.addEventListener("DOMContentLoaded", () => {
  
  // Click counter
  const button = document.getElementById('increment-count');
  const count = document.getElementById('clicked-count');

  // here we establish a click event on the button 
    // we found on the page
  button.addEventListener('click', event => {
    // even though we set the event on the button, 
      // we can use this event
        // to manipulate other elements
    count.innerHTML = `${event.detail}`;
  });




  // Show checkbox
  const checkbox = document.getElementById('on-off');
  const divShowHide = document.getElementById('now-you-see-me');


  // here we establish a click event on the checkbox 
    // we found on the page
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      // With the way we wrote our code, the checkbox 
        // must originally have 
          // the 'hide' class to be hidden when we 
            // firstload our page
      divShowHide.classList.remove('hide');
      divShowHide.classList.add('show');
    } else {
      // If we want classes to be mutually exclusive 
        // for a single event
          // we must remember to have both cases covered
      divShowHide.classList.remove('show');
      divShowHide.classList.add('hide');
    }
  })





  // setTimeout 
  const stopGreyMadness = () => {
    // Here we get the text written inside of an input tag
        // using the .value key
    const inputValue = document.getElementById('stopper').value;

    if (inputValue !== 'STOP') {
      document.body.style.backgroundColor = 'grey';
    }
  }

  setTimeout(stopGreyMadness, 5000);
});
