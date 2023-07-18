const Square = require('../lib/square.js');

describe('Square', () => {
    test('Square - should return the correct SVG markup', () => {
        const shape = new Square('Square', 'green', 'SVG');
        const expectedSVG = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="30" fill="orange">SVG</text>
  <rect width="300" height="200" fill="green" />
</svg>`;
        expect(square.render()).toEqual(expectedSVG);
    });
});