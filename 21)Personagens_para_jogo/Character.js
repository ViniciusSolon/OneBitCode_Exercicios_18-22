class Character {
  constructor(nome, ptVida, ptAtaque, ptDefesa) {
    this.nome = nome;
    this.ptVida = ptVida;
    this.ptAtaque = ptAtaque;
    this.ptDefesa = ptDefesa;
  }
  attack(targetCharacter) {
    targetCharacter.ptVida -= this.ptAtaque - targetCharacter.ptDefesa;
  }
}

module.exports = Character;
