import startGame from './gameloop';

export default function loadStartGameButton() {
  const header = document.querySelector('header');
  const btn = document.createElement('button');
  btn.textContent = 'Start Game';
  btn.classList.add('start-game-btn');
  header.appendChild(btn);
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
