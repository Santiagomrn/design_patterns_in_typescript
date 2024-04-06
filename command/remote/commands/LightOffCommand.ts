import { Light } from "../objects/Light";
import { ICommand } from "./Command";

export class LightOffCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }
}
