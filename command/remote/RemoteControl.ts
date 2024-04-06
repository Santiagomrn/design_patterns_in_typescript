//
// This is the invoker

import { ICommand } from "./commands/Command";
import { NoCommand } from "./commands/NoCommand";

export class RemoteControl {
  onCommands: ICommand[];
  offCommands: ICommand[];

  constructor() {
    this.onCommands = [];
    this.offCommands = [];

    const noCommand: ICommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands.push(noCommand);
      this.offCommands.push(noCommand);
    }
  }

  public setCommand(
    slot: number,
    onCommand: ICommand,
    offCommand: ICommand
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  public toString(): string {
    const stringBuff: string[] = [];
    stringBuff.push("\n------ Remote Control -------\n");
    for (let i = 0; i < this.onCommands.length; i++) {
      stringBuff.push(
        "[slot " +
          i +
          "] " +
          this.onCommands[i].constructor.name +
          "    " +
          this.offCommands[i].constructor.name +
          "\n"
      );
    }
    return stringBuff.join("");
  }
}
