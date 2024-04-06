import IFlyBehavior from "../../FlyBehaviors/interfaces/IFlyBehavior";
import IQuackBehavior from "../../QuackBehavior/interfaces/IQuackBehavior";

export abstract class Duck {
    flyBehavior: IFlyBehavior;
    quackBehavior: IQuackBehavior;
    constructor() {}

    public abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }
    public performQuack(): void {
        this.quackBehavior.quack();
    }
    public swim(): void {
        console.log("all ducks float, even decoys!");
    }
    public setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }
    public setQuackBehavior(qb: IQuackBehavior): void {
        this.quackBehavior = qb;
    }
}
