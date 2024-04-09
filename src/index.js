import css from './style.css';
import generateDivs from './dom/divgeneration';
import renderPlayerShips from './dom/renderplayerships';
import startGame from './logic/loop/gameloop';

generateDivs('player');
generateDivs('cpu');
startGame();
