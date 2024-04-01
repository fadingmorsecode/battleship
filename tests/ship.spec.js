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
  test('should have hit amount property', () => {
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    newShip.hit();
    expect(newShip.hits).toBe(1);
  });
  test('should not be sunken with less hits than length', () => {
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    newShip.hit();
    expect(newShip.sunk).toBeFalsy();
  });
  test('should be sunken when hits equal length', () => {
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    newShip.hit();
    newShip.hit();
    expect(newShip.sunk).toBeTruthy();
  });
});
