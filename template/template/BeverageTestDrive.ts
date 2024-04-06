import { Coffee } from "./Coffee";
import { CoffeeWithHook } from "./CoffeeWithHook";
import { Tea } from "./Tea";
import { TeaWithHook } from "./TeaWithHook";

export class BeverageTestDrive {
  public static main() {
    const tea: Tea = new Tea();
    const coffee: Coffee = new Coffee();

    console.log("\nMaking tea...");
    tea.prepareRecipe();

    console.log("\nMaking coffee...");
    coffee.prepareRecipe();

    const teaHook: TeaWithHook = new TeaWithHook();
    const coffeeHook: CoffeeWithHook = new CoffeeWithHook();

    console.log("\nMaking tea...");
    teaHook.prepareRecipe();

    console.log("\nMaking coffee...");
    coffeeHook.prepareRecipe();
  }
}
BeverageTestDrive.main();
