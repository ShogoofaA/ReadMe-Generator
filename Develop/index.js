// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GithHub username?',
        name: 'gitHubName',

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',

    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',

    },
    {
        type: 'input',
        message: 'Please write a short description about your project.',
        name: 'description',

    },
    {
        type: 'list',
        message: 'What kind of licence should your project have?',
        name: 'license',

    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'command',

    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',

    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',

    },
    
    
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
