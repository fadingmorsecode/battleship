export default function loadInput(iteration) {
  const header = document.querySelector('header');
  const form = document.createElement('form');
  const inputGroup = document.createElement('div');
  inputGroup.classList.add('input-group');
  const iterationContainer = document.createElement('div');
  const label = document.createElement('label');
  label.setAttribute('for', 'ship-input');
  label.setAttribute('id', 'ship-input-label');
  const input = document.createElement('input');
  input.setAttribute('id', 'ship-input');
  input.setAttribute('type', 'text');
  const p = document.createElement('p');
  p.textContent = iteration;
  p.setAttribute('id', 'iteration-text');

  header.appendChild(form);
  form.appendChild(inputGroup);
  form.appendChild(iterationContainer);
  inputGroup.appendChild(label);
  inputGroup.appendChild(input);
  iterationContainer.appendChild(p);
}
