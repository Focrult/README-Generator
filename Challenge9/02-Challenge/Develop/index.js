//Install fs & inquirer
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'Enter your title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your codes Usage:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines: ',
        name: 'contribution guidelines',
    },
    {
        type: 'input',
        message: 'Discuss test instructions:',
        name: 'test instructions',
    },
    {
    type: 'list',
    message: "Choose a license below: ",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
    },
    ])
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, `${process.argv[0]}\n`, (err) =>
    err ? console.error(err) : console.log("Info Logged!"))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
