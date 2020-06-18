## Topics to cover:

1. Define a constructor function using ES5 syntax.
2. Define a method on the prototype of a constructor function using ES5 syntax.
3. Declare a class using ES6 (ES2015) syntax.
4. Define an instance method on a class (ES6).
5. Define a `static` method on a class (ES6).
6. Instantiate an instance of a class using the `new` keyword.
7. Implement inheritance using the ES6 extends syntax for an ES6 class.
8. Utilize the `super` keyword in a child class to inherit from a parent class.
9. Utilize `module.exports` and `require` to import and export functions and class from one file to another.
10. Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.
11. The three pillars of object-oriented programming
12. The SOLID principles
13. How to apply the Law of Demeter








## Our Implementation

* Office- Blunder Mifflin

* Departments
  - Each department should have a title
  - We want departments to keep track of their employees
  - We want departments to display inforamtion on a webpage

* Employees
  - To create a new emplyee, we need to know an employee's name, position, salary, and department
  - In the office, employees frequently commit shenanigans
  - Employees have several enemies
  - Each employeee has an optional supervisor
  - Employees may receive a paycut
  - HR has been cut due to financial reasons
  - We want employees to display inforamtion on a webpage

* Managers are a specific type of employee, a child class
  - Managers have a team to lead, containing supervised employees

* Create instances of departments and employees

* Load our webpage once we have created instances of the classes
  - normall this would be done by a backend







### Methods we want to implement on Departments

* instance variable / properties / attributes
  - this.deptTitle
    A string we set the department title to
  - this.employees
    An array contianing the departments employees


* methods
  addEmployee
  removeEmployee
  display
    - Display will return a string containing all of the department's information
    - This string will be formatted as an <li>. Remember, all HTML is really a string







### Methods we want to implement on Employees

* instance variables / properties / attributes
  - this.name
    A string set to the employee's name
  - this.position
    A string set to the employee's position
  - this.salary
    A num set to the employee's salary
  - this.department
    An instance of a department which the employee belongs to.
    We must make sure the department will also have this employee in its records.
  - this.shenanigans
    An array containg desriptions of all an employee's shenanigans
  - this.enemies
    An array containing instances of employees who are this employee's enemy
  - this.supervisor
    An instances of an employee set to this employee's direct supervisor
    Default to null incase the employee has no supervisor


* methods
  addSupervisor
  hrReport
    - What happens when we report someone to HR
  paycut
    - when an employee recieves a paycut
  comitTomfoolery
    - when an employee engages in shenanigans
  display
    - Display will return a string containing all of the department's information
    - This string will be formatted as an <li>. Remember, all HTML is really a string





### Methods we want to implement on Managers

* instance variables / properties / attributes
  - includes all the same as a regualar employee
    call super
  - this.team
    The employees a manager supervises


* methods
  - addToTeam
    Adds a member to the supervisor's team. 
    Makes sure the employee has this manager listed as their supervisor
  - displayTeam
    In case we only want to display a specfici team
    Calls the employee.team() method





<!-- If time- serialize, deserialize JSON -->