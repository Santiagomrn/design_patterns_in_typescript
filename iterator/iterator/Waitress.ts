import { IIterator } from "./Iterator";
import { IMenu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class Waitress {
  pancakeHouseMenu: IMenu;
  dinerMenu: IMenu;

  public constructor(pancakeHouseMenu: IMenu, dinerMenu: IMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  public printMenu(iterator: IIterator | null = null) {
    if (typeof iterator == "object" && iterator != null) {
      this.printMenuItem(iterator);
    } else {
      this.printAllMenu();
    }
  }

  public printAllMenu() {
    const pancakeIterator: IIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator: IIterator = this.dinerMenu.createIterator();

    console.log("MENU\n----\nBREAKFAST");
    this.printMenu(pancakeIterator);
    console.log("\nLUNCH");
    this.printMenu(dinerIterator);
  }

  private printMenuItem(iterator: IIterator) {
    while (iterator.hasNext()) {
      const menuItem: MenuItem = iterator.next();
      console.log(menuItem.getName() + ", ");
      console.log(menuItem.getPrice() + " -- ");
      console.log(menuItem.getDescription());
    }
  }
}
