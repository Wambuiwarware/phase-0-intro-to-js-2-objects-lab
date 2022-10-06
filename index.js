// Write your solution // //To start, assign an `employee` variable to an `Object` containing
// `name` and `streetAddress` keys; you can use whatever values you like. Use
// literal syntax to create your `Object`. Various updates will be applied to this
// // variable (destructively and non-destructively) in this lab.
var employee = { 
    "name": "Wambui", 
    "streetAddress":"11 kAJIADO",}


// //`updateEmployeeWithKeyAndValue()`: this function should take in three
//   arguments: an `employee` `Object`, a `key` and a `value`. This function should
//   not mutate the `employee`; it should return a _new_ `Object` that has an
//   updated `value` for the `key` passed in. **Hint**: use the spread operator!

function updateEmployeeWithKeyAndValue(employee, key, value){ 
    
    var newObj= { ...employee
    }
     newObj["name"]="Sam"
     newObj["streetAddress"]="11 Broadway"
    return newObj}
//     `destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
//   same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
//   `employee` `Object` passed in.

   function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress="12 Broadway"
    return employee
   }
//    `deleteFromEmployeeByKey()`: this function should take in a `employee`
//    `Object` and a `key`. It should delete the property with that `key` from the
//    `employee` `Object`. This should not mutate the original `employee` `Object`;
//    it should return a _new_ `Object` that doesn't include the identified
//    key-value pair. **Hint**: use the spread operator!
   function  deleteFromEmployeeByKey(employee, key){
    let newEmployee={...employee};
    delete newEmployee['name'];
    return newEmployee
   }
//    destructivelyDeleteFromEmployeeByKey()`: this function should work the same
//   as `deleteFromEmployeeByKey()` but it _should_ mutate the `employee` `Object`.

   function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee["name"]
    return employee
   }

    







