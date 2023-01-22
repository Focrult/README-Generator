//Install fs & inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//include markdown here?
const markdown = require('./utils/generateMarkdown');
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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
        markdown(data);
    })
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, `${process.argv[0]}\n`, (err) =>
    err ? console.error(err) : console.log("Info Logged!"))
}

// TODO: Create a function to initialize app
// const data = await inquirer.promt(questions);
function init() {
    try{
//  const input = await inquirer.promt(questions); //fix this error
 console.log("Initializing", input);
    }catch (error){console.log("error")
    }
    // questions();
    // if(questions.length){
    //     writeToFile();
    //     console.log("passed");
    //     }
}


// Function call to initialize app
init();
