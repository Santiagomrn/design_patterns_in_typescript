import { FlyNoWay } from "../../FlyBehaviors/classes/FlyNoWay";
import { Quack } from "../../QuackBehavior/classes/Quack";
import { Duck } from "./Duck";

export class ModelDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }
    public display(): void {
        console.log("I'm a model duck");
    }
}
