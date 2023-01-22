// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT License'){
    license = 'mit';
  }if(license == 'ISC'){
    license = 'isc';
  }if(license == 'GNU LGPLv3'){
    license = 'lgpl';
  }if(license == 'Apache License 2.0'){
    license = 'Apache';
  }if(license == 'Boost Software License 1.0'){
    license = 'boost';
  }if(license == 'GNU AGPLv3'){
    license = 'agpl';
  }if(license == 'GNU GPLv3'){
    license = 'gpl';
  }if(license == 'Artistic license 2.0'){
    license = 'AL2';
  }if(license == 'The Unlicense'){
    license = 'unlicense';
  }if(license == undefined){
    return ' ';
  }
    const licenseBadge = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      lgpl: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://opensource.org/licenses/lgpl-3.0)',
      Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      agpl: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
      gpl: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      AL2: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
      unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    }
    return licenseBadge[license]
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'MIT License'){
    license = 'mit';
  }if(license == 'ISC'){
    license = 'isc';
  }if(license == 'GNU LGPLv3'){
  license = 'lgpl';
  }if(license == 'Apache License 2.0'){
    license = 'Apache';
  }if(license == 'Boost Software License 1.0'){
    license = 'boost';
  }if(license == 'GNU AGPLv3'){
    license = 'agpl';
  }if(license == 'GNU GPLv3'){
    license = 'gpl';
  }if(license == 'Artistic license 2.0'){
    license = 'AL2';
  }if(license == 'The Unlicense'){
    license = 'unlicense';
  }if(license == undefined){
    return ' ';
  }
    const licenseLink = { 
      mit: '[MIT](https://choosealicense.com/licenses/mit/)',
      isc: '[ISC](https://choosealicense.com/licenses/isc/)',
      lgpl: '[GNUGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)',
      boost: '[Boost](https://www.boost.org/users/license.html)',
      Apache: '[Apache](https://www.apache.org/licenses/LICENSE-2.0)',
      agpl: '[AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html)',
      gpl: '[GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)',
      AL2: '[AL2](https://opensource.org/licenses/Artistic-2.0)',
      unlicense: '[Unlicense](https://choosealicense.com/licenses/unlicense/)',
  }
  return licenseLink[license];
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('render license section');
if(license){
  return `This project is licensed under the ${renderLicenseLink(license)} license.`
}else{
  return ' ';
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
  ${data.credits}
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
