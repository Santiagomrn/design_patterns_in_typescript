import { ICheese } from "pizza/ingredients/interfaces/ICheese";
import { IClams } from "pizza/ingredients/interfaces/IClams";
import { IDough } from "pizza/ingredients/interfaces/IDough";
import { IPepperoni } from "pizza/ingredients/interfaces/IPepperoni";
import { ISauce } from "pizza/ingredients/interfaces/ISauce";
import { IVeggies } from "pizza/ingredients/interfaces/IVeggies";

export abstract class Pizza {
    name: string;
    dough: IDough;
    sauce: ISauce;
    veggies: IVeggies[];
    cheese: ICheese;
    pepperoni: IPepperoni;
    clam: IClams;

    abstract prepare(): void;

    bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    box(): void {
        console.log("Place pizza in official PizzaStore box");
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    toString(): string {
        let result: string[] = [];
        result.push("---- " + name + " ----\n");
        if (this.dough != null) {
            result.push(this.dough.toString());
            result.push("\n");
        }
        if (this.sauce != null) {
            result.push(this.sauce.toString());
            result.push("\n");
        }
        if (this.cheese != null) {
            result.push(this.cheese.toString());
            result.push("\n");
        }
        if (this.veggies != null) {
            for (let i = 0; i < this.veggies.length; i++) {
                result.push(this.veggies[i].toString());
                if (i < this.veggies.length - 1) {
                    result.push(", ");
                }
            }
            result.push("\n");
        }
        if (this.clam != null) {
            result.push(this.clam.toString());
            result.push("\n");
        }
        if (this.pepperoni != null) {
            result.push(this.pepperoni.toString());
            result.push("\n");
        }
        return result.toString();
    }
}
