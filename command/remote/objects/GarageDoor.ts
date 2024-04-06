export class GarageDoor {
  private location: string;

  constructor(location: string) {
    this.location = location;
  }

  public up(): void {
    console.log(this.location + " garage Door is Up");
  }

  public down(): void {
    console.log(this.location + " garage Door is Down");
  }

  public stop(): void {
    console.log(this.location + " garage Door is Stopped");
  }

  public lightOn(): void {
    console.log(this.location + " garage light is on");
  }

  public lightOff(): void {
    console.log(this.location + " garage light is off");
  }
}
