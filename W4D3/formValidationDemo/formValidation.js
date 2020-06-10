// Here we will use the HTMLelement.value to get 
    // the text inside of an input field.
// If the strings do not match we prevent the form 
    // from being submitted using event.preventDefault();



    
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
      // prevent the default submission behavior
      event.preventDefault();
      alert("Passwords must match!");
    } else {
      alert("The form was submitted!");
    }
  };

  // listen for submit event and run password check
  form.addEventListener("submit", checkPasswordMatch);
});