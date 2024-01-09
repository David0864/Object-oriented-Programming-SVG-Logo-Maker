const {Square, Circle, Triangle} = require("./shapes.js");

describe("Square", () => {
    test("test for blue square", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="blue" />');
    });
  });

  describe("Circle", () => {
    test("Test for red circle", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });

  describe("Triangle", () => {
    test("test for green triangle", () => {
      const shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green" />');
    });
  });