import Ship from '../ships';
import renderPlayerShips from '../../dom/renderplayerships';

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
