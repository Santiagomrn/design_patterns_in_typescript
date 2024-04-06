import { IIterator } from "./Iterator";

export interface IMenu {
  createIterator(): IIterator;
}
