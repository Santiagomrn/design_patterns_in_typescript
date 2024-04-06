import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
  public brew() {
    console.log("Dripping Coffee through filter");
  }
  public addCondiments() {
    console.log("Adding Sugar and Milk");
  }
}
