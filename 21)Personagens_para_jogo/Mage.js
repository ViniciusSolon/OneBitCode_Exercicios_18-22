const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, ptVida, ptAtaque, ptDefense, magicPts) {
    super(name, ptVida, ptAtaque, ptDefense);
    this.magicPts = magicPts;
  }
  attack(targetCharacter) {
    targetCharacter.ptVida -=
      this.ptAtaque + this.magicPts - targetCharacter.ptDefense;
  }

  heal(targetCharacter) {
    targetCharacter.ptVida += this.magicPts * 2;
  }
}

module.exports = Mage;
