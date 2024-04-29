// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `* [License](#license)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` ## License
  Licensed under ${license}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[Testing](#testing)

  *[Contribution](#contribution)

  ${renderLicenseLink(data.license)}

  *[Questions](#questions)

  ## Installation

  Command line input for installation:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Testing

  Command line input for testing:

  ${data.testing}

  ## Contribution

  ${data.contribution}

  ## Questions

  If you have questions:

  Please contact me via email at [${data.email}](${data.email})

  To see other projects of mine:

  Find me on Github at [${data.github}](https://github.com/${data.github}/)

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
