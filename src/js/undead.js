import Character from './character';

export default class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    if (type === 'Undead') {
      this.type = type;
    } else {
      throw new Error('Type is not correct!');
    }
    this.attack = 25;
    this.defence = 25;
  }
}