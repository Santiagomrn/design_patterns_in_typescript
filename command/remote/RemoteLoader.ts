import { RemoteControl } from "./RemoteControl";
import { CeilingFanOffCommand } from "./commands/CeilingFanOffCommand";
import { CeilingFanOnCommand } from "./commands/CeilingFanOnCommand";
import { GarageDoorDownCommand } from "./commands/GarageDoorDownCommand";
import { GarageDoorUpCommand } from "./commands/GarageDoorUpCommand";
import { LightOffCommand } from "./commands/LightOffCommand";
import { LightOnCommand } from "./commands/LightOnCommand";
import { StereoOffCommand } from "./commands/StereoOffCommand";
import { StereoOnWithCDCommand } from "./commands/StereoOnWithCDCommand";
import { CeilingFan } from "./objects/CeilingFan";
import { GarageDoor } from "./objects/GarageDoor";
import { Light } from "./objects/Light";
import { Stereo } from "./objects/Stereo";

export class RemoteLoader {
  public static main() {
    const remoteControl: RemoteControl = new RemoteControl();

    const livingRoomLight: Light = new Light("Living Room");
    const kitchenLight: Light = new Light("Kitchen");
    const ceilingFan: CeilingFan = new CeilingFan("Living Room");
    const garageDoor: GarageDoor = new GarageDoor("Garage");
    const stereo: Stereo = new Stereo("Living Room");

    const livingRoomLightOn: LightOnCommand = new LightOnCommand(
      livingRoomLight
    );
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(
      livingRoomLight
    );
    const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);
    const ceilingFanOn: CeilingFanOnCommand = new CeilingFanOnCommand(
      ceilingFan
    );
    const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(
      ceilingFan
    );
    const garageDoorUp: GarageDoorUpCommand = new GarageDoorUpCommand(
      garageDoor
    );
    const garageDoorDown: GarageDoorDownCommand = new GarageDoorDownCommand(
      garageDoor
    );
    const stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(
      stereo
    );
    const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
    remoteControl.setCommand(3, stereoOnWithCD, stereoOff);

    console.log(remoteControl.toString());

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
  }
}
RemoteLoader.main();
