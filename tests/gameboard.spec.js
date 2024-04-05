import Gameboard from '../src/logic/gameBoard';
import Ship from '../src/logic/ships';

describe('test gameboard class', () => {
  test('module should exist', () => {
    expect(Gameboard).toBeDefined();
  });
  test('should have a name', () => {
    const boardName = 'CPU';
    const expected = new Gameboard(boardName);
    expect(expected.name).toBe(boardName);
  });
  test('should have a board array', () => {
    const boardName = 'CPU';
    const expected = new Gameboard(boardName);
    const Arr = [
      'A1',
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'A9',
      'A10',
      'B1',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'B8',
      'B9',
      'B10',
      'C1',
      'C2',
      'C3',
      'C4',
      'C5',
      'C6',
      'C7',
      'C8',
      'C9',
      'C10',
      'D1',
      'D2',
      'D3',
      'D4',
      'D5',
      'D6',
      'D7',
      'D8',
      'D9',
      'D10',
      'E1',
      'E2',
      'E3',
      'E4',
      'E5',
      'E6',
      'E7',
      'E8',
      'E9',
      'E10',
      'F1',
      'F2',
      'F3',
      'F4',
      'F5',
      'F6',
      'F7',
      'F8',
      'F9',
      'F10',
      'G1',
      'G2',
      'G3',
      'G4',
      'G5',
      'G6',
      'G7',
      'G8',
      'G9',
      'G10',
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
      'H7',
      'H8',
      'H9',
      'H10',
      'I1',
      'I2',
      'I3',
      'I4',
      'I5',
      'I6',
      'I7',
      'I8',
      'I9',
      'I10',
      'J1',
      'J2',
      'J3',
      'J4',
      'J5',
      'J6',
      'J7',
      'J8',
      'J9',
      'J10',
    ];
    expect(expected.boardArr).toEqual(Arr);
  });
  test('should be able to place a ship at specific coordinates', () => {
    const shipName = 'Carrier';
    const newShip = new Ship(shipName);
    const placement = ['E2', 'E6'];
    const boardName = 'Carrier';
    const expected = new Gameboard(boardName);
    expected.placeShip(newShip, placement);
    expect(newShip.coordinates).toEqual(placement);
  });
  // eslint-disable-next-line jest/no-disabled-tests
  test('should prevent diagonal placement', () => {
    const boardName = 'Player';
    const newBoard = new Gameboard(boardName);
    const shipName = 'Destroyer';
    const newShip = new Ship(shipName);
    const placement = ['H5', 'G6'];
    newBoard.placeShip(newShip, placement);
    expect(newShip.coordinates).toHaveLength(0);
  });
  test('should prevent ships from overlapping', () => {
    const boardName = 'Player';
    const newBoard = new Gameboard(boardName);
    const shipName = 'Cruiser';
    const newShip = new Ship(shipName);
    const placement = ['D3', 'F3'];
    newBoard.placeShip(newShip, placement);
    const shipName2 = 'Carrier';
    const newShip2 = new Ship(shipName2);
    const placement2 = ['E2', 'E6'];
    newBoard.placeShip(newShip2, placement2);
    expect(newShip2.coordinates).toHaveLength(0);
  });
  test('should prevent ships from overlapping when second ship is vertical', () => {
    const boardName = 'Player';
    const newBoard = new Gameboard(boardName);
    const shipName = 'Cruiser';
    const newShip = new Ship(shipName);
    const placement = ['E8', 'E10'];
    newBoard.placeShip(newShip, placement);
    const shipName2 = 'Carrier';
    const newShip2 = new Ship(shipName2);
    const placement2 = ['C9', 'G9'];
    newBoard.placeShip(newShip2, placement2);
    expect(newShip2.coordinates).toHaveLength(0);
  });
});

describe('test receiveAttack function', () => {
  test('should determine that a ship was hit', () => {
    const boardName = 'CPU';
    const newBoard = new Gameboard(boardName);
    const shipName = 'Cruiser';
    const newShip = new Ship(shipName);
    const placement = ['E8', 'E10'];
    newBoard.placeShip(newShip, placement);
    const attack = newBoard.receiveAttack('E9');
    expect(attack).toBeTruthy();
  });
});
