// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => {
  switch (license) {
    case 'ISC':
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
      break;
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case 'GPLv3':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case 'Apache':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case 'BSD':
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      break;
    case 'other':
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      break;
    case 'none':
      return '';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  switch (license) {
    case 'ISC':
      return "(https://opensource.org/licenses/ISC)";
      break;
    case 'MIT':
      return "(https://opensource.org/licenses/MIT)";
      break;
    case 'GPLv3':
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case 'Apache':
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'BSD':
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case 'other':
      return "(http://unlicense.org/)";
      break;
    case 'none':
      return '';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return '';
  } else {
    return `
  ---
  ### License
  ${license}
    `
  }

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = markdownData => {
  console.log(markdownData);
  const { dev, email, github, title, repo, license, projects } = markdownData;

  return `
  [${renderLicenseBadge(license)}]${renderLicenseLink(license)}
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
  ${projects[0].usage}

  ${renderLicenseSection(license)}
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
