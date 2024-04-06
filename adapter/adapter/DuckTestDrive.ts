import { IDuck } from "./IDuck";
import { MallardDuck } from "./MallarDuck";
import { ITurkey } from "./ITurkey";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

class DuckTestDrive {
  public static main() {
    const duck: IDuck = new MallardDuck();

    const turkey: ITurkey = new WildTurkey();

    const turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

    console.log("The Turkey says...");
    turkey.gobble();
    turkey.fly();

    console.log("\nThe Duck says...");
    this.testDuck(duck);

    console.log("\nThe TurkeyAdapter says...");
    this.testDuck(turkeyAdapter);
  }

  static testDuck(duck: IDuck) {
    duck.quack();
    duck.fly();
  }
}
DuckTestDrive.main();
