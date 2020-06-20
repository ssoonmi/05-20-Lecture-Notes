// the export syntax will not work in node
export class Employee {

  // cosnt michael = new Employee("michael scott", "regional manager",
  //                  40000, sales)

  constructor(name, position, salary, department) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.department = department;
    department.addEmployee(this);
    this.shenanigans = [];
    this.enemies = [];
    this.supervisor;
  }

  // We return a string formatted as an <li>
  display(){
    return `<li class="employee-li">` +
      `<div class="employee-div">Name: ${this.name}</div>` +
      `<div class="employee-div">Department: ${this.department.deptTitle}</div>` +
      `<div class="employee-div">Position: ${this.position}</div>` +
      `<div class="employee-div">Salary: ${this.salary}</div>` + `</li>`;
  }

  // Note the use of the spread operator
  // vistem and witnesses are instances of employee class
  commitTomfoolery(shenanigan, victim, ...witnesses){
    this.shenanigans.push(shenanigan);
    this.enemies.push(victim, ...witnesses);
  }

  paycut (amountDeducted, demotion) {
    this.salary -= amountDeducted;
    this.position = demotion;
  }

  // alert will only work when we are in the browser
  hrReport () {
    alert('Error: HR does not exist');
  }

  // First we check if the manager is alredy set as the employee's supervisor
  addSupervisor(manager){
    if (this.supervisor !== manager){
      this.supervisor = manager;
      manager.addToTeam(this);
    }
  }
}

// A manager is a specific type of employee
export class Manager extends Employee {
  constructor(name, position, salary, department){
    super(name, position, salary, department);
    this.team = [];
  }

  // michael.displayTeam(); sets the context, sets this to michael
  // michael is an instance of the manager class.
  // We can also call michael a manager object

  displayTeam(){ // context, this = michael
    this.display(); // michael.display();
    this.team.forEach((employee =>{ // michael.team()
      employee.display();
    }))
  }

  addToTeam(employee){
    // check if employee is in team
    if(!this.team.includes(employee)){
      this.team.push(employee);
      employee.addSupervisor(this);
    } else {
      alert("Already a team member!");
    }
  }
}

// module.exports is for when we are in node

// module.exports = {
//   Employee, 
//   Manager
// }