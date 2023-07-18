class Shapes {
  constructor(colour, shape, text) {
    this.colour = colour;
    this.shape = shape;
    this.text = text;
  }

  render() {
    throw new Error('Child class must implement a render() method.');
  }

  saveToFile(filename) {
    fs.writeFile(filename, this.render(), (err) => {
      const filename = 'logo.svg';
      if (err) {
        console.error('Error generating SVG:', err);
      } else {
        console.log(`Generated ${filename}.`);
      }
    });
  }
}

module.exports = Shapes;
