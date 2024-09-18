import { IDiscount } from "./IDiscount";

class VipDiscount implements IDiscount{
    calculate(order: Order): number {
        return order.calculateTotal() * 0.
    }
}