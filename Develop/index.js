// TODO: Include packages needed for this application
//const { title } = require('process');
const fs = require('fs/promises'); 
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What did you title your project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
      type: 'input',
      message: 'Please describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you get your project installed? Please provide a detailed step-by-step description.',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Why should your project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Did you have any collaborators? \nIf yes, please include a link to their GitHub profile.',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'Please select a license from the list below:',
        choices: ['MIT', new inquirer.Separator(), "GNU"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'tests',
    },
];
//license badge variables


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


inquirer
  .prompt(questions)
  .then((response) =>
  fs.writeFile("README.md", `
## ${response.title}
        \n--------------------------------
${response.license}
## Table of Contents
        \n--------------------------------
        [Description](##description)
        [Installation](##installation
        [Usage](##usage)
        [License](##license)
        \n--------------------------------

## Description
        \n--------------------------------
        ${response.description}
        \n--------------------------------

## Installation
        \n--------------------------------
${response.installation}
        \n--------------------------------

## Usage
        \n--------------------------------
${response.usage}
        \n--------------------------------

## License
        \n--------------------------------
        \n--------------------------------

## Credits
        \n--------------------------------

        \n--------------------------------

## Tests
        \n--------------------------------

        \n--------------------------------

## Contact Info
        \n--------------------------------
GitHub: www.github.com/${response.github}
Email: ${response.email}
        \n--------------------------------

`
));


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

