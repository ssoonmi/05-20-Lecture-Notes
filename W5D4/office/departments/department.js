// readline will not work in the browser
// const readline = require('readline');

// the export syntax will not work in node
export default class Department {
  constructor(deptTitle){
    this.deptTitle = deptTitle;
    this.checkDeptTitle();
    this.employees = [];
  }

  // We make sure that the department title is in a list of approved departments
  checkDeptTitle(){
    const approvedDepts = ["Sales", "Distribution"];
    if( !approvedDepts.includes(this.deptTitle) ){
      this.getNewDeptTitle();
    }
  }

  // The following would use the readline functionality to get a new department title
  // You will have to refactor several files in order to run this in node
  getNewDeptTitle(){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // to use readline, we must be in node

    // rl.question('The department title is not approved.\nPlease enter a new title: ', (deptTitle) => {
    //   this.deptTitle = deptTitle;
    //   rl.close();
    // });

    this.checkDeptTitle();
  }

  addEmployee(employee){
    this.employees.push(employee);
  }

  removeEmployee(removedEmployee){
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