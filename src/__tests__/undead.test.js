import Undead from '../js/undead';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Undead is created', () => {
  const undead = new Undead('gamer', 'Undead');
  expect(undead).toEqual({
    name: 'gamer',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  })
})

test('check Undead error name', () => {
  expect(() => {
    new Undead('gamer124345457', 'Undead');
  }).toThrow('Name is not correct!')
})

test('check Undead error type', () => {
  expect(() => {
    new Undead('gamer', 'Swordsman');
  }).toThrow('Type is not correct!')
})

test('check Undead level up', () => {
  const undead = new Undead('gamer', 'Undead');
  undead.levelUp();

  expect(undead).toEqual({
    name: 'gamer',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  });
})

test('check Undead error level up', () => {
  expect(() => {
    const undead = new Undead('gamer', 'Undead');
    undead.damage(1200);
    undead.levelUp();
  }).toThrow('It is impossible to level up the dead character!');
})