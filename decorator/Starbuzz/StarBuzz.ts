import { Beverage } from "./classes/Beverage";
import { DarkRoast } from "./classes/DarkRoast";
import { Espresso } from "./classes/Espresso";
import { HouseBlend } from "./classes/HouseBlend";
import { Mocha } from "./classes/Mocha";
import { Soy } from "./classes/Soy";
import { Whip } from "./classes/Whip";

class StarbuzzCoffe {
    public main() {
        const beverage: Beverage = new Espresso();
        console.log(beverage.getDescription() + " $" + beverage.cost());

        let beverage2: Beverage = new DarkRoast();
        beverage2 = new Mocha(beverage2);
        beverage2 = new Mocha(beverage2);
        beverage2 = new Whip(beverage2);
        console.log(beverage2.getDescription() + " $" + beverage2.cost());

        let beverage3: Beverage = new HouseBlend();
        beverage3 = new Soy(beverage3);
        beverage3 = new Mocha(beverage3);
        beverage3 = new Whip(beverage3);
        console.log(beverage3.getDescription() + " $" + beverage3.cost());
    }
}
new StarbuzzCoffe().main();
