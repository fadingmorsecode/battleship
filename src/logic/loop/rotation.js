const rotationBtn = document.getElementById('ship-rotate-btn');
const draggableShip = document.querySelector('.draggable-ship');

export default function loadRotationListener() {
  rotationBtn.addEventListener('click', () => {
    // rotate the ship div
    draggableShip.classList.toggle('column');
  });
}
