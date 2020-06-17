const readline = require('readline');

export default class Department {

  constructor(deptTitle){
    this.deptTitle = deptTitle;
    this.checkDeptTitle();
    this.employees = [];
  }

  checkDeptTitle(){
    const approvedDepts = ["Sales", "Distribution"];
    if( !approvedDepts.includes(this.deptTitle) ){
      this.getNewDeptTitle();
    }
  }

  getNewDeptTitle(){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('The department title is not approved.\nPlease enter a new title: ', (deptTitle) => {
      this.deptTitle = deptTitle;
      rl.close();
    });

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
}