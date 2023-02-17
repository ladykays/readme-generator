// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Technologies](#technologies)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [Tests](#tests)
  
  ## Technologies Used
  ${data.technologies}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licence
  Copyright (c)[${data.github}](https://github.com/${data.git}). All rights reserved. Licenced under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Questions
  ${data.questions}
  * Checkout my [github](https://github.com/${data.github})
  * Send me an email at [email](mailto:${data.email}).

  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
