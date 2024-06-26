import { Amplifier } from "./Amplifier";

export class Tuner {
  description: string;
  amplifier: Amplifier;
  frequency: number;

  constructor(description: string, amplifier: Amplifier) {
    this.description = description;
  }

  public on() {
    console.log(this.description + " on");
  }

  public off() {
    console.log(this.description + " off");
  }

  public setFrequency(frequency: number) {
    console.log(this.description + " setting frequency to " + frequency);
    this.frequency = frequency;
  }

  public setAm() {
    console.log(this.description + " setting AM mode");
  }

  public setFm() {
    console.log(this.description + " setting FM mode");
  }

  public toString(): string {
    return this.description;
  }
}
