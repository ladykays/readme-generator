const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a short description of the project",   
    name: "description",
  },
  {
    type: "checkbox",
    message: "What technologies did you use to build the project?",   
    name: "technologies",
    choices: ["HTML", "CSS", "JavaScript", "Java", "jQuery", "Bootstrap", "Node.js", "NPM", "React", "PHP", "C", "Other"],
  },
  {
    type: "input",
    message: "Please provide information on how to install the the application",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide instructions on how to use the application",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "Please select a license",
    name: "license",
    choices: ["Apache License v2.0", "Boost Software Licence 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "Eclipse Public License 1.0", "GNU GPL General Public License v3.0","GNU GPL General Public License v2.0", "IBM Public License Version 1.0", "ISC License", "MIT License", "Mozilla Public License 2.0", "The Unlicence"]
  },
  {
    type: "input",
    message: "Please provide a link to your screenshot",
    name: "screenshot",
  }, 
  {
    type: "input",
    message: "Please provide a link to your .gif file",
    name: "demo",
  },
  {
    type: "input",
    message: "What are your contributions guidelines for this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How can a user ask questions about this application?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your gitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Please provide instructions on how to test this application",   
    name: "tests",
  },

];

//console.log(questions); 

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data,  (err) =>
    err ? console.error(err) : console.log("File saved to README.md")
  );
}


// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    // Convert the response object to a string
    //const responseString = JSON.stringify(response);
    writeToFile("README.md", generateMarkdown(response) + "\n", (err) => {
      console.error("err");
    });

    
  });
}

// function call to initialize program
init();