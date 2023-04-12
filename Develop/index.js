// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
// const questions = [
// ];
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
      name: "Liscense",
      message: "What liscense are you using?",
      choices: [
        "None",
        "MIT",
        "Mozilla Public License 2.0",
        "GNU Affero General Public License v3.0",
      ],
    },
    {
      type: "list",
      name: "LiscBadge",
      message: "What Badge Design will you use ",
      choices: [
        "Green",
        "Blue",
        "Red",
        "Purple",
      ],
    },
];

const templateReadMe = 
`
# ${Projname}

## ${Projname} Description

${ProjFunc}

##  ${Projname} Installation requirements
\`\`\`bash
${ProjInstall}
\`\`\`

## ${Projname} Usage

${projExample}

## ${Projname} Contributors

${ProjContributors}

## Liscense
[${LiscBadge}](liscense)
`;


// the question that will read the questions will loop through the question array, if a "is there more" question is answered
// in a way that means it needs another input (for a list item) make the argv value go up, and the index go down.
// Loop by question array length so if we repeat a question the index will go down, but have a count that goes up for each time the loop is called for a higher argv value each time.
// TODO: Create a function to write README file

fs.writeFile("README.md", templateReadMe, (err) => {
  if (err) {
    console.error(err);
  }
});

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) =>   {
    const {ProjName, ProjFunc, ProjInstall, ProjExample, ProjContributors, Liscense, LiscBadge} = answers
    const filledTemplate = ({ProjName, ProjFunc, ProjInstall, ProjExample, ProjContributors, Liscense, LiscBadge}) => {templateReadMe}
    

  })
}

// Function call to initialize app
init();
