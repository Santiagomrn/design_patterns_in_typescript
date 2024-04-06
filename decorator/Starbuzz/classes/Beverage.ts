export abstract class Beverage {
    protected description: string = "Unknown Beverage";

    public getDescription() {
        return this.description;
    }

    public abstract cost(): number;
}
