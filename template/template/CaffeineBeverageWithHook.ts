export abstract class CaffeineBeverageWithHook {
  readonly prepareRecipe = () => {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  };

  abstract brew();

  abstract addCondiments();

  boilWater() {
    console.log("Boiling water");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }

  customerWantsCondiments(): boolean {
    return true;
  }
}
