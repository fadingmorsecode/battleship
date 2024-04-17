import Ship from '../ships';
import renderPlayerShips from '../../dom/renderplayerships';
import loadRotationListener from './rotation';

const dragableElement = document.querySelector('.draggable-ship');

dragableElement.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', dragableElement.id);
  console.log(e);
});

function getDrop() {
  return new Promise((resolve) => {
    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach((dropZone) => {
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        // eventually highlight cell
        // probably also need to use dragleave
      });

      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const droppedElementId = e.dataTransfer.getData('text/plain');
        const droppedElement = document.getElementById(droppedElementId);
        const dropZoneCoordinate = dropZone.getAttribute('coordinate');
        resolve(dropZoneCoordinate);
      });
    });
  });
}

function getShip(board, ship) {
  return new Promise(async (resolve) => {
    async function tryPlacement(location) {
      if (!location) {
        location = await getDrop();
      }

      // call a func to get second coord;
      const coords = [location, location + (ship.length - 1)];

      const tryPlacementResult = await board.placeShip(ship, coords, board);

      if (tryPlacementResult) {
        resolve();
      } else {
        console.log('nope');
        await tryPlacement(await getDrop()); // retrying
      }
    }
    await tryPlacement();
  });
}

export default async function getPlayerInputs(board) {
  loadRotationListener();

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
