import { ICommand } from "./Command";

export class NoCommand implements ICommand {
  public execute(): void {}
}
