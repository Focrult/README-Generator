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
  const markdown = 
  `# ${data.title}
  # Description
  ${data.description}
  # Installation
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
  # Contact
  GitHub: ${data.github}
  Email: ${data.email}
  `//END

  //title
  //description
  //installation information
  //usage
  //guidelines
  //test instructions
  //github user information
  //licence

}
//data will be our file that will be generated
module.exports = generateMarkdown;
