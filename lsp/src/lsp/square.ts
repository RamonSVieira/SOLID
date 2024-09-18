import { IShape } from "./IShape";
import { Rectangle } from "./rectangle";

class Square implements IShape {
    private rectangle: Rectangle;
  
    constructor(sideLength: number = 0) {
      this.rectangle = new Rectangle(sideLength, sideLength);
    }
  
    setSideLength(sideLength: number): void {
      this.rectangle.setWidth(sideLength);
      this.rectangle.setHeight(sideLength);
    }
  
    getSideLength(): number {
      return this.rectangle.calculateArea() ** 0.5;
    }
  
    calculateArea(): number {
      return this.rectangle.calculateArea();
    }
}