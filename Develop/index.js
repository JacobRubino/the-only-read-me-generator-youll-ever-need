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
    message: "What is required for installation?",
  },
  {
    type: "input",
    name: "ProjExample",
    message: "How do you use your program?",
  },
  {
    type: "input",
    name: "ProjContributors",
    message: "Are there any major contributors you would like to reference?",
  },
  {
    type: "input",
    name: "ProjTest",
    message: "Please provide instructions for running tests:",
  },
  {
    type: "text",
    name: "GHuser",
    message: "What is your GitHub username?",
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
    message: "What badge design will you use?",
    choices: [
      "brightgreen",
      "blue",
      "red",
      "blueviolet",
    ],
  },
];

function generateReadme(answers) {
  const { ProjName, ProjFunc, ProjInstall, ProjExample, ProjContributors, license, licBadge, UserEmail, GHuser, ProjTest} = answers;
  const templateReadMe = `
# ${ProjName}

${ProjFunc}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

<a name="description"></a>
## Description
${ProjFunc}

<a name="installation"></a>
## Installation
${ProjInstall}

<a name="usage"></a>
## Usage
${ProjExample}

<a name="license"></a>
## License
This application is covered under the ${license} license.

[![License: ${license}](https://img.shields.io/badge/License-${license.replace(/-/g, '--')}-${licBadge}.svg)](https://opensource.org/licenses/${license})

<a name="contributing"></a>
## Contributing
${ProjContributors}

<a name="tests"></a>
## Tests
${ProjTest}

<a name="questions"></a>
## Questions
If you have any questions, please feel free to reach out to me via email or through my GitHub profile.

Email: ${UserEmail}
GitHub: [github.com/${GHuser}](https://github.com/${GHuser})
`;

  fs.writeFile('README.md', templateReadMe, function (err) {
    if (err) throw err;
    console.log('README.md file has been generated successfully.');
  });
}

function init() {
  inquirer.prompt(questions)
    .then(generateReadme)
    .catch((err) => {
      console.error(err);
    });
};
init();