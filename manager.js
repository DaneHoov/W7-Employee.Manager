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

    calculateBonus(multiplier) {
        let allEmployeeSalaries = this._totalSubSalary()
        return (this.salary + allEmployeeSalaries) * multiplier
    }

    _totalSubSalary() {
        let sum = 0

        for (const employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary()
            } else if (employee instanceof Employee) {
                sum += employee.salary
            }
        }
        return sum;
    }

}

module.exports = Manager
