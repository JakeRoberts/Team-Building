const { test, expect } = require("@jest/globals");
const { describe, terminalWidth } = require("yargs");
const Employee = require("../lib/Employees");

    const emp = new Employee("Josh", 1, "josh@basketball.com");
    //testing to make sure emp is an object
    test("should create an object", () => {
        expect(typeof(emp)).toBe("object");
    });

    test("should store name", () => {
        expect(emp.getName()).toBe("Josh");
    });

    test("should store id", () => {
        expect(emp.getId()).toBe(1);
    });

    test("should store email", () => {
        expect(emp.getEmail()).toBe("josh@basketball.com");
    });

    test("should have proper role", () => {
        expect(emp.getRole()).toBe("Employee");
    });