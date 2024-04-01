import Ship from '../src/logic/ships';

describe('test ship class functionality', () => {
  test('should exist', () => {
    expect(Ship).toBeDefined();
  });
  test('ships class exists', () => {
    const newShip = new Ship('test ship');
    expect(newShip).toBeDefined();
  });
  test('ships are constructed with names', () => {
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    expect(newShip.name).toBe(shipName);
  });
});
