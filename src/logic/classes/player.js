export default class Player {
  constructor(name) {
    this.name = name;
  }

  static attack(location, board) {
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

  static computerAttack(board) {
    const { allGuesses } = board;
    const possibleGuesses = board.boardArr;
    const randomVal = Player.getRandomValueNotInArr(
      allGuesses,
      possibleGuesses,
    );
    const compReturn = board.receiveAttack(randomVal);
    const returnVals = {
      successful: compReturn,
      coordinate: randomVal,
    };
    return returnVals;
  }
}
