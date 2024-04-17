const middleContainer = document.querySelector('.middle-container');

export function createDragUI(ship) {
  const p = document.createElement('p');
  p.textContent = 'Drag your ships to the board';
  const draggableShipsContainer = document.createElement('div');
  draggableShipsContainer.classList.add('draggable-ships-container');
  const draggableShip = document.createElement('div');
  draggableShip.classList.add('draggable-ship');
  draggableShip.setAttribute('draggable', true);
  draggableShip.setAttribute('id', ship.name);
  for (let i = 0; i < ship.length; i += 1) {
    const div = document.createElement('div');
    draggableShip.appendChild(div);
  }
  const shipRotateBtn = document.createElement('button');
  shipRotateBtn.setAttribute('id', 'ship-rotate-btn');
  shipRotateBtn.textContent = 'Rotate';
  middleContainer.appendChild(p);
  middleContainer.appendChild(draggableShipsContainer);
  draggableShipsContainer.appendChild(draggableShip);
  middleContainer.appendChild(shipRotateBtn);
}

export function removeDragUI() {
  while (middleContainer.firstChild) {
    middleContainer.removeChild(middleContainer.lastChild);
  }
}
