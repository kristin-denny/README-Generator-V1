// TODO: Include packages needed for this application
import generateMarkdown from "./utils/generateMarkdown.js";
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is your application's name?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please describe your application:"
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "How do you install this application?"
    },
    {
        type: "input",
        name: "usageInformation",
        message: "How should this be used?"
    },
    {
        type: "input",
        name: "contributionGuidlines",
        message: "How can people contribute?"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "How should people test this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license is this project under?",
        choices: ["MIT", "Apache", "Mozilla Public Licesnse 2.0", "BSD 3-Clause-Clear"]
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "year",
        message: "What year did you make your project?"
    },
    {
        type: "input",
        name: "githubLink",
        message: "What is your GitHub URL?"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileExt = '.md';
    let wholeName = fileName + fileExt;
    fs.writeFile(wholeName, data, (err)=> {
        if(err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
  
      let fileData = generateMarkdown(answers);
      writeToFile(answers.projectName,fileData);
    });

}

// Function call to initialize app
init();
