import { IDatabase } from "./IDataBase";

class OrderRepository {
    private db: IDatabase;

    constructor(db: IDatabase) {
        this.db = db;
    }

    save(order: Order): void {
        this.db.connect();
        console.log(`Order ${order.getId()} saved to database`);
    }
}