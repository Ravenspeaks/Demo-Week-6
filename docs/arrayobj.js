"use strict";
/**
 * this JS file illustrates
 * 1. creating an array of objects using a constructor function and a class
 * 2. presenting the data in an array of objects with a web table
 *
 * */

// function calls
let arrayEmps = getArrayObj();
presentData(arrayEmps);

// function definitions
function getArrayObj() {
  // this function serves as a constructor for creating same structured objects
  function payroll(iName, iHrs, iPayrate = 20) {
    this.name = iName;
    this.hours = iHrs;
    this.payRate = iPayrate;
    this.pay = function () {
      return this.hours * this.payRate;
    };
  }

  // Define a class, Payroll. Pay attention to the name difference between the class name and the function constructor name
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
  let emps = [];

  //create a new employee using the constructor function with no pay rate provided
  let emp1 = new payroll("Mary", 30);
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
function presentData(emps) {
  // process employee payroll with the data in the array
  let sum = 0; // initialize the accumulator
  let htmlStr = "<h3>Employee Payroll</h3>";
  htmlStr +=
    "<table><tr><th>Name</th><th>Hours</th><th>Pay Rate</th><th>Pay Amount</th><tr>";
  for (let i = 0; i < emps.length; i++) {
    sum += emps[i].pay();
    htmlStr += `<tr><td>${emps[i].name}</td><td>${emps[i].hours}</td>
  <td>$${emps[i].payRate}</td>
  <td> $${emps[i].pay()}</td></tr>`;
  }

  htmlStr += `<tr><td colspan=4>Total payroll: $${sum}</td></tr></table>`;
  document.getElementById("section1").innerHTML = htmlStr;
}

//My practice 
class Payroll {
  constructor(name, hours, payRate) {
    this.name = name;
    this.hours = hours;
    this.payRate = payRate;
  }

  pay() {
    return this.hours * this.payRate;
  }
}
// create two new employees using the Payroll class and add them to the emps array

let emps2 = [];

emps2.push(new Payroll("Emily", 40, 25));
emps2.push(new Payroll("John", 20, 18));

// call the presentData function, passing the updated emps2 array as an argument
presentData(emps2, "section2");

function presentData(emps, section = "section2") {
  let sum = 0;
  let htmlStr = "<h3>Your Practice Output</h3>";
  htmlStr +=
    "<table><tr><th>Name</th><th>Hours</th><th>Pay Rate</th><th>Pay Amount</th><tr>";
  for (let i = 0; i < emps.length; i++) {
    if (emps[i].name === "Emily" || emps[i].name === "John") {
      sum += emps[i].pay();
      htmlStr += `<tr><td>${emps[i].name}</td><td>${emps[i].hours}</td>
      <td>$${emps[i].payRate}</td>
      <td> $${emps[i].pay()}</td></tr>`;
    }
  }

  htmlStr += `<tr><td colspan=4>Total payroll: $${sum}</td></tr></table>`;
  document.getElementById("section2").innerHTML = htmlStr;
}