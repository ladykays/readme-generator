// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Technologies](#technologies)
  * [Installation](#installation)
  * [Usage](#usage)
  * [license](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [Tests](#tests)
  
  ## Technologies Used
  ${data.technologies}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## license
  This project is licensed under the ${data.license}.
  [Read license](${licenseLink(data.license)})

  ## Contributing
  ${data.contributing}

  ## Questions
  ${data.questions}
  * Checkout my [github](https://github.com/${data.github})
  * Send me an [email](mailto:${data.email}).

  ## Tests
  ${data.tests}
`;
}

// function to get badge using the users chosen license
const licenseBadge = licenseChoice => {
  licenseChoice === "None" ? "None" 
  : licenseChoice === "Apache License v2.0" ? "https://img.shields.io/badge/License-Apache_2.0-blue.svg" 
  : licenseChoice === "GNU General Public License v3.0" ? "https://img.shields.io/badge/License-GPLv3-blue.svg" 
  : "https://img.shields.io/badge/License-MIT-yellow.svg";
}
  


// function to get link using the users chosen license
const licenseLink = licenseChoice => {
  licenseChoice === "None" ? "None" 
  : licenseChoice === "Apache License v2.0" ? "https://opensource.org/licenses/Apache-2.0" 
  : licenseChoice === "GNU General Public License v3.0" ? "https://www.gnu.org/licenses/gpl-3.0" 
  : "https://opensource.org/licenses/MIT";
}


module.exports = generateMarkdown;
