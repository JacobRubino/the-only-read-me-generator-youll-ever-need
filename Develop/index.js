
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
      type: "input",
      name: "ProjName",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "ProjFunc",
      message: "What does your project do?",
    },
    {
      type: "input",
      name: "ProjInstall",
      message: "what is required for installation?",
    },
    {
      type: "input",
      name: "ProjExample",
      message: "give an example on how to use your project.",
    },
    {
      type: "input",
      name: "ProjContributors",
      message: "are there any major contributors you would like to reference?",
    },
    {
      type: "list",
      name: "license",
      message: "What license are you using?",
      choices: [
        "None",
        "MIT",
        "Mozilla-Public-License-2.0",
        "GNU-Affero-General-Public-License-v3.0",
      ],
    },
    {
      type: "list",
      name: "licBadge",
      message: "What Badge Design will you use ",
      choices: [
        "Green",
        "Blue",
        "Red",
        "Purple",
      ],
    },
];

function init() {
  inquirer.prompt(questions)
  .then((answers) =>   {
    const {ProjName, ProjFunc, ProjInstall, ProjExample, ProjContributors, license, licBadge} = answers
    const templateReadMe = 
    `# ${ProjName}
    
    ## ${ProjName} Description
    
    ${ProjFunc}
    
    ##  ${ProjName} Installation requirements
    \`\`\`bash
    ${ProjInstall}
    \`\`\`
    
    ## ${ProjName} Usage
    
    ${ProjExample}
    
    ## ${ProjName} Contributors
    
    ${ProjContributors}
    
    ## license
    [![License: ${license}](https://img.shields.io/badge/License-${license}-${licBadge}.svg)](https://opensource.org/licenses/${license})
    `;
    fs.writeFile('README.MD', templateReadMe, function (err) {
      if (err) throw err;
      console.log('IT WORKED')
    })
  })
}

// Function call to initialize app
init();
