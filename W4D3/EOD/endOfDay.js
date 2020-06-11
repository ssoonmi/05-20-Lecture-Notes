// In the code below we set an individual event listeners on the window.
// This is NOT the standard way. Usually we will set one event listener on the window
    // for when the DOM has loaded.
// This is for demonstration purposes, separating each LO for readability



// 1.

window.addEventListener("DOMContentLoaded", event => {
  // We get the elements from the page using their respective id
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");

  // Even though the event is on the button, we can still manipulate the span
  button.addEventListener("click", event => {
    count.innerHTML = `${event.detail}`;
  });
});




// 2.

window.addEventListener("DOMContentLoaded", event => {
  // store the elements we need in variables
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");
  // add an event listener for the checkbox click
  checkbox.addEventListener("click", event => {
    // use the 'checked' attribute of checkbox inputs
    // returns true if checked, false if unchecked
    if (checkbox.checked) {
      // if the box is checked, show the div
      divShowHide.style.display = "block";
      // else hide the div
    } else {
      divShowHide.style.display = "none";
    }
  });
});




// 3.

window.addEventListener("DOMContentLoaded", event => {

  // define our callback for setTimeout
  const stopGreyMadness = () => {

    // get the value of the input field
    const inputValue = document.getElementById("stopper").value;

    // if value is anything other than 'STOP', change background color
    if (inputValue !== "STOP") {
      document.body.style.backgroundColor = "lightgrey";
    }
  };

  // Invoke the callback asynchronously using setTimeout
  setTimeout(stopGreyMadness, 5000);
});




// 4.

window.addEventListener("DOMContentLoaded", event => {
  const input = document.getElementById("fancypants");

  // We use the focus and blur proerites to set CSS styles on the corresponding element.
  input.addEventListener("focus", event => {
    event.target.style.backgroundColor = "#E8F5E9";
  });
  input.addEventListener("blur", event => {
    event.target.style.backgroundColor = "initial";
  });
});




// 5.

window.addEventListener("DOMContentLoaded", event => {
  // get the form element
  const form = document.getElementById("signup-form");

  const checkPasswordMatch = event => {
    // get the values of the pw field and pw confirm field
    const passwordValue = document.getElementById("password").value;
    const passwordConfirmValue = document.getElementById("confirm-password")
      .value;
    // if the values are not equal, alert the user
    // otherwise, submit the form
    if (passwordValue !== passwordConfirmValue) {
      event.preventDefault();
      // prevent the default submission behavior
      alert("Passwords must match!");
    } else {
      alert("The form was submitted!");
    }
  };
  // listen for submit event and run password check
  form.addEventListener("submit", checkPasswordMatch);
});




// 6.


const handleDragStart = e => {  // What will happen when the element is being dragged

  // We use e.target to get the element
  e.target.classList.add('is-being-dragged');

  // We use e.dataTransfer to manipulate the data which will be transfered through
    // the drag and drop process
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'move';
};

const handleDragEnter = e => {
  // We need e.preventDefault(); so that the "drop" event will fire.
  e.preventDefault();
  e.target.classList.add('is-active-drop-zone');
};

const handleDragLeave = e => {
  e.target.classList.remove('is-active-drop-zone');
};

const handleDragOver = e => {
  // We need e.preventDefault(); so that the "drop" event will fire.
  e.preventDefault();
};

const handleDrop = e => {
  // Get the id through the data that was set to the dataTransfer object in handleDragStart
  const id = e.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(id);

  // We no longer want the element to be draggable
  draggedElement.draggable = false;

  // We access the drop zone through e.target
  // drop is an event on the dropzone
  e.target.appendChild(draggedElement);
};

window.addEventListener('DOMContentLoaded', () => {

  // We set the dragstart event on the red square
  document.getElementById('red-square')
    .addEventListener('dragstart', handleDragStart);

  // These other events revolve around the dropzone
  const dropZone = document.getElementById('drop-zone');
  dropZone.addEventListener('drop', handleDrop);
  dropZone.addEventListener('dragenter', handleDragEnter);
  dropZone.addEventListener('dragleave', handleDragLeave);
  dropZone.addEventListener('dragover', handleDragOver);
});





// 7. 

// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", event => {
  // Add a click event listener on the document’s body
  document.body.addEventListener("click", event => {
    // console.log the event target’s ID
    console.log(event.target.id);
  });
});





// 8.  Define the bubbling principle

// - The Bubbling Principle means that when an event happens on an element, 
  // it first runs the event handlers on that element, 
  // then on its parent, 
  // then all the way up on other ancestors.