"use strict";
/**
 * this JS file covers
 * 1. creation of objects using a constructor function
 * 2. accessing object properties and methods
 *
 * */
// Defining a constructor function
function payroll(iName, iHrs, iPayrate = 20) {
  this.name = iName;
  this.hours = iHrs;
  this.payRate = iPayrate;
  this.pay = function () {
    return this.hours * this.payRate;
  };
}

// create an object off the payroll constructor function, then show it in section 1 of the webpage
let emp = new payroll("Mary", 30);
let htmlStr = `<h3>Done with constructor function </h3><p>Name: ${
  emp.name
}<br>Hours: ${emp.hours}<br>Pay rate: ${emp.payRate}<br>
Pay amount: ${emp.pay()}</p>`;
document.getElementById("section1").innerHTML = htmlStr;

// This method is not recommended
let emp1 = new Object();
emp1.name = "Jack";
emp1.hours = 25;
emp1.payRate = 20;
emp1.pay = function () {
  return this.hours * this.payRate;
};
htmlStr = `<h3>Done with new Object()</h3><p>Name: ${emp1.name}<br>Hours: ${
  emp1.hours
}<br>Pay rate: ${emp1.payRate}<br>
Pay amount: ${emp1.pay()}</p>`;
document.getElementById("section1").innerHTML += htmlStr;

// testing calling a constructor function without creating an object
// payroll("jack", 20);

//my Practice
("use strict");
function Person(name, age, town) {
  this.name = name;
  this.age = age;
  this.town = town;
}

Person.prototype.details = function () {
  return {
    name: this.name,
    age: this.age,
    town: this.town,
  };
};

let person1 = new Person("Norm", 30, "New York");
const htmlStr2 = `<h4>New person's Details</h4><p>Name: ${person1.name}<br>
Age: ${person1.age}<br>Town: ${person1.town}</p>`;
document.getElementById("section2").innerHTML = htmlStr2;
