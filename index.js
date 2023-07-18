const fs = require('fs');
const inquirer = require('inquirer');

function generateLogo(colour, shape, text) {
  const svg = new SVGLogo({
    viewBox: '0 0 200 100',
  });

  switch (shape) {
    case 'circle':
      svg.circle(50, 50, 40, { fill: colour });
      break;
    case 'triangle':
      svg.rect(20, 20, 50, { fill: colour });
      break;
    case 'square':
      svg.rect(20, 20, 20, 20, { fill: colour });
      break;
    default:
      console.error('Invalid shape');
      process.exit(1);
  }

  svg.text(100, 55, text, {
    fill: 'white',
    'font-family': 'Times',
    'font-size': '20',
    'text-anchor': 'middle',
    'dominant-baseline': 'middle',
  });

  return svg.toString();
}

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'colour',
        message: 'Select a colour:',
        choices: ['red', 'green', 'blue', 'yellow'],
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo:',
      },
    ])
    .then((data) => {
      const { colour, shape, text } = data;
      const svgLogo = generateLogo(colour, shape, text);

      fs.writeFile('logo.svg', svgLogo, (err) => {
        if (err) {
          console.error('Error saving the SVG file:', err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    })
    .catch((err) => {
      console.error('Error:', err);
    });
