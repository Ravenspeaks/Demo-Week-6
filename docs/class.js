"use strict";
/**
 * this JS file covers
 * 1. creation of objects using a class
 * 2. accessing object properties and methods
 *
 * */

// Define a class, Payroll
class Payroll {
  constructor(iName, iHrs, iPayrate = 20) {
    this.name = iName;
    this.hours = iHrs;
    this.payRate = iPayrate;

    /*    // this method is ok but not needed.
    this.info = function () {
      return this.name + this.hours;
    }; 
    */
  }
  pay() {
    return this.hours * this.payRate;
  }
}
// create an object off the Payroll class, then show it in section 1 of the webpage
let emp = new Payroll("Mary", 30);
let htmlStr = `<h3>Done with JS Class</h3><p>Name: ${emp.name}<br>Hours: ${
  emp.hours
}<br>Pay rate: ${emp.payRate}<br>
Pay amount: ${emp.pay()}</p>`;
// htmlStr += emp.info();
document.getElementById("section1").innerHTML = htmlStr;

/*
// show object's properties including inherited
console.log("Object emp has these properties and values including inherited:");
for (const key in emp) {
  console.log(key + ": " + emp[key]);
}

// show object's own properties
console.log("Object emp has these properties and values of its own:");
for (const [key, value] of Object.entries(emp)) {
  console.log(`${key}: ${value}`);
}
*/
