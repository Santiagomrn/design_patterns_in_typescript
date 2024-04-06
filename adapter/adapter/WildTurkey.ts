import { ITurkey } from "./ITurkey";

export class WildTurkey implements ITurkey {
  public gobble() {
    console.log("Gobble gobble");
  }

  public fly() {
    console.log("I'm flying a short distance");
  }
}
