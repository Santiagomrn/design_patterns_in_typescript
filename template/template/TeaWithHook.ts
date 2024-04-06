import { CaffeineBeverageWithHook } from "./CaffeineBeverageWithHook";
import * as readlineSync from "readline-sync";
export class TeaWithHook extends CaffeineBeverageWithHook {
  public brew() {
    console.log("Steeping the tea");
  }

  public addCondiments() {
    console.log("Adding Lemon");
  }

  public customerWantsCondiments(): boolean {
    let answer: string = this.getUserInput();

    if (answer.toLowerCase().startsWith("y")) {
      return true;
    } else {
      return false;
    }
  }

  private getUserInput(): string {
    // get the user's response
    let answer: string | null = null;
    answer = readlineSync.question(
      "Would you like lemon with your tea (y/n)? "
    );
    if (answer == null) {
      return "no";
    }
    return answer;
  }
}
