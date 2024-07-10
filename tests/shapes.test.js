const { Square, Triangle, Circle } = require("../lib/shapes");

// describe("Circle", () => {
//   it("should render svg for a green circle element", () => {
//     const expectedSvg = `
// <svg version="1.1"
//   width="300" height="200"
//   xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

//   </svg>`;

//     const shape = new Circle('SVG', 'green', 'white');

//     expect(shape.render()).toEqual(expectedSvg);


//   });

// });

describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg = `
<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="black" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">sdf</text>

</svg>`;

    const shape = new Triangle('sdf', 'black', 'green');

    expect(shape.render()).toEqual(expectedSvg);


  });

});

// describe("Square", () => {
//   it("should render svg for a green polygon element", () => {
//     const expectedSvg =`
// <svg version="1.1"
//   width="300" height="200"
//   xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="black" />


//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">hello</text>

// </svg>`;

//     const shape = new Square('hello', 'black', 'green');

//     expect(shape.render()).toEqual(expectedSvg);


//   });

// });
