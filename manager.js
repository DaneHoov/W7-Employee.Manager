const Employee = require('./employee.js')

class Manager extends Employee {
    constructor (name, salary, title, manager) {
        super(name, salary, title, manager)

        this.employees = []
    }

    addEmployee(employee) {
        if (!(employee instanceof Employee)) {
            console.log("Not an employee instance.")
            return;
        }
        else if (this.manager !== undefined) {
            this.employees.push(employee)
            return
        }
        this.employees.push(employee)
    }

}

module.exports = Manager
