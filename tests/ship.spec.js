import Ship from '../src/logic/ships';

describe('test ship class functionality', () => {
  test('should exist', () => {
    expect(Ship).toBeDefined();
  });
  test('ships class exists', () => {
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    expect(newShip).toBeDefined();
  });
  test('ships are constructed with names', () => {
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    expect(newShip.name).toBe(shipName);
  });
  test('ships should have length property', () => {
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    // eslint-disable-next-line jest/prefer-to-have-length
    expect(newShip.length).toBe(2);
  });
});
