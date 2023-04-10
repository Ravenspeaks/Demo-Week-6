"use strict";

// Define the payroll constructor function
class Payroll {
  constructor(iName, iHrs, iPayrate = 20) {
    this.name = iName;
    this.hours = iHrs;
    this.payRate = iPayrate;
  }
  pay() {
    return this.hours * this.payRate;
  }
}

// function calls
let arrayEmps = getArrayObj();
presentData(arrayEmps);

// function definitions
function getArrayObj() {
  let emps = [];
  //create a new employee using the constructor function with no pay rate provided
  let emp1 = new Payroll("Mary", 30);
  // add the new employee to the array
  emps.push(emp1);
  // create another employee with the constructor function and add it directly to the array
  emps.push(new Payroll("Jack", 35, 22));
  // create two new employees using the Payroll class and add them directly to the array
  emps.push(new Payroll("Debby", 25, 22));
  emps.push(new Payroll("Adam", 30, 21));
  // return the populated array emps
  return emps;
}

function presentData(emps, section = "section1") {
  // process employee payroll with the data in the array
  let sum = 0; // initialize the accumulator
  let htmlStr = "<h3>" + (section === "section2" ? "Payroll" : "Employee Payroll") + "</h3>";
  htmlStr += "<table><tr><th>Name</th><th>Hours</th><th>Pay Rate</th><th>Pay Amount</th><tr>";
  for (let i = 0; i < emps.length; i++) {
    sum += emps[i].pay();
    htmlStr += `<tr><td>${emps[i].name}</td><td>${emps[i].hours}</td>
    <td>$${emps[i].payRate}</td>
    <td> $${emps[i].pay()}</td></tr>`;
  }
  htmlStr += `<tr><td colspan=4>Total payroll: $${sum}</td></tr></table>`;
  document.getElementById(section).innerHTML = htmlStr;
}

// MY practice

// add new employees to the array and display them in section 2

let emps2 = [];
function addNewEmployee(name, hours, payrate) {
  emps2.push(new Payroll(name, hours, payrate));
}
addNewEmployee("John", 25, 20);
addNewEmployee("Emily", 35, 22);

presentData(emps2, "section2");


