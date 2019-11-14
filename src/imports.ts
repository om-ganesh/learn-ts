/// <reference path="./lib/namespc.ts" />

// console.log("Importing the namespace");
// Membership.PrintName("Subash");
// console.log(Membership.Manager.AddMember("Joe"));


//Importing using requirejs
console.log("Import/Export using requirejs method");
var point = require('./lib/Point').Point;
var aPoint = require('./lib/Point').AnotherPoint;
//Need to explicitly declare memory for custom types
let obj = new point(12, 13);
//obj.x =-2;
obj.x =2;
obj.draw();
console.log(aPoint.Message);
//Also, we can import all in a single variable
var allPoints = require('./lib/Point');
let obj11 = new allPoints.Point(11,55);
obj11.draw();
console.log(allPoints.AnotherPoint.Message);

//import { Point } from "./Point";
// import {CalculateFee, Math} from "./lib/Utility";
// //import * as MyUtility from "./lib/Utility"; //can import as different name/alias

// console.log(CalculateFee(4));
// console.log(Math.sqrt(2));

// let m = new Math();
// console.log(m.PI);