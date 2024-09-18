class OrderRepository {
    public saveToDatabase(order: Order): void {
        console.log(`Order ${order.getOrderId()} saved to database`);
    }
}