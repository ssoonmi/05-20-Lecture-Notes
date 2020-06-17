import Department from './departments/department.js';
import {Employee, Manager} from './employees/employee.js'

export default function simulateBackend(){
  const data = {
      employees: [],
      departments: []
  }

  sales = new Department("Sales");
  distribution = new Department("Distribution");

  michael = new Manager("Michael Scott", "Regional Manager", 40000, sales);
  dwight = new Employee("Dwight Schrute", "Floor Supervisor", 35000, sales);
  pam = new Employee("Pamela Halpert", "Office Administrator", 35000, sales);
  jim = new Employee("Jim Halpert", "Lead Sales", 35000, sales);
  darryl = new Employee("Darryl Philibin", "Foreman", 35000, distribution);

  michael.addToTeam(dwight);
  pam.addSupervisor(michael);
  jim.addSupervisor(michael);

  data.departments.push(sales, distribution);
  data.employees.push(michael, dwight, pam, jim, darryl);

  return data;
}