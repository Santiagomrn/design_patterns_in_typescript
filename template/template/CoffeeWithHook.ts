import { CaffeineBeverageWithHook } from "./CaffeineBeverageWithHook";
import * as readlineSync from "readline-sync";
export class CoffeeWithHook extends CaffeineBeverageWithHook {
  public brew() {
    console.log("Dripping Coffee through filter");
  }

  public addCondiments() {
    console.log("Adding Sugar and Milk");
  }

  public customerWantsCondiments(): boolean {
    const answer: string = this.getUserInput();

    if (answer.toLowerCase().startsWith("y")) {
      return true;
    } else {
      return false;
    }
  }

  private getUserInput(): string {
    let answer: string | null = null;

    answer = readlineSync.question(
      "Would you like milk and sugar with your coffee (y/n)? "
    );

    if (answer == null) {
      return "no";
    }
    return answer;
  }
}
