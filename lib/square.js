const Shapes = require('/shapes.js');

class Square extends Shapes {
  render() {
    return `
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="30" fill="${this.colour}">${this.text}</text>
  <rect width="100" height="100" fill="${this.colour}" />
</svg>`;
  }
}

module.exports = Square;