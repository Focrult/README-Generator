//Install fs & inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
//include markdown here?
const markdown = require('./utils/generateMarkdown');
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
        choices: ['Academic Free License v3.0', 'Apache License 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0',  'MIT License',  'The Unlicense'],
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
        writeToFile(m)
    })
]
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README2.md', `${JSON.stringify(data)}\n`,(err) =>
        err ? console.error(err) : console.log("logged!"));
    }




// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
// init();
