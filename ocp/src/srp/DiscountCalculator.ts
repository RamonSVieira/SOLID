import { IDiscount } from "./IDiscount";

class DiscountCalculator implements IDiscount{
    private discount: IDiscount;

    constructor(discount: IDiscount){
        this.discount = discount;
    }

    calculate(order: Order): number {
        return order.calculateTotal()
    }
}