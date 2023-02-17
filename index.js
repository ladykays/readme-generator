const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const emailCheck = require("node-email-check");


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
    type: "input",
    message: "Please provide a table of contents",
    name: "tableOfContents",
  },
  {
    type: "checkbox",
    message: "What technologies did you use to build the project?",   
    name: "technologies",
    choices: ["HTML", "CSS", "JavaScript", "Java", "jQuery", "Bootstrap", "Node", "React", "PHP", "C", "Other"],
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
    message: "Please select a licence",
    name: "licence",
    choices: ["Apache License v2.0", "GNU General Public License v3.0", "MIT License", "None"]
  },
  /* {
    type: "checkbox",
    message: "Please select a color for your licence badge",
    name: "badgeColor",
    choices: ["brightgreen", "green", "yellow", "orange", "red", "blue", "lightgray", "blueviolet"]
  }, */
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