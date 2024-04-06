export class CeilingFan {
  location: string = "";
  level: number;
  public static readonly HIGH: number = 2;
  public static readonly MEDIUM: number = 1;
  public static readonly LOW: number = 0;

  constructor(location: string) {
    this.location = location;
  }

  public high(): void {
    this.level = CeilingFan.HIGH;
    console.log(this.location + " ceiling fan is on high");
  }

  public medium(): void {
    // turns the ceiling fan on to medium
    this.level = CeilingFan.MEDIUM;
    console.log(this.location + " ceiling fan is on medium");
  }

  public low(): void {
    // turns the ceiling fan on to low
    this.level = CeilingFan.LOW;
    console.log(this.location + " ceiling fan is on low");
  }

  public off(): void {
    // turns the ceiling fan off
    this.level = 0;
    console.log(this.location + " ceiling fan is off");
  }

  public getSpeed(): number {
    return this.level;
  }
}
