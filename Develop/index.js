// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
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
        name: 'tests',

    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',

    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',

    },
    
    
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('It Worked! Please preview your ReadMe file inside the CreatedReadMe Folder!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile('READMe.md', generateMarkdown(userInput));
    })
}

// Function call to initialize app
init();
