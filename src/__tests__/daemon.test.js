import Daemon from '../js/daemon';
import { test } from '@jest/globals';
import { expect } from '@jest/globals';

test('check Daemon is created', () => {
  const daemon = new Daemon('gamer', 'Daemon');
  expect(daemon).toEqual({
    name: 'gamer',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  })
})

test('check Daemon error name', () => {
  expect(() => {
    new Daemon('g', 'Daemon');
  }).toThrow('Name is not correct!')
})

test('check Daemon error type', () => {
  expect(() => {
    new Daemon('gamer', 'Swordsman');
  }).toThrow('Type is not correct!')
})

test('check Daemon level up', () => {
  const daemon = new Daemon('gamer', 'Daemon');
  daemon.levelUp();

  expect(daemon).toEqual({
    name: 'gamer',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  });
})

test('check Daemon error level up because of damage', () => {
  expect(() => {
    const daemon = new Daemon('gamer', 'Daemon');
    daemon.damage(1200);
    daemon.levelUp();
  }).toThrow('It is impossible to level up the dead character!');
})