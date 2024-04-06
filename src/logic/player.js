export default class Player {
  constructor(name) {
    this.name = name;
  }

  attack(location, board) {
    board.receiveAttack(location);
  }

  computerAttack(board) {
    board.receiveAttack('D3');
  }
}
