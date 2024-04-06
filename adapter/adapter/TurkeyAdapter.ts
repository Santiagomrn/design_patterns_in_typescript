import { IDuck } from "./IDuck";
import { ITurkey } from "./ITurkey";

export class TurkeyAdapter implements IDuck {
  turkey: ITurkey;

  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }

  public quack() {
    this.turkey.gobble();
  }

  public fly() {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
