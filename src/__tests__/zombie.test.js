import Zombie from '../js/zombie';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Zombie is created', () => {
  const zombie = new Zombie('gamer', 'Zombie');
  expect(zombie).toEqual({
    name: 'gamer',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  })
})

test('check Zombie error name', () => {
  expect(() => {
    new Zombie('g', 'Zombie');
  }).toThrow('Name is not correct!')
})

test('check Zombie error type', () => {
  expect(() => {
    new Zombie('gamer', 'Bowman');
  }).toThrow('Type is not correct!')
})

test('check Zombie level up', () => {
  const zombie = new Zombie('gamer', 'Zombie');
  zombie.levelUp();

  expect(zombie).toEqual({
    name: 'gamer',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12
  });
})

test('check Zombie error level up because of damage', () => {
  expect(() => {
    const zombie = new Zombie('gamer', 'Zombie');
    zombie.damage(1200);
    zombie.levelUp();
  }).toThrow('It is impossible to level up the dead character!');
})