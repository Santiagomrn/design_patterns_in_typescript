import { Pizza } from "./Pizzas/Pizza";
import { ChicagoPizzaStore } from "./PizzaStores/ChicagoPizzaStore";
import { NYPizzaStore } from "./PizzaStores/NYPizzaStore";
import { PizzaStore } from "./PizzaStores/PizzaStore";

class PizzaApp {
  public main() {
    let nyStore: PizzaStore = new NYPizzaStore();
    let chicagoStore: PizzaStore = new ChicagoPizzaStore();

    let pizza: Pizza = nyStore.orderPizza("cheese");
    console.log("Ethan ordered a " + pizza.getName() + "\n");

    pizza = chicagoStore.orderPizza("cheese");
    console.log("Joel ordered a " + pizza.getName() + "\n");

    pizza = nyStore.orderPizza("clam");
    console.log("Ethan ordered a " + pizza.getName() + "\n");

    pizza = chicagoStore.orderPizza("clam");
    console.log("Joel ordered a " + pizza.getName() + "\n");

    pizza = nyStore.orderPizza("pepperoni");
    console.log("Ethan ordered a " + pizza.getName() + "\n");

    pizza = chicagoStore.orderPizza("pepperoni");
    console.log("Joel ordered a " + pizza.getName() + "\n");

    pizza = nyStore.orderPizza("veggie");
    console.log("Ethan ordered a " + pizza.getName() + "\n");

    pizza = chicagoStore.orderPizza("veggie");
    console.log("Joel ordered a " + pizza.getName() + "\n");
  }
}
new PizzaApp().main();
