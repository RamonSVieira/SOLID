import { IWorkable } from "./IWorkable";

class RobotWorker implements IWorkable {
    work(): void {
      console.log("Working non-stop!");
    }
}