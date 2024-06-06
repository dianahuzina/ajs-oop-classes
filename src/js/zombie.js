import Character from './character';

export default class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    if (type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('Type is not correct!');
    }
    this.attack = 40;
    this.defence = 10;
  }
}