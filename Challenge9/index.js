
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
init();
const questions = [
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'Enter your title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter your codes Usage:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Discuss test instructions:',
        name: 'instructions',
    },
    {
        type: 'input',
        message: "Enter yours projects credits",
        name: 'credits',
    },
    {
        type: 'list',
        message: "Choose a license below: ",
        choices: ['ISC', 'Apache License 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3',  'MIT License',  'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Enter your Github username",
        name: 'github',
    },
    {
        type: 'input',
        message: "Enter your email",
        name: 'email',
    }
    ])
    .then(({title, description, installation, usage, contribution, instructions, credits, license, github, email}) => {
        const data = {title, description, installation, usage, contribution, instructions, credits, license, github, email};
        const m = markdown(data);

        console.log(m);
        writeToFile(m);
    })
]
function writeToFile(data) {
    fs.writeFile('README-2.md', data,(err) =>
        err ? console.error(err) : console.log("logged!"));
    }
// Function to display welcome message - questions will automatically display.
function init() {
    console.log("Welcome to my README generator!");
    console.log("Follow and answer the questions provided below, and you will have a completed README for your github repositories!");
    console.log("--------------------------------------------------------------------------");
}

