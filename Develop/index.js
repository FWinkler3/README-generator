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
      message: 'In no more than 2 sentences, please summarize your project.',
      name: 'summary',
    },
    {
        type: 'input',
        message: 'Please describe your project in detail.',
        name: 'detail',
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
        choices: ['MIT', "Apache-2.0", "GPL-3.0"],
        name: 'license',
    },

];
//license badge variables

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
 
inquirer 
  .prompt(questions)
  .then((response) =>
  fs.writeFile("README.md", `
## ${response.title}\n

${response.license}
### Table of Contents\n
[Description](#Description)\n
[Installation](#Installation)\n
[Usage](#Usage)\n
[License](#License)\n

### Description\n
#### Summary\n
${response.summary}

#### In Depth\n
${response.detail}

### Installation\n
${response.installation}

### Usage\n
${response.usage}

### License\n
This project's license is : ${response.license}

### Credits\n
${response.contributing}
### Tests\n

### Contact Info\n
GitHub: www.github.com/${response.github}
Email: ${response.email}
`
)
.then(console.log("Your README.md file is ready!"))
);


// TODO: Create a function to initialize app
function init() { 
        
}

// Function call to initialize app
init();

