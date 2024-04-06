import { GumballMachine } from "./GumballMachine";

export class GumballMachineTestDrive {
  public static main() {
    const gumballMachine: GumballMachine = new GumballMachine(2);

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    gumballMachine.refill(5);
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    console.log(gumballMachine.toString());
  }
}
GumballMachineTestDrive.main();
