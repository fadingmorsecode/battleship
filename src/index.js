import './style.css';
import generateDivs from './dom/divgeneration';
import loadStartGameButton from './dom/startgamebutton';

generateDivs('player');
generateDivs('cpu');
loadStartGameButton();
