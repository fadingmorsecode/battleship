import Gameboard from '../src/logic/gameBoard';

describe('test gameboard class', () => {
  test('module should exist', () => {
    expect(Gameboard).toBeDefined();
  });
  test('should have a name', () => {
    const boardName = 'CPU';
    const expected = new Gameboard(boardName);
    expect(expected.name).toBe(boardName);
  });
});
