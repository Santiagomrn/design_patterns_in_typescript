import IQuackBehavior from "../interfaces/IQuackBehavior";

export class Quack implements IQuackBehavior {
    public quack(): void {
        console.log("Quack");
    }
}
