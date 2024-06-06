import Swordsman from '../js/swordsman';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Swordsman is created', () => {
  const swordsman = new Swordsman('gamer', 'Swordsman');
  expect(swordsman).toEqual({
    name: 'gamer',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  })
})

test('check Swordsman error name', () => {
  expect(() => {
    new Swordsman('g', 'Swordsman');
  }).toThrow('Name is not correct!')
})

test('check Swordsman error type', () => {
  expect(() => {
    new Swordsman('gamer', 'Bowman');
  }).toThrow('Type is not correct!')
})

test('check Swordsman level up', () => {
  const swordsman = new Swordsman('gamer', 'Swordsman');
  swordsman.levelUp();

  expect(swordsman).toEqual({
    name: 'gamer',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12
  });
})

test('check Swordsman error level up because of damage', () => {
  expect(() => {
    const swordsman = new Swordsman('gamer', 'Swordsman');
    swordsman.damage(1200);
    swordsman.levelUp();
  }).toThrow('It is impossible to level up the dead character!');
})