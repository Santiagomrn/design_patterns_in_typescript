import { Pizza } from "../Pizzas/Pizza";

export abstract class PizzaStore {
    protected abstract createPizza(item: string);

    public orderPizza(type: string): Pizza {
        const pizza: Pizza = this.createPizza(type);
        console.log("--- Making a " + pizza.getName() + " ---");
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
