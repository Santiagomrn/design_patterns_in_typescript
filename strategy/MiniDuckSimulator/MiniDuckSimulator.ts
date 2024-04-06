import { Duck } from "./Duck/classes/Duck";
import { MallardDuck } from "./Duck/classes/MallardDuck";
import { ModelDuck } from "./Duck/classes/ModelDuck";
import { FlyRocketPowered } from "./FlyBehaviors/classes/FlyRocketPowered";

class MiniDuckSimulator {
    public main() {
        let mallard: Duck = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();

        let model: Duck = new ModelDuck();
        model.performFly();
        model.setFlyBehavior(new FlyRocketPowered());
        model.performFly();
    }
}

new MiniDuckSimulator().main();
