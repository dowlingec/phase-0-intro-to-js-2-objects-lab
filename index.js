// Write your solution in this file!
const employee = {
    name: "Liz",
    streetAddress: "12 Armoury Drive"
};

const updateEmployeeWithKeyAndValue = (employee, name, newName) => {
    const newEmployee = {...employee}
    newEmployee[name] = newName;
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, name, newName) => {
    employee[name] = newName;
    return employee;
}

const deleteFromEmployeeByKey = (employee, name) => {
    const delEmployee = {...employee}
    delete delEmployee.name;
    return delEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, name) => {
    delete employee.name;
    return employee;
}