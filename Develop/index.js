// TODO: Include packages needed for this application
const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;


const generatePage = (name, github) => {
  return `
    # ${name}
    ## ${github}
  `;
};

fs.writeFile('./readme.md', generatePage(name, github), err => {
  if(err) throw err;

  console.log('Congrats! You just created a readme.md page!');
})
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
