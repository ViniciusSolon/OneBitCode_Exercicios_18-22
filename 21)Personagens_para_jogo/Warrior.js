const Character = require("./Character");

class Warrior extends Character {
  constructor(name, ptVida, ptDefesa, ptAtaque, shieldPts) {
    super(name, ptVida, ptDefesa, ptAtaque);
    this.shieldPts = shieldPts;
    this.stance = "attacking";
  }
  attack(targetCharacter) {
    if (this.stance === "attacking") {
      super.attack(targetCharacter);
    }
  }
  switchStance() {
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.ptDefesa += this.shieldPts;
    } else {
      this.stance = "attacking";
      this.ptDefesa -= this.shieldPts;
    }
  }
}

module.exports = Warrior;
