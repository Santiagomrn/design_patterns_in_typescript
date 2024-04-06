import { FreshClams } from "../FreshClams";
import { ICheese } from "../interfaces/ICheese";
import { IClams } from "../interfaces/IClams";
import { IDough } from "../interfaces/IDough";
import { IPepperoni } from "../interfaces/IPepperoni";
import { ISauce } from "../interfaces/ISauce";
import { IVeggies } from "../interfaces/IVeggies";
import { MarinaraSauce } from "../MarinaraSauce";
import { IPizzaIngredientFactory } from "../PizzaIngredientFactory";
import { ReggianoCheese } from "../ReggianoChesse";
import { SlicedPepperoni } from "../SlicedPepperoni";
import { ThinCrustDough } from "../ThinCrustDough";
import { Garlic } from "../veggies/Garlic";
import { Mushroom } from "../veggies/Mushroom";
import { Onion } from "../veggies/Onion";
import { RedPepper } from "../veggies/RedPepper";

export class NYPizzaIngredientFactory implements IPizzaIngredientFactory {
    public createDough(): IDough {
        return new ThinCrustDough();
    }

    public createSauce(): ISauce {
        return new MarinaraSauce();
    }

    public createCheese(): ICheese {
        return new ReggianoCheese();
    }

    public createVeggies(): IVeggies[] {
        const veggies: IVeggies[] = [
            new Garlic(),
            new Onion(),
            new Mushroom(),
            new RedPepper(),
        ];
        return veggies;
    }

    public createPepperoni(): IPepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): IClams {
        return new FreshClams();
    }
}
