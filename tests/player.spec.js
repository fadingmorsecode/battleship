import Player from '../src/logic/player';

describe('test player class', () => {
  test('players should have names', () => {
    const playerName = 'CPU';
    const newPlayer = new Player(playerName);
    expect(newPlayer.name).toEqual(playerName);
  });
  test.skip('player should be able to attack enemy', () => {
    const playerName = 'CPU';
    const newPlayer = new Player(playerName);
  });
});
