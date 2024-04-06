import { StreamingPlayer } from "./StreamingPlayer";
import { Tuner } from "./Tuner";

export class Amplifier {
  description: string;
  tuner: Tuner;
  player: StreamingPlayer;

  public constructor(description: string) {
    this.description = description;
  }

  public on() {
    console.log(this.description + " on");
  }

  public off() {
    console.log(this.description + " off");
  }

  public setStereoSound() {
    console.log(this.description + " stereo mode on");
  }

  public setSurroundSound() {
    console.log(
      this.description + " surround sound on (5 speakers, 1 subwoofer)"
    );
  }

  public setVolume(level: number) {
    console.log(this.description + " setting volume to " + level);
  }

  public setTuner(tuner: Tuner) {
    console.log(this.description + " setting tuner to " + tuner);
    this.tuner = tuner;
  }

  public setStreamingPlayer(player: StreamingPlayer) {
    console.log(this.description + " setting Streaming player to " + player);
    this.player = player;
  }

  public toString(): string {
    return this.description;
  }
}
