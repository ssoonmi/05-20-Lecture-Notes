// the export syntax will not work in node
// export deafult for ES6, the browser
export default class Department {
  constructor(deptTitle){
    this.deptTitle = deptTitle;
    this.employees = [];
  }

  addEmployee(employee){
    this.employees.push(employee);
  }

  removeEmployee(removedEmployee){
    // check if employee is in the dept
    if(this.employees.includes(removedEmployee)){
      this.employees = this.employees.filter((employee)=>{
        return employee !== removedEmployee;
      })
    } else {
      console.log(`\nEmployee not found in ${this.deptTitle}.\n`)
    }
  }

  // We return a string formatted as an <li>
  display(){
    return `<li class="department-li">
      ${this.deptTitle}
      <br>
      Number of Staff: ${this.employees.length}
    </li>`;
  }
}

// module.exports is for when we are in node

// module.exports = Department;