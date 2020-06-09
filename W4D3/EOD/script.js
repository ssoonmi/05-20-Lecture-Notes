// 1.

window.addEventListener("DOMContentLoaded", event => {
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");
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
  const stopCyanMadness = () => {
    // get the value of the input field
    const inputValue = document.getElementById("stopper").value;
    // if value is anything other than 'STOP', change background color
    if (inputValue !== "STOP") {
      document.body.style.backgroundColor = "cyan";
    }
  };
  setTimeout(stopCyanMadness, 5000);
});

// 4.

window.addEventListener("DOMContentLoaded", event => {
  const input = document.getElementById("fancypants");

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

const handleDragStart = e => {
  e.target.classList.add('is-being-dragged');
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'move';
};

const handleDragEnter = e => {
  // Needed so that the "drop" event will fire.
  e.preventDefault();
  e.target.classList.add('is-active-drop-zone');
};

const handleDragLeave = e => {
  e.target.classList.remove('is-active-drop-zone');
};

const handleDragOver = e => {
  // Needed so that the "drop" event will fire.
  e.preventDefault();
};

const handleDrop = e => {
  const id = e.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(id);
  draggedElement.draggable = false;
  e.target.appendChild(draggedElement);
};

window.addEventListener('DOMContentLoaded', () => {

  document.getElementById('red-square')
    .addEventListener('dragstart', handleDragStart);

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

//