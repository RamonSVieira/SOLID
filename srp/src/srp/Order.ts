class Order {
    private orderId: number;
    private items: Item[];

    constructor(orderId: number, items: Item[]) {
        this.orderId = orderId;
        this.items = items;
    }

    public calculateTotal(): number {
        let total = 0;
        for (let item of this.items) {
            total += item.getPrice();
        }
        return total;
    }

    public getOrderId(): number {
        return this.orderId;
    }

    public getItems(): Item[] {
        return this.items;
    }
}