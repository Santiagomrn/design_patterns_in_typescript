import { BlackOlives } from "../veggies/BlackOlives";
import { Eggplant } from "../veggies/Eggplant";

import { MozzarellaCheese } from "../MozzarellaCheese";
import { IPizzaIngredientFactory } from "../PizzaIngredientFactory";

import { Spinach } from "../veggies/Spinach";
import { ThickCrustDough } from "../ThickCrustDough";
import { IDough } from "../interfaces/IDough";
import { ISauce } from "../interfaces/ISauce";
import { ICheese } from "../interfaces/ICheese";
import { IVeggies } from "../interfaces/IVeggies";
import { IPepperoni } from "../interfaces/IPepperoni";
import { SlicedPepperoni } from "../SlicedPepperoni";
import { IClams } from "../interfaces/IClams";
import { PlumTomatoSauce } from "../PlumTomatoSauce";
import { FrozenClams } from "../FrozenClams";

export class ChicagoPizzaIngredientFactory implements IPizzaIngredientFactory {
    public createDough(): IDough {
        return new ThickCrustDough();
    }

    public createSauce(): ISauce {
        return new PlumTomatoSauce();
    }

    public createCheese(): ICheese {
        return new MozzarellaCheese();
    }

    public createVeggies(): IVeggies[] {
        const veggies: IVeggies[] = [
            new BlackOlives(),
            new Spinach(),
            new Eggplant(),
        ];
        return veggies;
    }

    public createPepperoni(): IPepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): IClams {
        return new FrozenClams();
    }
}
