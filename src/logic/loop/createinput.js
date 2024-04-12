export default function loadInput() {
  const header = document.querySelector('header');
  const form = document.createElement('form');
  const label = document.createElement('label');
  label.setAttribute('for', 'ship-input');
  const input = document.createElement('input');
  input.setAttribute('id', 'ship-input');
  input.setAttribute('type', 'text');

  // temporarily set name of label

  label.textContent = 'Carrier';

  //

  header.appendChild(form);
  form.appendChild(label);
  form.appendChild(input);
}
