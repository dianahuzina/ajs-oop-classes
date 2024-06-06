import Bowman from '../js/bowman';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Bowman is created', () => {
  const bowman = new Bowman('gamer', 'Bowman');
  expect(bowman).toEqual({
    name: 'gamer',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  })
})

test('check Bowman error name', () => {
  expect(() => {
    new Bowman('g', 'Bowman');
  }).toThrow('Name is not correct!')
})

test('check Bowman error type', () => {
  expect(() => {
    new Bowman('gamer', '12334');
  }).toThrow('Type is not correct!')
})

test('check Bowman level up', () => {
  const bowman = new Bowman('gamer', 'Bowman');
  bowman.levelUp();

  expect(bowman).toEqual({
    name: 'gamer',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  });
})

test('check Bowman error level up', () => {
  expect(() => {
    const bowman = new Bowman('gamer', 'Bowman');
    bowman.damage(1200);
    bowman.levelUp();
  }).toThrow('It is impossible to level up the dead character!');
})