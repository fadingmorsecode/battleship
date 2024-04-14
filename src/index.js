import css from './style.css';
import generateDivs from './dom/divgeneration';
import loadStartGameButton from './logic/loop/startgamebutton';

generateDivs('player');
generateDivs('cpu');
loadStartGameButton();
