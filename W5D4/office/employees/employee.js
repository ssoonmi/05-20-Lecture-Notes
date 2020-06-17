export class Employee {
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

  display(){
    return `<li class="employee-li">` +
      `<div class="employee-div">Name: ${this.name}</div>` +
      `<div class="employee-div">Department: ${this.department.deptTitle}</div>` +
      `<div class="employee-div">Position: ${this.position}</div>` +
      `<div class="employee-div">Salary: ${this.salary}</div>` + `</li>`;
  }

  commitTomfoolery(shenanigan, victim, ...witnesses){
    this.shenanigans.push(shenanigan);
    this.enemies.push(victim, ...witnesses);
  }

  paycut (amountDeducted, demotion) {
    this.salary -= amountDeducted;
    this.position = demotion;
  }

  hrReprot () {
    alert('Error: HR does not exist');
  }

  addSupervisor(manager){
    if (this.supervisor !== manager){
      this.supervisor = manager;
      manager.addToTeam(this);
    }
  }
}

export class Manager extends Employee {
  constructor(name, position, salary, department){
    super(name, position, salary, department);
    this.team = [];
  }

  displayTeam(){
    this.display();
    this.team.forEach((employee =>{
      employee.display();
    }))
  }

  addToTeam(employee){
    if(!this.team.includes(employee)){
      employee.addSupervisor(this);
    } else {
      alert("Already a team member!");
    }
  }
}
