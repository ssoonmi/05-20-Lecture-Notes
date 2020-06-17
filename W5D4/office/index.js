import simulateBackend from './simulateBackend.js';

window.addEventListener("DOMContentLoaded", () => {
  [ employees, departments ] = simulateBackend();
  saveToCookies(employees);
  saveToCookies(departments);
  displayData("employee-list", employees);
  displayDepts("department-list", departments);
});

function saveToCookies(data){

};

// will grab on to the ul with that id, 
  // then populate it with li of the data type
function displayData(ulId, data){

}
