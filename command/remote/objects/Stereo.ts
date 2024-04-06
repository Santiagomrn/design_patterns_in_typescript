export class Stereo {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(this.location + " stereo is on");
  }

  public off(): void {
    console.log(this.location + " stereo is off");
  }

  public setCD(): void {
    console.log(this.location + " stereo is set for CD input");
  }

  public setDVD(): void {
    console.log(this.location + " stereo is set for DVD input");
  }

  public setRadio(): void {
    console.log(this.location + " stereo is set for Radio");
  }

  public setVolume(volume: number) {
    // code to set the volume
    // valid range: 1-11 (after all 11 is better than 10, right?)
    console.log(this.location + " stereo volume set to " + volume);
  }
}
