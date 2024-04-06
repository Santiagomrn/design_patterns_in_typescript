import { NYPizzaIngredientFactory } from "../ingredients/ingredientFactories/NYPizzaIngredientFactory";
import { IPizzaIngredientFactory } from "../ingredients/PizzaIngredientFactory";
import { CheesePizza } from "../Pizzas/CheesePizza";
import { ClamPizza } from "../Pizzas/ClamPizza";
import { PepperoniPizza } from "../Pizzas/PepperoniPizza";
import { Pizza } from "../Pizzas/Pizza";
import { VeggiePizza } from "../Pizzas/VeggiePizza";
import { PizzaStore } from "./PizzaStore";

export class NYPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    let pizza: Pizza;
    let ingredientFactory: IPizzaIngredientFactory =
      new NYPizzaIngredientFactory();

    if (item === "cheese") {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("New York Style Cheese Pizza");
    } else if (item === "veggie") {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName("New York Style Veggie Pizza");
    } else if (item === "clam") {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName("New York Style Clam Pizza");
    } else if (item === "pepperoni") {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName("New York Style Pepperoni Pizza");
    }
    return pizza;
  }
}
