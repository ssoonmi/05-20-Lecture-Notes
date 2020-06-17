import Department from './departments/department.js';
import {Employee, Manager} from './employees/employee.js'

export default function simulateBackend(){
  const data = {
      employees: [],
      departments: []
  }

  const sales = new Department("Sales");
  const distribution = new Department("Distribution");

  const michael = new Manager("Michael Scott", "Regional Manager", 40000, sales);
  const dwight = new Employee("Dwight Schrute", "Floor Supervisor", 35000, sales);
  const pam = new Employee("Pamela Halpert", "Office Administrator", 35000, sales);
  const jim = new Employee("Jim Halpert", "Lead Sales", 35000, sales);
  const darryl = new Employee("Darryl Philibin", "Foreman", 35000, distribution);

  michael.addToTeam(dwight);
  pam.addSupervisor(michael);
  jim.addSupervisor(michael);

  data.departments.push(sales, distribution);
  data.employees.push(michael, dwight, pam, jim, darryl);

  return data;
}