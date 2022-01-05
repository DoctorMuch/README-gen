// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => {
  switch (license) {
    case 'ISC':
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'GPLv3':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'other':
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      return '';
  }
}

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  const renderLicenseLink = license => {
    if (!license) {
      return '';
    }

  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  const renderLicenseSection = license => {
    if (!license) {
      return '';
    }

  }

  // TODO: Create a function to generate markdown for README
  const generateMarkdown = markdownData => {
    console.log(markdownData);
    const { dev, email, github, title, repo, license, projects } = markdownData;

    return `
  ${renderLicenseBadge(license)}
  # ${title}

  
  ### Description
  ${projects[0].description}

  ---
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Questions](#questions)

  ---
  ### Installation
  ${projects[0].install}

  ---
  ### Usage

  ---
  ### License

  ---
  ### Contributors
  * ${dev}

  ---
  ### Questions
  > GitHub: https://github.com/${github}/${repo}
  > Email: ${email}

  ---
  

  
  `;

  };

  module.exports = generateMarkdown;
