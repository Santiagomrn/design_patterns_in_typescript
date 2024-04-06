import { Amplifier } from "./Amplifier";

export class StreamingPlayer {
  description: string;
  currentChapter: number;
  amplifier: Amplifier;
  movie: string;

  constructor(description: string, amplifier: Amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  public on() {
    console.log(this.description + " on");
  }

  public off() {
    console.log(this.description + " off");
  }
  public play(chapter: number);
  public play(movie: string);
  public play(str: number | string) {
    if (typeof str === "number") {
      this.playChapter(str);
    }
    if (typeof str === "string") {
      this.playMovie(str);
    }
  }
  public playMovie(movie: string) {
    this.movie = movie;
    this.currentChapter = 0;
    console.log(this.description + ' playing "' + movie + '"');
  }

  public playChapter(chapter: number) {
    if (this.movie == null) {
      console.log(
        this.description +
          " can't play chapter " +
          chapter +
          " no movie selected"
      );
    } else {
      this.currentChapter = chapter;
      console.log(
        this.description +
          " playing chapter " +
          this.currentChapter +
          ' of "' +
          this.movie +
          '"'
      );
    }
  }

  public stop() {
    this.currentChapter = 0;
    console.log(this.description + ' stopped "' + this.movie + '"');
  }

  public pause() {
    console.log(this.description + ' paused "' + this.movie + '"');
  }

  public setTwoChannelAudio() {
    console.log(this.description + " set two channel audio");
  }

  public setSurroundAudio() {
    console.log(this.description + " set surround audio");
  }

  public toString(): string {
    return this.description;
  }
}
