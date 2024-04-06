import { DinerMenu } from "./DinerMenu";
import { IMenu } from "./Menu";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { Waitress } from "./Waitress";

export class MenuTestDrive {
  public static main() {
    const pancakeHouseMenu: IMenu = new PancakeHouseMenu();
    const dinerMenu: IMenu = new DinerMenu();

    const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu);

    // With iterators
    waitress.printMenu();
  }
}
MenuTestDrive.main();
