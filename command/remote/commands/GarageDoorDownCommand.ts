import { GarageDoor } from "../objects/GarageDoor";
import { ICommand } from "./Command";

export class GarageDoorDownCommand implements ICommand {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.down();
  }
}
