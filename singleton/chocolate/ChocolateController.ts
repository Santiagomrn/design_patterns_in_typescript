import { ChocolateBoiler } from "./ChocolateBoiler";

export class ChocolateController {
    public static main(): void {
        const boiler: ChocolateBoiler = ChocolateBoiler.getInstance();
        boiler.fill();
        boiler.boil();
        boiler.drain();

        // will return the existing instance
        const boiler2: ChocolateBoiler = ChocolateBoiler.getInstance();
        console.log(boiler2 == boiler);
    }
}
ChocolateController.main();
