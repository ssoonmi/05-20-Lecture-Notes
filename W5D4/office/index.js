import simulateBackend from './simulateBackend.js';

window.addEventListener("DOMContentLoaded", () => {
  // we grab the data which we created in our simulated backend
  const {employees, departments} = simulateBackend();
  
  displayData("employee-list", employees);
  displayData("department-list", departments);

  // We utilize the debugger invoke instance methods on 
    // the employees we created.
  // debugger
});

// will grab on to the ul with that id, 
  // then populate it with li of the data type
// Note that both the employee and department class
  // have a display method that returns a string
  // that is formatted like an <li>
function displayData(listId, dataArray){
  const list = document.getElementById(listId);
  dataArray.forEach(item =>{
    const li = item.display();
    list.innerHTML += li;
  });
}
