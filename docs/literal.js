"use strict";
/**
 * this JS file covers
 * 1. creation of objects using literal notation
 * 2. access object properties and methods
 *
 * */

let emp = {
  name: "Bob",
  hours: 20,
  payRate: 20,
  pay() {
    return this.hours * this.payRate;
  }
};

let htmlStr = `<h3>Done with object literal notation</h3><p>empName: ${emp.name}<br> Hours worked: ${
  emp.hours
}<br> pay rate: ${emp.payRate}<br>
Pay amount: ${emp.pay()}</p>`;
document.getElementById("section1").innerHTML = htmlStr;
