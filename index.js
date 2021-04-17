const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const htmlGenerator = require("./htmlgenerator");
const team = [];
const employeeQ = [
    {
        message: "Name?",
        name: "name"
    },
    {
        message: "Id?",
        name: "id"
    },
    {
        message: "Email?",
        name: "email"
    },
];
const managerQ = [
    //... spread operator. all elements of employee Q will be inserted into managerQ
    ...employeeQ,
    {
        message: "Office Number?",
        name: "officeNumber"
    }
];
const engineerQ = [
    ...employeeQ,
    {
        message: "Github Account?",
        name: "gitHub"
    }
];
const internQ = [
    ...employeeQ,
    {
        message: "School?",
        name: "school"
    }
];
// welcomes the user. asks if you want to add manager,engineer, intern or if you're finished.
const init = () => {
    console.log("welcome to the team");
    menu();
};

// this function will be asking what you want
const menu = () => {
    inquirer.prompt({
        message: "Add an Employee?",
        name: "action",
        type: "list",
        choices: ["Manager", "Engineer", "Intern", "Finished"]
    })
    //tells if response is either of the choices
    .then((response) => {
        switch (response.action) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Finished":
                generateHtml();
                break;
        }
    });
};

// will add a new manager
const addManager = () => {
    inquirer.prompt(managerQ).then((response) => {
        const emp = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(emp);
        menu();
    });
};

// will add a new engineer
const addEngineer = () => {
    inquirer.prompt(engineerQ).then((response) => {
        const emp = new Engineer(response.name, response.id, response.email, response.gitHub);
        team.push(emp);
        menu();
    });
};

// will add a new intern
const addIntern = () => {
    inquirer.prompt(internQ).then((response) => {
        const emp = new Intern(response.name, response.id, response.email, response.school);
        team.push(emp);
        menu();
    });
};

//will create the HTML.
const generateHtml = () => {
    const html = htmlGenerator(team);
    fs.writeFileSync("./dist/team.html", html);
    endFunction();
};

//Ends everything
const endFunction = () => {
console.log("Your HTML file is in the dist folder.");
console.log("Thank you for using the app.");
};


init();