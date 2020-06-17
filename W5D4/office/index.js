import simulateBackend from './simulateBackend.js';

window.addEventListener("DOMContentLoaded", () => {
  debugger
  const {employees, departments} = simulateBackend();
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("departments", JSON.stringify(departments));
  displayData("employee-list", employees);
  displayData("department-list", departments);
});

// will grab on to the ul with that id, 
  // then populate it with li of the data type
function displayData(listId, dataArray){
  const list = document.getElementById(listId);
  dataArray.forEach(item =>{
    const li = item.display();
    list.appendChild(li);
  });
}
