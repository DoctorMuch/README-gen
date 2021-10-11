// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }
  return "![Shield](https://img.shields.io/license/MIT/green)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const  renderLicenseLink = license => {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = markdownData => {
  console.log(markdownData);
  const { dev, github, title, repo, license } = markdownData;
  
  return `
    ${renderLicenseBadge(license)}
    # ${title}
    ## https://github.com/${github}/${repo}

    ## Contributors
      ${dev}
  `;

};

module.exports = generateMarkdown;
