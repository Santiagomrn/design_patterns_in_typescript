import { ICheese } from "./interfaces/ICheese";
import { IClams } from "./interfaces/IClams";
import { IDough } from "./interfaces/IDough";
import { ISauce } from "./interfaces/ISauce";
import { IVeggies } from "./interfaces/IVeggies";
import { IPepperoni } from "./interfaces/IPepperoni";

abstract class PizzaIngredientFactory {
  public abstract createDough(): IDough;
  public abstract createSauce(): ISauce;
  public abstract createCheese(): ICheese;
  public abstract createVeggies(): IVeggies[];
  public abstract createPepperoni(): IPepperoni;
  public abstract createClam(): IClams;
}

export interface IPizzaIngredientFactory extends PizzaIngredientFactory {}
