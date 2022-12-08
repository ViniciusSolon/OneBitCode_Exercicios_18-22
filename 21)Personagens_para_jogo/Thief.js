const Character = require("./Character.js");

class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.ptVida -= (this.ptAtaque - targetCharacter.ptDefesa) * 2;
  }
}

module.exports = Thief;
