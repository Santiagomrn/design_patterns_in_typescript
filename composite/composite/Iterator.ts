import { IIterator } from "./IIterator";

export class Iterator<T> implements IIterator<T> {
  items: T[];
  position: number = 0;

  public constructor(items: T[]) {
    this.items = items;
  }
  public next(): T {
    return this.items[this.position++];
  }
  public hasNext(): boolean {
    return this.items.length > this.position;
  }
}
