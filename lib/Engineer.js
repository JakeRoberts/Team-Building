const Employee = require("./Employees");

class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email);
        this.GitHub = GitHub;
    }
    getRole() {
        return "Manager";
    }

    getGitHub() {
        return this.GitHub;
    }
}


module.exports = Engineer;