import { CeilingFan } from "../objects/CeilingFan";
import { ICommand } from "./Command";

export class CeilingFanOnCommand implements ICommand {
  private ceilingFan: CeilingFan;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }
  public execute(): void {
    this.ceilingFan.high();
  }
}
