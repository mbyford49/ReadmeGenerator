// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// An array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Provide a description of your project',
        name: 'description',
    },

    {
        type: 'input',
        message: 'How is this application installed?',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'How is this application used?',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'How is this application tested?',
        name: 'testing',
    },

    {
        type: 'input',
        message: 'How can other devlopers contribute?',
        name: 'contribution',
    },

    {
        type: 'list',
        message: 'Choose a license',
        choices: ['MIT','Apache 2.0','BSD 3-Clause New or Revised','BSD 2-Clause Simplified','ISC','Creative Commons Zero v1.0 Universal','GNU Lesser General Public v3.0','Mozilla Public 2.0'],
        name: 'license',
    },

    {
        type: 'input',
        message: 'Enter email address',
        name: 'email',
    },

    {
        type: 'input',
        message: 'Enter Github username',
        name: 'github',
    },
];

// This function writes a README file using the responces from the questions array
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        err && console.error(err);
    });
}

// This function initializes the app prompting the user to respond to the array of questions
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponces) => {
        writeToFile('README.md', generateMarkdown({...inquirerResponces}));
    });
}

// Function call to initialize app
init();
