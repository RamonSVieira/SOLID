import { IDiscount } from "./IDiscount";

class RegularDiscount implements IDiscount{
    calculate(order: Order): number {
        return order.calculateTotal() * 0.05;
    }
}