import { StreamingPlayer } from "./StreamingPlayer";

export class Projector {
  description: string;
  player: StreamingPlayer;

  public constructor(description: string, player: StreamingPlayer) {
    this.description = description;
    this.player = player;
  }

  public on() {
    console.log(this.description + " on");
  }

  public off() {
    console.log(this.description + " off");
  }

  public wideScreenMode() {
    console.log(this.description + " in widescreen mode (16x9 aspect ratio)");
  }

  public tvMode() {
    console.log(this.description + " in tv mode (4x3 aspect ratio)");
  }

  public toString(): string {
    return this.description;
  }
}
