import startGame from '../logic/loop/startgame';

export default function loadStartGameButton() {
  const middleContainer = document.querySelector('.middle-container');
  const btn = document.createElement('button');
  btn.textContent = 'Start Game';
  btn.classList.add('start-game-btn');
  middleContainer.appendChild(btn);
}

function removeStartGameButton() {
  const btn = document.querySelector('.start-game-btn');
  btn.remove();
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.start-game-btn')) {
    removeStartGameButton();
    startGame();
  }
});
