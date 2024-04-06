export class PopcornPopper {
  description: string;

  public constructor(description: string) {
    this.description = description;
  }

  public on() {
    console.log(this.description + " on");
  }

  public off() {
    console.log(this.description + " off");
  }

  public pop() {
    console.log(this.description + " popping popcorn!");
  }

  public toString(): string {
    return this.description;
  }
}
