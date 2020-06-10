// event.target gives us what intiated the event
// event.currentTarget gives us the HTMLelement which the 
    // event is assigned to



window.addEventListener("DOMContentLoaded", event => {
  // Add a click event listener on the document’s body

  document.body.addEventListener("click", event => {
    console.log('body was clicked!');

    
    console.log(`event.target: ${event.target}`);
    console.log(`target's id: ${event.target.id}`)
    console.log(`event.currentTarget: ${event.currentTarget}`)

  });
});