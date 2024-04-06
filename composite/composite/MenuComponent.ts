export abstract class MenuComponent {
  public add(menuComponent: MenuComponent) {
    throw new Error("Method not implemented.");
  }
  public remove(menuComponent: MenuComponent) {
    throw new Error("Method not implemented.");
  }
  public getChild(i: number): MenuComponent {
    throw new Error("Method not implemented.");
  }
  public getName(): string {
    throw new Error("Method not implemented.");
  }
  public getDescription(): string {
    throw new Error("Method not implemented.");
  }
  public getPrice(): number {
    throw new Error("Method not implemented.");
  }
  public isVegetarian(): boolean {
    throw new Error("Method not implemented.");
  }

  public print() {
    throw new Error("Method not implemented.");
  }
}
