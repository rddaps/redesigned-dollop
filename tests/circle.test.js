const Circle = require('../lib/circle.js');

describe('Circle', () => {
    test('Circle - should return the correct SVG markup', () => {
        const shape = new Circle('Circle', 'blue', 'World');
        const expectedSVG = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="30" fill="blue">World</text>
        <circle cx="50" cy="50" r="50" fill="blue" />
      </svg>`;
        expect(circle.render()).toEqual(expectedSVG);
    });
});