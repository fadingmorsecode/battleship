export default class Player {
  constructor(name) {
    this.name = name;
  }

  attack(location, board) {
    return board.receiveAttack(location);
  }

  static getRandomValueNotInArr(allGuesses, possibleGuesses) {
    let randomValue;
    do {
      randomValue =
        possibleGuesses[Math.floor(Math.random() * possibleGuesses.length)];
    } while (allGuesses.includes(randomValue));
    return randomValue;
  }

  computerAttack(board) {
    const { allGuesses } = board;
    const possibleGuesses = board.boardArr;
    const randomVal = Player.getRandomValueNotInArr(
      allGuesses,
      possibleGuesses,
    );
    board.receiveAttack(randomVal);
  }
}
