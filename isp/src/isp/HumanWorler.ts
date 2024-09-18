import { IEatable } from "./IEatable";
import { IWorkable } from "./IWorkable";

class HumanWorker implements IWorkable, IEatable {
    work(): void {
      console.log("Working hard!");
    }
  
    eat(): void {
      console.log("Eating lunch!");
    }
}