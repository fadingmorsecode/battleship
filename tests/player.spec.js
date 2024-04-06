import Player from '../src/logic/player';
import Gameboard from '../src/logic/gameBoard';
import Ship from '../src/logic/ships';

function removeValFromArr(val, arr) {
  const arrCopy = Array.from(arr);
  const index = arrCopy.indexOf(val);
  arrCopy.splice(index, 1);
  return arrCopy;
}

describe('test player class', () => {
  test('players should have names', () => {
    const playerName = 'CPU';
    const newPlayer = new Player(playerName);
    expect(newPlayer.name).toEqual(playerName);
  });
  test('player should be able to attack enemy', () => {
    const playerName = 'Player 1';
    const newPlayer = new Player(playerName);
    const computerName = 'CPU';
    const computerGameboard = new Gameboard(computerName);
    const shipName = 'Cruiser';
    const newShip = new Ship(shipName);
    const placement = ['D2', 'D4'];
    computerGameboard.placeShip(newShip, placement);
    const guess = 'D3';
    newPlayer.attack(guess, computerGameboard);
    expect(computerGameboard.hitShots).toEqual(['D3']);
  });
  test('should work with multiple attacks', () => {
    const playerName = 'Player 1';
    const newPlayer = new Player(playerName);
    const computerName = 'CPU';
    const computerGameboard = new Gameboard(computerName);
    const shipName = 'Cruiser';
    const newShip = new Ship(shipName);
    const placement = ['D2', 'D4'];
    computerGameboard.placeShip(newShip, placement);
    const guess = 'D3';
    newPlayer.attack(guess, computerGameboard);
    const guess2 = 'D2';
    newPlayer.attack(guess2, computerGameboard);
    expect(computerGameboard.hitShots).toEqual(['D3', 'D2']);
  });
  test('computer should attack at random', () => {
    const playerName = 'Player 1';
    const newPlayer = new Player(playerName);
    const playerGameboard = new Gameboard(playerName);
    const computerName = 'CPU';
    const newCPU = new Player(computerName);
    const computerGameboard = new Gameboard(computerName);
    const shipName = 'Cruiser';
    const newShip = new Ship(shipName);
    const placement = ['D2', 'D4'];
    playerGameboard.placeShip(newShip, placement);
    const guesses = removeValFromArr('D3', playerGameboard.boardArr);
    // leave only one guess for the computer to randomly but possibly choose.
    playerGameboard.allGuesses = guesses;
    newCPU.computerAttack(playerGameboard);
    expect(playerGameboard.hitShots).toEqual(['D3']);
  });
});
