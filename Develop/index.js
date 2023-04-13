
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
      message: "How do you install your program?",
    },
    {
      type: "input",
      name: "ProjContributors",
      message: "are there any major contributors you would like to reference?",
    }, 
    {
      type: "text",
      name: "GHuser",
      message: "What is your github username?",
    },
    {
      type: "text",
      name: "UserEmail",
      message: "Please enter your email.",
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
        "brightgreen",
        "blue",
        "red",
        "blueviolet",
      ],
    },
];

function init() {
  inquirer.prompt(questions)
  .then((answers) =>   {
    const {ProjName, ProjFunc, ProjInstall, ProjExample, ProjContributors, license, licBadge, UserEmail, GHuser} = answers
    const templateReadMe = 
`# ${ProjName}
    
${ProjFunc}

1. [Installation requirements](#inst)
2. [Useage](#usage)
3. [Contributors](#contrib)
4. [Contact and github](#contact)
<a name="inst"></a>
## ${ProjName} Installation requirements

\`\`\`bash
${ProjInstall}
\`\`\`

<a name="usage"></a>
## ${ProjName} Usage
    
${ProjExample}
<a name="contrib"></a>
## ${ProjName} Contributors
    
${ProjContributors}

<a name="contact"></a>
## Questions
If you have any questions please reach me through my email at ${UserEmail}.
Check out my github! [github.com/${GHuser}](github.com/${GHuser})
    
## license
[![License: ${license}](https://img.shields.io/badge/License-${license.replace(/-/g, '--')}-${licBadge}.svg)](https://opensource.org/licenses/${license})
`;
    fs.writeFile('README.MD', templateReadMe, function (err) {
      if (err) throw err;
      console.log('IT WORKED')
    })
  })
}

// Function call to initialize app
init();
