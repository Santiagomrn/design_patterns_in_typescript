export abstract class CaffeineBeverage {
  readonly prepareRecipe = () => {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  };

  abstract brew();

  abstract addCondiments();

  boilWater() {
    console.log("Boiling water");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }
}
