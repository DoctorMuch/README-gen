// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// const markdownTemplate = generatePage(markdownData);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'dev',
    message: 'What is your name, friend?',
    validate: devInput => {
      if (devInput) {
        return true;
      } else {
        console.log('Please let me know who you are so we can get started');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
      if (!emailInput) {
        console.log('Email address is required.');
        return false;
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub profile?',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub profile.');
        return false;
      }
    } 
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: projectNameInput => {
      if (projectNameInput){
        return true;
      } else {
        console.log('You must include a project name to continue.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'repo',
    message: 'What is the GitHub repository of your project?',
    validate: repoNameInput => {
      if(repoNameInput) {
        return true;
      } else {
        console.log('Please include the name of your GitHub repository.');
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the software license for your application?',
    choices: ['ISC', 'MIT', 'GPLv3', 'other']
  },
  {
    type: 'input',
    name: 'otherLicense',
    message: 'If you chose "other", please enter the license you used',
    when: answers => (answers.license === 'other') 
  }
];

const project = [
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your application: '
  },
  {
    type: 'input',
    name: 'install',
    message: 'Are there any special instructions for user installation?'
  }
];

const projectPrompt = projectInfo => {
  if (!projectInfo.project) {
    projectInfo.projects = [];
  }
  console.log(`
  ===================
  Project Information
  ===================
  `);
  return inquirer.prompt(project)
  .then(projectInfoData => {
    console.log(projectInfo);
    projectInfo.projects.push(projectInfoData);
    return projectInfo;
  })

}

// TODO: Create a function to write README file
const writeToFile = (filename, data) => {
  fs.writeFile(filename, data, err => {
    if(err) {
      throw err;
    } else {
      console.log('Check out your new README file in the directory.');
    }    
  })
}

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then(projectPrompt)
  .then(readMeData => {
    return generateMarkdown(readMeData);
  })
  .then(pageMarkdown => {
    writeToFile('./README.md', pageMarkdown);
  })
  // .then(pageMarkdown => {
  //   return writeToFile(pageMarkdown);
  // })
  // .then(console.log(generatePage(answers)));
};

// Function call to initialize app
init();
