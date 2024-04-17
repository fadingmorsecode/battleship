export default function loadRotationListener() {
  const rotationBtn = document.getElementById('ship-rotate-btn');
  const draggableShip = document.querySelector('.draggable-ship');
  rotationBtn.addEventListener('click', () => {
    // rotate the ship div
    draggableShip.classList.toggle('column');
  });
}
