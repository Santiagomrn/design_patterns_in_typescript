import IQuackBehavior from "../interfaces/IQuackBehavior";

export class Squeak implements IQuackBehavior {
    public quack(): void {
        console.log("squeak");
    }
}
