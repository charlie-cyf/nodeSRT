let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height*this.width;
    }
};
console.log(Rectangle.name);
  // output: "Rectangle2"

let rectangleTmp = new Rectangle(80, 60);
console.log(rectangleTmp.height)

module.exports = Rectangle2;