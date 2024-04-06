import { IIterator } from "./Iterator";
import { MenuItem } from "./MenuItem";

export class DinerMenuIterator implements IIterator {
  items: MenuItem[];
  position: number = 0;

  public constructor(items: MenuItem[]) {
    this.items = items;
  }

  public next(): MenuItem {
    /* 
            MenuItem item = items.get(position);
            position = position + 1;
            return item;
            */
    // or shorten to:
    return this.items[this.position++];
  }
  public hasNext(): boolean {
    /*
            if (position >= items.size()) {
                return false;
            } else {
                return true;
            }
            */
    // or shorten to:
    return this.items.length > this.position;
  }
}
