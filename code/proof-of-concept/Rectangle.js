let Rectangle = class {

    constructor(height, width) {
        console.log("got to constructor")
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
Rectangle = class Rectangle2 {

    constructor(height, width) {
        console.log("got to constructor 2")
        this.height = height;
        this.width = width;
    }

    getArea() {
        this.tell = 100
        return this.height*this.width;
    }

    changeTell() {
        this.tell = 120
    }

    getTell() {
        return this.tell;
    }
};
console.log(Rectangle.name);
  // output: "Rectangle2"

let rectangleTmp = new Rectangle(80, 60);
console.log(rectangleTmp.height)
console.log(rectangleTmp.getArea())

console.log(rectangleTmp.getTell());

rectangleTmp.changeTell()

console.log(rectangleTmp.getTell());

module.exports = Rectangle;