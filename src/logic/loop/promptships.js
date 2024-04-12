import loadInput from './createinput';
import removeInput from './removeinput';
import setLabel from './setlabel';
import setPlaceholder from './setplaceholder';

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

export function ask(ship, condition, iteration) {
  return new Promise((resolve, reject) => {
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

async function getShipInput(validate, ship, length) {
  return new Promise((resolve, reject) => {
    const valArr = [];
    ask(ship, coordConditions(ship), 'Enter first coordinate').then((val) => {
      valArr.push(val);
    });
    ask(ship, coordConditions(ship), 'Enter second coordinate').then((val) => {
      valArr.push(val);
    });
  });
}

async function getCarrier() {}
async function getDestroyer() {}
async function getBattleship() {}
async function getSubmarine() {}
async function getCruiser() {}

async function getPlayerInputs() {
  const getCarrierResult = await getCarrier();

  const getDestroyerResult = await getDestroyer();

  const getBattleshipResult = await getBattleShip();

  const getSubmarineResult = await getSubmarine();

  const getCruiserResult = await getCruiser();
}
