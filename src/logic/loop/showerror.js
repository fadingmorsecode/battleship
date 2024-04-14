export default function showError() {
  const form = document.querySelector('form');
  const p = document.createElement('p');
  p.classList.add('error-text');
  p.textContent = 'Not a valid placement';
  form.appendChild(p);
}
