import { MenuComponent } from "./MenuComponent";

export class Waitress {
  allMenus: MenuComponent;

  public constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu() {
    this.allMenus.print();
  }
}
