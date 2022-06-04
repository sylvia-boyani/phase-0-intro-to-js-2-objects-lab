// //Write your solution in this file!
// var employee;
// employeeName: "name"
// employeeAddress: "address"
//  employee = {};
//  console.log(employee)
// //var updateObjectWithKeyAndValue = ("employee")
// function updateEmployeeWithKeyAndValue (employee, key, value){
// return employee.assign({}, employee, {[key]: value});
// }
// function deleteFromEmployeeByKey(employee, key){
//     var clone = employee.assign({}, employee);
//     delete clone[key];
//     return clone;
// }

var employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return employee.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return object;
}

function deleteFromEmployeeByKey(employee, key) {
  var clone = Employee.assign({}, employee);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}