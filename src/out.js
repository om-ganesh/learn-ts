var Membership;
(function (Membership) {
    function PrintName(name) {
        console.log(name);
    }
    Membership.PrintName = PrintName;
    var Manager;
    (function (Manager) {
        function AddMember(name) {
            return name + ' Member added.';
        }
        Manager.AddMember = AddMember;
    })(Manager = Membership.Manager || (Membership.Manager = {}));
})(Membership || (Membership = {}));
/// <reference path="./lib/namespc.ts" />
console.log("Importing the namespace");
Membership.PrintName("Subash");
console.log(Membership.Manager.AddMember("Joe"));
// import {CalculateFee, Math} from "./lib/Utility";
// //import * as MyUtility from "./lib/Utility"; //can import as different name/alias
// console.log(CalculateFee(4));
// console.log(Math.sqrt(2));
// let m = new Math();
// console.log(m.PI);
