export class TheaterLights {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  public on() {
    console.log(this.description + " on");
  }

  public off() {
    console.log(this.description + " off");
  }

  public dim(level: number) {
    console.log(this.description + " dimming to " + level + "%");
  }

  public toString(): string {
    return this.description;
  }
}
