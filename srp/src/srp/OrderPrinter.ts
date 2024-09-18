class OrderPrinter {
    public printOrder(order: Order): void {
        console.log(`Order ID: ${order.getOrderId()}`);
        for (let item of order.getItems()) {
            console.log(`Item: ${item.getName()}, Price: ${item.getPrice()}`);
        }
    }
}