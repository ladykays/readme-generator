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
  
 
  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Screenshot
  ${data.screenshot}

  ## Demo
  ${data.demo}

  ## License
  This project is licensed under the [${data.license}](${licenseLink(data.license)}).

  ## Contributing
  ${data.contributing}

  ## Questions
  ${data.questions}
  * Checkout my [github](https://github.com/${data.github})
  * Send me an [email](mailto:${data.email}).

  ## Tests
  ${data.tests}

  ## Technologies Used
  ${data.technologies.map(tech => `* ${tech}`).join(`  \n`)} 
`;
}

// function to get badge using the users chosen license
const licenseBadge = licenseChoice => {
  return licenseChoice == "Apache License v2.0" ? `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)` 
  : licenseChoice == "Boost Software Licence 1.0" ? `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  : licenseChoice == "BSD 3-Clause License" ? `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  : licenseChoice == "BSD 2-Clause License" ? `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
  : licenseChoice == "Eclipse Public License 1.0" ? `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
  : licenseChoice == "GNU GPL General Public License v3.0" ? `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)` 
  : licenseChoice == "GNU GPL General Public License v2.0" ? `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`
  : licenseChoice == "IBM Public License Version 1.0" ? `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
  : licenseChoice == "ISC License" ? `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  : licenseChoice == "MIT License" ? `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  : licenseChoice == "Mozilla Public License 2.0" ? `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  : licenseChoice == "The Unlicence" ? `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
  : `None`;
}
  

// function to get link using the users chosen license
const licenseLink = licenseChoice => {
  return licenseChoice == "None" ? "None" 
  : licenseChoice == "Apache License v2.0" ? "https://opensource.org/licenses/Apache-2.0" 
  : licenseChoice == "Boost Software Licence 1.0" ? "https://www.boost.org/LICENSE_1_0.txt"
  : licenseChoice == "BSD 3-Clause License" ? "https://opensource.org/licenses/BSD-3-Clause"
  : licenseChoice == "BSD 2-Clause License" ? "https://opensource.org/licenses/BSD-2-Clause"
  : licenseChoice == "Eclipse Public License 1.0" ? "https://opensource.org/licenses/EPL-1.0"
  : licenseChoice == "GNU GPL General Public License v3.0" ? "https://www.gnu.org/licenses/gpl-3.0" 
  : licenseChoice == "GNU GPL General Public License v2.0" ? "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" 
  : licenseChoice == "IBM Public License Version 1.0" ? "https://opensource.org/licenses/IPL-1.0"
  : licenseChoice == "ISC License" ? "https://opensource.org/licenses/ISC"
  : licenseChoice == "MIT License" ? "https://opensource.org/licenses/MIT"
  : licenseChoice == "Mozilla Public License 2.0" ? "https://opensource.org/licenses/MPL-2.0"
  : licenseChoice == "The Unlicence" ? "http://unlicense.org/"
  : `None`;
}


module.exports = generateMarkdown;
