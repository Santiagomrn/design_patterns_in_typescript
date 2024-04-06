import { Amplifier } from "./Amplifier";

export class CdPlayer {
  description: string;
  currentTrack: number;
  amplifier: Amplifier;
  title: string | null;

  public constructor(description: string, amplifier: Amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  public on() {
    console.log(this.description + " on");
  }

  public off() {
    console.log(this.description + " off");
  }

  public eject() {
    this.title = null;
    console.log(this.description + " eject");
  }

  public play(chapter: number);
  public play(movie: string);
  public play(str: number | string) {
    if (typeof str === "number") {
      this.playTrack(str);
    }
    if (typeof str === "string") {
      this.playTitle(str);
    }
  }

  public playTitle(title: string) {
    this.title = title;
    this.currentTrack = 0;
    console.log(this.description + ' playing "' + title + '"');
  }

  public playTrack(track: number) {
    if (this.title == null) {
      console.log(
        this.description +
          " can't play track " +
          this.currentTrack +
          ", no cd inserted"
      );
    } else {
      this.currentTrack = track;
      console.log(this.description + " playing track " + this.currentTrack);
    }
  }

  public stop() {
    this.currentTrack = 0;
    console.log(this.description + " stopped");
  }

  public pause() {
    console.log(this.description + ' paused "' + this.title + '"');
  }

  public toString(): string {
    return this.description;
  }
}
