import { HasQuarterState } from "./HasQuarterState";
import { NoQuarterState } from "./NoQuarterState";
import { SoldOutState } from "./SoldOutState";
import { SoldState } from "./SoldState";
import { IState } from "./State";

export class GumballMachine {
  hasQuarterState: IState;
  soldOutState: IState;
  noQuarterState: IState;
  soldState: IState;

  state: IState;
  count: number = 0;

  public constructor(numberGumballs: number) {
    this.hasQuarterState = new HasQuarterState(this);
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.soldState = new SoldState(this);
    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  public insertQuarter() {
    this.state.insertQuarter();
  }

  public ejectQuarter() {
    this.state.ejectQuarter();
  }

  public turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }
  releaseBall() {
    console.log("A gumball comes rolling out the slot...");
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }

  getCount(): number {
    return this.count;
  }
  refill(count: number) {
    this.count += count;
    console.log(
      "The gumball machine was just refilled; its new count is: " + this.count
    );
    this.state.refill();
  }
  setState(state: IState) {
    this.state = state;
  }
  public getState(): IState {
    return this.state;
  }

  public getSoldOutState(): IState {
    return this.soldOutState;
  }

  public getNoQuarterState(): IState {
    return this.noQuarterState;
  }

  public getHasQuarterState(): IState {
    return this.hasQuarterState;
  }

  public getSoldState(): IState {
    return this.soldState;
  }

  public toString(): string {
    const result: String[] = new Array<String>();
    result.push("\nMighty Gumball, Inc.");
    result.push("\nTypeScript-enabled Standing Gumball Model #2004");
    result.push("\nInventory: " + this.count + " gumball");
    if (this.count != 1) {
      result.push("s");
    }
    result.push("\n");
    result.push("Machine is " + this.state + "\n");
    return result.toString();
  }
}
