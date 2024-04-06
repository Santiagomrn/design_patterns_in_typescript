import { Stereo } from "remote/objects/Stereo";
import { ICommand } from "./Command";

export class StereoOffCommand implements ICommand {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }
}
