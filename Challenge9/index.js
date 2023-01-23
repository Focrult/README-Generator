
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
init(); //initialize the welcome message
const questions = [ //series of questions
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'Enter your title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter your projects installation instructions: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter your projects usage information: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your projects contribution guidelines: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter your projects test instructions: ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose a license below: ',
        choices: ['ISC', 'Apache License 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3',  'MIT License',  'The Unlicense', 'Other'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your Github username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email: ',
        name: 'email',
    }
    ])
    .then(({title, description, installation, usage, contribution, tests, license, github, email}) => {
        const data = {title, description, installation, usage, contribution, tests, license, github, email}; //after completing the questions, data will be passed to the markdown function
        const m = markdown(data);

        console.log(m);
        writeToFile(m); //after data is returned from the function it will now be passed to the writeTofile function
    })
]
function writeToFile(data) {
    fs.writeFile('README-2.md', data,(err) =>
        err ? console.error(err) : console.log("logged!")); //verifys that the data has been logged and the readme is created!
    }
// Function to display welcome message - questions will automatically display.
function init() {
    console.log("Welcome to my README generator!");
    console.log("Follow and answer the questions provided below, and you will have a completed README for your github repositories!");
    console.log("--------------------------------------------------------------------------");
}

