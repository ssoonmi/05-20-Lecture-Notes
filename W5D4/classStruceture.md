# Our prompt

At Blunder Mifflin Paper Company, we have been relying on paper for all of our internal human resources. We believe in paper and as a member of this company so should you! However, we feel it is finally time to have our own website dedicated to internal human resources. Sometimes paper just can't cut it. (Get it? Paper, cut... I'll see mysel out) 
We want to focus on our internal departments and employees. We believe you have the power to bring us slightly into the future!


## What do we want to achieve?

* Create a website that has a collection of employees and departments
    - make class for employeees
    - make class for departments
    - make class to handle business logic
* Business logic
    - how we handle the employees and departments
* How to handle click events, visuals, HTML
* Functions within classes (instance methods)
    - add /remove employees
    - print employe files
    - salary / job title
    - set / get manager & asst manager
* form elemnts
    - hr claims
    - update data
    - residence
    - etc
* sub class for employees
    - dependents
* contact / feddback page
* add employee reviews / comnplaints







## Classes

* Departments
* Employees
* Business Logic
* Dependents extends Employees

## Methods

### Department

* get / setEmployees
    - return array of employees for that department
* get / setManager
    - return Manager of Department
* getExpenditure
    - how much we pay all employees in dept
* addEmployee / removeEmployee
* getSales
    - get the dept sales total
* get / setDepartmentNum
    - get the id number for the dept

### Employees

* getPostion
* startDate
* name, salary, department, manager, id, birthday
* isManager
    - return boolean if person is a manager
* performanceReviews / disciplinaryHisotry
* getSales
* get / setTeam
    - for a manager
* updatePosition
* updateSalary
* schedules


### Manager Class extends Employee

* have list of employees
* but only have one manager per department
* will conatin addtional methods that is specific to a manager
* setPerformance review
    - gives a perfomance review to a member of their team
* setSchedules
* terminateEmployee
    - ability ofr manager to temrinate an employee
* hireEmployee