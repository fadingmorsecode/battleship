import Ship from '../classes/ships';
import renderPlayerShips from '../../dom/renderplayerships';
import loadRotationListener from '../../dom/rotation';
import { createDragUI, removeDragUI } from '../../dom/draggableships';

function getDrop() {
  return new Promise((resolve) => {
    loadRotationListener();

    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach((dropZone) => {
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const dropZoneCoordinate = dropZone.getAttribute('coordinate');
        resolve(dropZoneCoordinate);
      });
    });
  });
}

function getFullCoords(location, ship) {
  const draggableElement = document.querySelector('.draggable-ship');
  const result = [];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  // get rotation of ship
  const rotation = draggableElement.classList.contains('column');
  const x = location.charAt(0);
  const y = parseInt(location.substring(1), 10);
  if (rotation !== true) {
    // if rotation is horizontal
    const secondY = y + ship.length - 1;
    if (secondY > 10) {
      return 'invalid';
    }
    result.push(`${location}`, `${x}${secondY}`);
    return result;
  }
  // if rotation is vertical
  const index = letters.indexOf(x);
  const newIndex = index + ship.length - 1;
  if (newIndex > 9) {
    return 'invalid';
  }
  const secondX = letters[newIndex];
  result.push(`${location}`, `${secondX}${y}`);
  return result;
}

function getShip(board, ship) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    createDragUI(ship);
    async function tryPlacement(location) {
      let dropLocation = location;

      if (!dropLocation) {
        dropLocation = await getDrop();
      }

      const coords = getFullCoords(dropLocation, ship);

      let tryPlacementResult;

      if (coords !== 'invalid') {
        tryPlacementResult = await board.placeShip(ship, coords, board);
      }

      if (tryPlacementResult) {
        removeDragUI();
        resolve();
      } else {
        await tryPlacement(await getDrop()); // retrying
      }
    }
    await tryPlacement();
  });
}

// refactor the below!!!
export default async function getPlayerInputs(board) {
  const ShipObj = [
    new Ship('Carrier'),
    new Ship('Destroyer'),
    new Ship('Battleship'),
    new Ship('Submarine'),
    new Ship('Cruiser'),
  ];
  await getShip(board, ShipObj[0]);
  renderPlayerShips(board);
  await getShip(board, ShipObj[1]);
  renderPlayerShips(board);
  await getShip(board, ShipObj[2]);
  renderPlayerShips(board);
  await getShip(board, ShipObj[3]);
  renderPlayerShips(board);
  await getShip(board, ShipObj[4]);
  console.log(board);
  renderPlayerShips(board);
}
