import Magician from '../js/magician';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Magician is created', () => {
  const magician = new Magician('gamer', 'Magician');
  expect(magician).toEqual({
    name: 'gamer',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  })
})

test('check Magician error name', () => {
  expect(() => {
    new Magician('g', 'Magician');
  }).toThrow('Name is not correct!')
})

test('check Magician error type', () => {
  expect(() => {
    new Magician('gamer', 'Bowman');
  }).toThrow('Type is not correct!')
})

test('check Magician level up', () => {
  const magician = new Magician('gamer', 'Magician');
  magician.levelUp();

  expect(magician).toEqual({
    name: 'gamer',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  });
})

test('check Magician error level up because of damage', () => {
  expect(() => {
    const magician = new Magician('gamer', 'Magician');
    magician.damage(1200);
    magician.levelUp();
  }).toThrow('It is impossible to level up the dead character!');
})