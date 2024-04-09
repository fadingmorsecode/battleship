const playerBoard = document.querySelector('.player-board');
const computerBoard = document.querySelector('.computer-board');

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export default function generateDivs(boardName) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('coordinate', `${letters[i]}${j}`);
      newDiv.setAttribute('boardName', boardName);
      if (boardName === 'player') {
        playerBoard.appendChild(newDiv);
      } else {
        computerBoard.appendChild(newDiv);
      }
    }
  }
}
