import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
  public brew() {
    console.log("Steeping the tea");
  }
  public addCondiments() {
    console.log("Adding Lemon");
  }
}
