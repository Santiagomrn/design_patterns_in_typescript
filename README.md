# Design Patterns in TypeScript

This repository contains the implementations of the following design patterns in TypeScript

## Creational patterns

- [Factory](./factory/)
- [Singleton](./singleton/)

## Structural patterns

- [Adapter](./adapter/)
- [Composite](./composite/)
- [decorator](./decorator/)
- [Facade](./facade/)

## Behavioral patterns

- [Strategy](./strategy/)
- [Observer](./observerp/)
- [Command](./command/)
- [Template](./template/)
- [Iterator](./iterator/)
- [State](./state/)

## Compile the project

There is a package.json file and a tsconfig.json that are responsible for the compiler options in each pattern folder

To compile and execute a pattern, use the following command.

```bash
$ cd design_patterns_in_typescript/strategy
$ npm start
```

## Project tree

```bash
.
├── README.md
├── adapter
│   ├── README.md
│   ├── adapter
│   │   ├── DuckTestDrive.ts
│   │   ├── IDuck.ts
│   │   ├── ITurkey.ts
│   │   ├── MallarDuck.ts
│   │   ├── TurkeyAdapter.ts
│   │   └── WildTurkey.ts
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── command
│   ├── README.md
│   ├── package.json
│   ├── remote
│   │   ├── RemoteControl.ts
│   │   ├── RemoteLoader.ts
│   │   ├── commands
│   │   │   ├── CeilingFanOffCommand.ts
│   │   │   ├── CeilingFanOnCommand.ts
│   │   │   ├── Command.ts
│   │   │   ├── GarageDoorDownCommand.ts
│   │   │   ├── GarageDoorUpCommand.ts
│   │   │   ├── LightOffCommand.ts
│   │   │   ├── LightOnCommand.ts
│   │   │   ├── NoCommand.ts
│   │   │   ├── StereoOffCommand.ts
│   │   │   └── StereoOnWithCDCommand.ts
│   │   └── objects
│   │       ├── CeilingFan.ts
│   │       ├── GarageDoor.ts
│   │       ├── Light.ts
│   │       └── Stereo.ts
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── composite
│   ├── README.md
│   ├── composite
│   │   ├── IIterator.ts
│   │   ├── Iterator.ts
│   │   ├── Menu.ts
│   │   ├── MenuComponent.ts
│   │   ├── MenuItem.ts
│   │   ├── MenuTestDrive.ts
│   │   └── Waitress.ts
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── decorator
│   ├── README.md
│   ├── Starbuzz
│   │   ├── StarBuzz.ts
│   │   ├── classes
│   │   │   ├── Beverage.ts
│   │   │   ├── CondimentDecorator.ts
│   │   │   ├── DarkRoast.ts
│   │   │   ├── Espresso.ts
│   │   │   ├── HouseBlend.ts
│   │   │   ├── Mocha.ts
│   │   │   ├── Soy.ts
│   │   │   └── Whip.ts
│   │   └── interfaces
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── facade
│   ├── README.md
│   ├── facade
│   │   ├── Amplifier.ts
│   │   ├── CdPlayer.ts
│   │   ├── HomeTheaterFacade.ts
│   │   ├── HomeTheaterTestDrive.ts
│   │   ├── PopcornPopper.ts
│   │   ├── Projector.ts
│   │   ├── Screen.ts
│   │   ├── StreamingPlayer.ts
│   │   ├── TheaterLights.ts
│   │   └── Tuner.ts
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── factory
│   ├── README.md
│   ├── dist
│   │   ├── PizzaApp.d.ts
│   │   ├── PizzaApp.js
│   │   ├── PizzaApp.js.map
│   │   ├── PizzaStores
│   │   │   ├── ChicagoPizzaStore.d.ts
│   │   │   ├── ChicagoPizzaStore.js
│   │   │   ├── ChicagoPizzaStore.js.map
│   │   │   ├── NYPizzaStore.d.ts
│   │   │   ├── NYPizzaStore.js
│   │   │   ├── NYPizzaStore.js.map
│   │   │   ├── PizzaStore.d.ts
│   │   │   ├── PizzaStore.js
│   │   │   └── PizzaStore.js.map
│   │   ├── Pizzas
│   │   │   ├── CheesePizza.d.ts
│   │   │   ├── CheesePizza.js
│   │   │   ├── CheesePizza.js.map
│   │   │   ├── ClamPizza.d.ts
│   │   │   ├── ClamPizza.js
│   │   │   ├── ClamPizza.js.map
│   │   │   ├── PepperoniPizza.d.ts
│   │   │   ├── PepperoniPizza.js
│   │   │   ├── PepperoniPizza.js.map
│   │   │   ├── Pizza.d.ts
│   │   │   ├── Pizza.js
│   │   │   ├── Pizza.js.map
│   │   │   ├── VeggiePizza.d.ts
│   │   │   ├── VeggiePizza.js
│   │   │   └── VeggiePizza.js.map
│   │   └── ingredients
│   │       ├── FreshClams.d.ts
│   │       ├── FreshClams.js
│   │       ├── FreshClams.js.map
│   │       ├── FrozenClams.d.ts
│   │       ├── FrozenClams.js
│   │       ├── FrozenClams.js.map
│   │       ├── MarinaraSauce.d.ts
│   │       ├── MarinaraSauce.js
│   │       ├── MarinaraSauce.js.map
│   │       ├── MozzarellaCheese.d.ts
│   │       ├── MozzarellaCheese.js
│   │       ├── MozzarellaCheese.js.map
│   │       ├── PizzaIngredientFactory.d.ts
│   │       ├── PizzaIngredientFactory.js
│   │       ├── PizzaIngredientFactory.js.map
│   │       ├── PlumTomatoSauce.d.ts
│   │       ├── PlumTomatoSauce.js
│   │       ├── PlumTomatoSauce.js.map
│   │       ├── ReggianoChesse.d.ts
│   │       ├── ReggianoChesse.js
│   │       ├── ReggianoChesse.js.map
│   │       ├── SlicedPepperoni.d.ts
│   │       ├── SlicedPepperoni.js
│   │       ├── SlicedPepperoni.js.map
│   │       ├── ThickCrustDough.d.ts
│   │       ├── ThickCrustDough.js
│   │       ├── ThickCrustDough.js.map
│   │       ├── ThinCrustDough.d.ts
│   │       ├── ThinCrustDough.js
│   │       ├── ThinCrustDough.js.map
│   │       ├── ingredientFactories
│   │       │   ├── ChicagoIngredientFactory.d.ts
│   │       │   ├── ChicagoIngredientFactory.js
│   │       │   ├── ChicagoIngredientFactory.js.map
│   │       │   ├── NYPizzaIngredientFactory.d.ts
│   │       │   ├── NYPizzaIngredientFactory.js
│   │       │   └── NYPizzaIngredientFactory.js.map
│   │       ├── interfaces
│   │       │   ├── ICheese.d.ts
│   │       │   ├── ICheese.js
│   │       │   ├── ICheese.js.map
│   │       │   ├── IClams.d.ts
│   │       │   ├── IClams.js
│   │       │   ├── IClams.js.map
│   │       │   ├── IDough.d.ts
│   │       │   ├── IDough.js
│   │       │   ├── IDough.js.map
│   │       │   ├── IPepperoni.d.ts
│   │       │   ├── IPepperoni.js
│   │       │   ├── IPepperoni.js.map
│   │       │   ├── ISauce.d.ts
│   │       │   ├── ISauce.js
│   │       │   ├── ISauce.js.map
│   │       │   ├── IVeggies.d.ts
│   │       │   ├── IVeggies.js
│   │       │   └── IVeggies.js.map
│   │       └── veggies
│   │           ├── BlackOlives.d.ts
│   │           ├── BlackOlives.js
│   │           ├── BlackOlives.js.map
│   │           ├── Eggplant.d.ts
│   │           ├── Eggplant.js
│   │           ├── Eggplant.js.map
│   │           ├── Garlic.d.ts
│   │           ├── Garlic.js
│   │           ├── Garlic.js.map
│   │           ├── Mushroom.d.ts
│   │           ├── Mushroom.js
│   │           ├── Mushroom.js.map
│   │           ├── Onion.d.ts
│   │           ├── Onion.js
│   │           ├── Onion.js.map
│   │           ├── RedPepper.d.ts
│   │           ├── RedPepper.js
│   │           ├── RedPepper.js.map
│   │           ├── Spinach.d.ts
│   │           ├── Spinach.js
│   │           └── Spinach.js.map
│   ├── package.json
│   ├── pizza
│   │   ├── PizzaApp.ts
│   │   ├── PizzaStores
│   │   │   ├── ChicagoPizzaStore.ts
│   │   │   ├── NYPizzaStore.ts
│   │   │   └── PizzaStore.ts
│   │   ├── Pizzas
│   │   │   ├── CheesePizza.ts
│   │   │   ├── ClamPizza.ts
│   │   │   ├── PepperoniPizza.ts
│   │   │   ├── Pizza.ts
│   │   │   └── VeggiePizza.ts
│   │   └── ingredients
│   │       ├── FreshClams.ts
│   │       ├── FrozenClams.ts
│   │       ├── MarinaraSauce.ts
│   │       ├── MozzarellaCheese.ts
│   │       ├── PizzaIngredientFactory.ts
│   │       ├── PlumTomatoSauce.ts
│   │       ├── ReggianoChesse.ts
│   │       ├── SlicedPepperoni.ts
│   │       ├── ThickCrustDough.ts
│   │       ├── ThinCrustDough.ts
│   │       ├── ingredientFactories
│   │       │   ├── ChicagoIngredientFactory.ts
│   │       │   └── NYPizzaIngredientFactory.ts
│   │       ├── interfaces
│   │       │   ├── ICheese.ts
│   │       │   ├── IClams.ts
│   │       │   ├── IDough.ts
│   │       │   ├── IPepperoni.ts
│   │       │   ├── ISauce.ts
│   │       │   └── IVeggies.ts
│   │       └── veggies
│   │           ├── BlackOlives.ts
│   │           ├── Eggplant.ts
│   │           ├── Garlic.ts
│   │           ├── Mushroom.ts
│   │           ├── Onion.ts
│   │           ├── RedPepper.ts
│   │           └── Spinach.ts
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── iterator
│   ├── README.md
│   ├── iterator
│   │   ├── DinerMenu.ts
│   │   ├── DinerMenuIterator.ts
│   │   ├── Iterator.ts
│   │   ├── Menu.ts
│   │   ├── MenuItem.ts
│   │   ├── MenuTestDrive.ts
│   │   ├── PancakeHouseMenu.ts
│   │   ├── PancakehouseMenuIterator.ts
│   │   └── Waitress.ts
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── observer
│   ├── README.md
│   ├── WeatherStation
│   │   ├── WeatherStation.ts
│   │   ├── classes
│   │   │   ├── CurrentConditionsDisplay.ts
│   │   │   ├── ForecastDisplay.ts
│   │   │   ├── StatisticsDisplay.ts
│   │   │   └── WeatherData.ts
│   │   └── interfaces
│   │       ├── IDisplayElement.ts
│   │       ├── IObserver.ts
│   │       └── ISubject.ts
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── singleton
│   ├── README.md
│   ├── chocolate
│   │   ├── ChocolateBoiler.ts
│   │   └── ChocolateController.ts
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── state
│   ├── README.md
│   ├── package.json
│   ├── state
│   │   ├── GumballMachine.ts
│   │   ├── GumballMachineTestDrive.ts
│   │   ├── HasQuarterState.ts
│   │   ├── NoQuarterState.ts
│   │   ├── SoldOutState.ts
│   │   ├── SoldState.ts
│   │   └── State.ts
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
├── strategy
│   ├── MiniDuckSimulator
│   │   ├── Duck
│   │   │   └── classes
│   │   │       ├── Duck.ts
│   │   │       ├── MallardDuck.ts
│   │   │       └── ModelDuck.ts
│   │   ├── FlyBehaviors
│   │   │   ├── classes
│   │   │   │   ├── FlyNoWay.ts
│   │   │   │   ├── FlyRocketPowered.ts
│   │   │   │   └── FlyWithWings.ts
│   │   │   └── interfaces
│   │   │       └── IFlyBehavior.ts
│   │   ├── MiniDuckSimulator.ts
│   │   └── QuackBehavior
│   │       ├── classes
│   │       │   ├── MuteQuack.ts
│   │       │   ├── Quack.ts
│   │       │   └── Squeak.ts
│   │       └── interfaces
│   │           └── IQuackBehavior.ts
│   ├── README.md
│   ├── dist
│   │   ├── Duck
│   │   │   └── classes
│   │   │       ├── Duck.d.ts
│   │   │       ├── Duck.js
│   │   │       ├── Duck.js.map
│   │   │       ├── MallardDuck.d.ts
│   │   │       ├── MallardDuck.js
│   │   │       ├── MallardDuck.js.map
│   │   │       ├── ModelDuck.d.ts
│   │   │       ├── ModelDuck.js
│   │   │       └── ModelDuck.js.map
│   │   ├── FlyBehaviors
│   │   │   ├── classes
│   │   │   │   ├── FlyNoWay.d.ts
│   │   │   │   ├── FlyNoWay.js
│   │   │   │   ├── FlyNoWay.js.map
│   │   │   │   ├── FlyRocketPowered.d.ts
│   │   │   │   ├── FlyRocketPowered.js
│   │   │   │   ├── FlyRocketPowered.js.map
│   │   │   │   ├── FlyWithWings.d.ts
│   │   │   │   ├── FlyWithWings.js
│   │   │   │   └── FlyWithWings.js.map
│   │   │   └── interfaces
│   │   │       ├── IFlyBehavior.d.ts
│   │   │       ├── IFlyBehavior.js
│   │   │       └── IFlyBehavior.js.map
│   │   ├── MiniDuckSimulator.d.ts
│   │   ├── MiniDuckSimulator.js
│   │   ├── MiniDuckSimulator.js.map
│   │   └── QuackBehavior
│   │       ├── classes
│   │       │   ├── MuteQuack.d.ts
│   │       │   ├── MuteQuack.js
│   │       │   ├── MuteQuack.js.map
│   │       │   ├── Quack.d.ts
│   │       │   ├── Quack.js
│   │       │   ├── Quack.js.map
│   │       │   ├── Squeak.d.ts
│   │       │   ├── Squeak.js
│   │       │   └── Squeak.js.map
│   │       └── interfaces
│   │           ├── IQuackBehavior.d.ts
│   │           ├── IQuackBehavior.js
│   │           └── IQuackBehavior.js.map
│   ├── package.json
│   ├── tools
│   │   └── cleanup.js
│   └── tsconfig.json
└── template
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── template
    │   ├── BeverageTestDrive.ts
    │   ├── CaffeineBeverage.ts
    │   ├── CaffeineBeverageWithHook.ts
    │   ├── Coffee.ts
    │   ├── CoffeeWithHook.ts
    │   ├── Tea.ts
    │   └── TeaWithHook.ts
    ├── tools
    │   └── cleanup.js
    └── tsconfig.json
```
