import IFlyBehavior from "../interfaces/IFlyBehavior";

export class FlyRocketPowered implements IFlyBehavior {
    public fly(): void {
        console.log("I'm flying with a rocket");
    }
}
