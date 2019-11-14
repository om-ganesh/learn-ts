enum Category { Bilogy, Physics, Math};
enum EmployeeType { Manager, Developer, Advisor }

let myPost = EmployeeType.Developer;
console.log(myPost); //output the numeric value attached to enum
console.log(EmployeeType[myPost]); //will output the actual enum string

