// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markdownComplete = 
  `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Instructions](#instructions)
  - [Credits](#credits)
  - [License](#license)
  - [Contact](#contact)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contribution}
  ## Instructions
  ${data.instructions}
  ## Credits
  ${data.credit}
  ## License
  ${data.license}
  ## Contact
  ### GitHub URL: ${data.github}
  ### Email: ${data.email}
  `//END
  console.log(markdownComplete); //Displays complete readme file
  return markdownComplete;
}
//data will be our file that will be generated
module.exports = generateMarkdown;
