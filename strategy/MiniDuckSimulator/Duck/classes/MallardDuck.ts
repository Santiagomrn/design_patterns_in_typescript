import { FlyWithWings } from "../../FlyBehaviors/classes/FlyWithWings";
import IFlyBehavior from "../../FlyBehaviors/interfaces/IFlyBehavior";
import { Quack } from "../../QuackBehavior/classes/Quack";
import IQuackBehavior from "../../QuackBehavior/interfaces/IQuackBehavior";
import { Duck } from "./Duck";

export class MallardDuck extends Duck {
    flyBehavior: IFlyBehavior = new FlyWithWings();
    quackBehavior: IQuackBehavior = new Quack();

    public display() {
        console.log("I'm a real Mallard duck");
    }
}
