import { Stereo } from "remote/objects/Stereo";
import { ICommand } from "./Command";

export class StereoOnWithCDCommand implements ICommand {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}
