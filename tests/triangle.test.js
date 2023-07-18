const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    test('Triangle - should return the correct SVG markup', () => {
        const shape = new Triangle('Triangle', 'red', 'Hello');
        const expectedSVG = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="30" fill="purple">Hello</text>
    <polygon points="50,0 100,100 0,100" fill="red" />
  </svg>`;
        expect(triangle.render()).toEqual(expectedSVG);
    });
});