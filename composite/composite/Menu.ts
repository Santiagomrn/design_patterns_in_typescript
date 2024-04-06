import { Iterator } from "./Iterator";
import { MenuComponent } from "./MenuComponent";
Object.defineProperty(Array.prototype, "iterator", {
  value: function () {
    return new Iterator(this);
  },
});
class IteratorArray<T> extends Array<T> {
  iterator() {
    return new Iterator<T>(this);
  }
}

export class Menu extends MenuComponent {
  menuComponents: IteratorArray<MenuComponent> = new IteratorArray();
  name: string;
  description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  public add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent) {
    const index = this.menuComponents.findIndex(
      (menuComp) => menuComp == menuComponent
    );
    if (index > -1) this.menuComponents.splice(index, 1);
  }

  public getChild(i: number): MenuComponent {
    return this.menuComponents[i] as MenuComponent;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public print() {
    console.log("\n" + this.getName());
    console.log(", " + this.getDescription());
    console.log("---------------------");

    const iterator: Iterator<MenuComponent> = this.menuComponents.iterator();
    while (iterator.hasNext()) {
      const menuComponent: MenuComponent = iterator.next() as MenuComponent;
      menuComponent.print();
    }
  }
}
