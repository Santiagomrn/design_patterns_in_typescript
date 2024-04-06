import { ChicagoPizzaIngredientFactory } from "../ingredients/ingredientFactories/ChicagoIngredientFactory";
import { CheesePizza } from "../Pizzas/CheesePizza";
import { ClamPizza } from "../Pizzas/ClamPizza";
import { PepperoniPizza } from "../Pizzas/PepperoniPizza";
import { VeggiePizza } from "../Pizzas/VeggiePizza";
import { IPizzaIngredientFactory } from "../ingredients/PizzaIngredientFactory";
import { Pizza } from "../Pizzas/Pizza";
import { PizzaStore } from "./PizzaStore";

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    let pizza: Pizza;
    let ingredientFactory: IPizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    if (item === "cheese") {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("Chicago Style Cheese Pizza");
    } else if (item === "veggie") {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName("Chicago Style Veggie Pizza");
    } else if (item === "clam") {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName("Chicago Style Clam Pizza");
    } else if (item === "pepperoni") {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName("Chicago Style Pepperoni Pizza");
    }
    return pizza;
  }
}
