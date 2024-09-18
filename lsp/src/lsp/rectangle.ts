import { IShape } from "./IShape";

export class Rectangle implements IShape {
    protected width: number;
    protected height: number;
  
    constructor(width: number = 0, height: number = 0) {
      this.width = width;
      this.height = height;
    }
  
    setWidth(width: number): void {
      this.width = width;
    }
  
    setHeight(height: number): void {
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }