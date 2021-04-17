const { test, expect } = require("@jest/globals");
const { describe, terminalWidth } = require("yargs");
const Engineer = require("../lib/Engineer");

    const emp = new Engineer("Josh", 1, "josh@basketball.com", "josh@github.com");
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

    test("should store GitHub", () => {
        expect(emp.getGitHub()).toBe("josh@github.com");
    });

    test("should have proper role ", () => {
        expect(emp.getRole()).toBe("Engineer");
    });