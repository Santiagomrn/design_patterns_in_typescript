import { IIterator } from "./Iterator";
import { IMenu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenuIterator } from "./PancakehouseMenuIterator";

export class PancakeHouseMenu implements IMenu {
  menuItems: MenuItem[];

  public constructor() {
    this.menuItems = [];

    this.addItem(
      "K&B's Pancake Breakfast",
      "Pancakes with scrambled eggs and toast",
      true,
      2.99
    );

    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with fried eggs, sausage",
      false,
      2.99
    );

    this.addItem(
      "Blueberry Pancakes",
      "Pancakes made with fresh blueberries",
      true,
      3.49
    );

    this.addItem(
      "Waffles",
      "Waffles with your choice of blueberries or strawberries",
      true,
      3.59
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem: MenuItem = new MenuItem(
      name,
      description,
      vegetarian,
      price
    );
    this.menuItems.push(menuItem);
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  public createIterator(): IIterator {
    return new PancakeHouseMenuIterator(this.menuItems);
  }

  public toString(): string {
    return "Objectville Pancake House Menu";
  }

  // other menu methods here
}
