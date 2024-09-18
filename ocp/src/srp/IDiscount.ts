export interface IDiscount{
    calculate(order: Order): number;
}