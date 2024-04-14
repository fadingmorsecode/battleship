import loadInput from './createinput';
import removeInput from './removeinput';
import setLabel from './setlabel';
import setPlaceholder from './setplaceholder';
import Ship from '../ships';
import renderPlayerShips from '../../dom/renderplayerships';
import showError from './showerror';

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

function ask(ship, condition, iteration, retried) {
  return new Promise((resolve) => {
    loadInput(iteration);
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('input');
      resolve(input.value);
    });
    setPlaceholder(condition);
    setLabel(ship);
    if (retried === true) {
      showError();
    }
  });
}

function getCoordInputs(ship, retried) {
  return new Promise((resolve) => {
    const valArr = [];
    async function askForCoordinates() {
      await ask(
        ship,
        coordConditions(ship),
        'Enter first coordinate',
        retried,
      ).then((val) => {
        valArr.push(val);
      });
      removeInput();
      await ask(ship, coordConditions(ship), 'Enter second coordinate').then(
        (val) => {
          valArr.push(val);
          resolve(valArr);
        },
      );
      removeInput();
    }
    askForCoordinates();
  });
}

// function getShip(board, ship) {
//   return new Promise((resolve) => {
//     async function placeOnBoard() {
//       await getCoordInputs(ship.name).then((location) => {
//         const tryPlacement = board.placeShip(ship, location);
//         if (tryPlacement === true) {
//           resolve();
//         } else {
//           console.log('Placement not successful');
//           placeOnBoard(); // Try again
//         }
//       });
//     }
//     placeOnBoard();
//   });
// }

function getShip(board, ship) {
  return new Promise(async (resolve) => {
    async function tryPlacement(location) {
      let retried;
      if (!location) {
        retried = false;
        location = await getCoordInputs(ship.name, retried);
      }

      const tryPlacementResult = await board.placeShip(ship, location);

      if (tryPlacementResult) {
        resolve();
      } else {
        retried = true;
        await tryPlacement(await getCoordInputs(ship.name, retried)); // retrying
      }
    }
    await tryPlacement();
  });
}

export default async function getPlayerInputs(board) {
  const ShipObj = [
    new Ship('Carrier'),
    new Ship('Destroyer'),
    new Ship('Battleship'),
    new Ship('Submarine'),
    new Ship('Cruiser'),
  ];

  const getCarrierResult = await getShip(board, ShipObj[0]);
  renderPlayerShips(board);
  const getDestroyerResult = await getShip(board, ShipObj[1]);
  renderPlayerShips(board);
  const getBattleshipResult = await getShip(board, ShipObj[2]);
  renderPlayerShips(board);
  const getSubmarineResult = await getShip(board, ShipObj[3]);
  renderPlayerShips(board);
  const getCruiserResult = await getShip(board, ShipObj[4]);
  renderPlayerShips(board);
}
