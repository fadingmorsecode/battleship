import loadInput from './createinput';
import removeInput from './removeinput';
import setLabel from './setlabel';
import setPlaceholder from './setplaceholder';
import Ship from '../ships';
import renderPlayerShips from '../../dom/renderplayerships';

function coordConditions(ship) {
  switch (ship) {
    case 'Destroyer':
      return 'Length of 2 cells';
    case 'Submarine':
      return 'Length of 3 cells';
    case 'Cruiser':
      return 'Length of 3 cells';
    case 'Battleship':
      return 'Length of 4 cells';
    case 'Carrier':
      return 'Length of 5 cells';
    default:
      throw Error('coord conditions not given valid ship name');
  }
}

function ask(ship, condition, iteration) {
  return new Promise((resolve) => {
    loadInput(iteration);
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    setPlaceholder(condition);
    setLabel(ship);
    form.addEventListener('submit', () => {
      const input = document.querySelector('input');
      resolve(input.value);
    });
  });
}

function getCoordInputs(ship) {
  return new Promise((resolve) => {
    const valArr = [];
    async function askForCoordinates() {
      await ask(ship, coordConditions(ship), 'Enter first coordinate').then(
        (val) => {
          valArr.push(val);
          removeInput();
        },
      );
      await ask(ship, coordConditions(ship), 'Enter second coordinate').then(
        (val) => {
          loadInput();
          valArr.push(val);
          removeInput();
          resolve(valArr);
        },
      );
    }
    askForCoordinates();
  });
}

function getCarrier(board, ship) {
  return new Promise((resolve) => {
    async function placeCarrier() {
      await getCoordInputs('Carrier').then((location) => {
        const tryPlacement = board.placeShip(ship, location);
        if (tryPlacement === true) {
          console.log(tryPlacement);
          console.log('should succeed');
          resolve();
          return;
        }
        console.log('Placement not successful');
        placeCarrier();
      });
    }
    placeCarrier();
  });
}

// async function getDestroyer() {}
// async function getBattleship() {}
// async function getSubmarine() {}
// async function getCruiser() {}

export default async function getPlayerInputs(board) {
  const ShipObj = [
    new Ship('Carrier'),
    new Ship('Destroyer'),
    new Ship('Battleship'),
    new Ship('Submarine'),
    new Ship('Cruiser'),
  ];

  const getCarrierResult = await getCarrier(board, ShipObj[0]);
  renderPlayerShips(board);
  console.log(board);
  // const getDestroyerResult = await getDestroyer();

  // const getBattleshipResult = await getBattleShip();

  // const getSubmarineResult = await getSubmarine();

  // const getCruiserResult = await getCruiser();
}
