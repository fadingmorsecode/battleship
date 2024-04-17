export default function loadDynamicText() {
  const middleContainer = document.querySelector('.middle-container');
  const p = document.createElement('p');
  p.classList.add('dynamic-info-text');
  middleContainer.appendChild(p);
}
