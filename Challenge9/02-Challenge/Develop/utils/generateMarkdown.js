// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('render license badge');
  if(license){
    const licenseBadge = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    return licenseBadge[license]
  }else{
  return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('render license link');
  if(license){
    const licenseLink = {
      mit: '[MIT](https://choosealicense.com/licenses/mit/)',
  }
  return licenseLink[license];
}else{
return '';
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('render license section');
if(license){
  return `Licensed under the ${renderLicenseLink(license)} license`
}else{
  return '';
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license)
  const markdownComplete = 
  `# ${data.title}

  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}
  ## Contact
  ### GitHub URL: https://github.com/${data.github}
  ### Email: ${data.email}
  `//END
  console.log(markdownComplete); //Displays complete readme file
  return markdownComplete;
}
//data will be our file that will be generated
module.exports = generateMarkdown;
