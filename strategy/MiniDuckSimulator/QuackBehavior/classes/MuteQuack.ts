import IQuackBehavior from "../interfaces/IQuackBehavior";

export class MuteQuack implements IQuackBehavior {
    public quack(): void {
        console.log("silence");
    }
}
