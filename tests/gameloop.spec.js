import createPlayer from '../src/logic/loop/createPlayer';
import createBoard from '../src/logic/loop/createBoard';
import startGame from '../src/logic/loop/gameloop';
import Gameboard from '../src/logic/gameBoard';
import placeAllShips from '../src/logic/loop/placeAllShips';

jest.mock('../src/logic/loop/createPlayer', () => jest.fn());
jest.mock('../src/logic/loop/createBoard');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('test creation of player and board objects', () => {
  test('startGame calls createPlayer', () => {
    startGame();
    expect(createPlayer).toHaveBeenCalled();
  });
  test('startGame calls createPlayer twice', () => {
    startGame();
    expect(createPlayer).toHaveBeenCalledTimes(2);
  });
  test('startGame calls createBoard', () => {
    startGame();
    expect(createBoard).toHaveBeenCalled();
  });
  test('startGame calls createBoard twice', () => {
    startGame();
    expect(createBoard).toHaveBeenCalledTimes(2);
  });
});

describe('test placement of ships', () => {
  test('should place ships on player board', () => {
    const playerName = 'PlayerOne';
    const playerBoard = new Gameboard(playerName);
    placeAllShips(playerBoard, playerName);
    const expected = [
      {
        name: 'Carrier',
        length: 5,
        hits: 0,
        sunk: false,
        coordinates: ['A5', 'E5'],
      },
      {
        name: 'Destroyer',
        length: 2,
        hits: 0,
        sunk: false,
        coordinates: ['C2', 'D2'],
      },
      {
        name: 'Battleship',
        length: 4,
        hits: 0,
        sunk: false,
        coordinates: ['G1', 'G4'],
      },
      {
        name: 'Submarine',
        length: 3,
        hits: 0,
        sunk: false,
        coordinates: ['G6', 'I6'],
      },
      {
        name: 'Cruiser',
        length: 3,
        hits: 0,
        sunk: false,
        coordinates: ['E8', 'E10'],
      },
    ];
    expect(playerBoard.placedShips).toEqual(expected);
  });
  test('should place ships on computer board', () => {
    const computerName = 'CPU';
    const computerBoard = new Gameboard(computerName);
    placeAllShips(computerBoard, computerName);
    const expected = [
      {
        name: 'Carrier',
        length: 5,
        hits: 0,
        sunk: false,
        coordinates: ['F8', 'J8'],
      },
      {
        name: 'Destroyer',
        length: 2,
        hits: 0,
        sunk: false,
        coordinates: ['H2', 'I2'],
      },
      {
        name: 'Battleship',
        length: 4,
        hits: 0,
        sunk: false,
        coordinates: ['B7', 'B10'],
      },
      {
        name: 'Submarine',
        length: 3,
        hits: 0,
        sunk: false,
        coordinates: ['F3', 'F5'],
      },
      {
        name: 'Cruiser',
        length: 3,
        hits: 0,
        sunk: false,
        coordinates: ['H5', 'J5'],
      },
    ];
    expect(computerBoard.placedShips).toEqual(expected);
  });
});
