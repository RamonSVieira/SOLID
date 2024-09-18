import { IDatabase } from "./IDataBase";

class MySQLDatabase implements IDatabase {
    connect(): void {
        console.log("Connected to MySQL database");
    }
}