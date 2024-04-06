import IFlyBehavior from "../interfaces/IFlyBehavior";

export class FlyNoWay implements IFlyBehavior {
    public fly(): void {
        console.log("I can't fly");
    }
}
