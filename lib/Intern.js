const Employee = require("./Employees");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Manager";
    }

    getschool() {
        return this.school;
    }
}


module.exports = Intern;