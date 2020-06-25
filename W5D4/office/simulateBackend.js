// import syntax is for the brwser, and usually we will be using js in the browser, ES6
import Department from './departments/department.js';
import * as People from './employees/employee.js';

const { Employee, Manager } = People;

// require is for node, ES5
// const Department = require('./departments/department.js');
// const {Employee, Manager} = require('./employees/employee.js');

// node cannot read 'export default'
export default function simulateBackend(){
  const data = {
      employees: [],
      departments: []
  }

  // Here we create new instances of departments and employees

  const sales = new Department("Sales");
  const distribution = new Department("Distribution");

  const michael = new Manager("Michael Scott", "Regional Manager", 40000, sales);
  const dwight = new Employee("Dwight Schrute", "Floor Supervisor", 35000, sales);
  const pam = new Employee("Pamela Halpert", "Office Administrator", 35000, sales);
  const jim = new Employee("Jim Halpert", "Lead Sales", 35000, sales);
  const darryl = new Employee("Darryl Philibin", "Foreman", 35000, distribution);

  // here we set the manager-employee relationship
  michael.addToTeam(dwight);
  pam.addSupervisor(michael);
  jim.addSupervisor(michael);

  data.departments.push(sales, distribution);
  data.employees.push(michael, dwight, pam, jim, darryl);

  return data;
};


