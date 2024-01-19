import { eraseTag } from '../tags/display.js';

export function searchSortByImageSetting(input, button) {
  const oldButtonClassName = input.value === '' ? 'block' : 'hidden';
  const newButtonClassName = input.value === '' ? 'hidden' : 'block';

  button.classList.remove(oldButtonClassName);
  button.classList.add(newButtonClassName);
}

export function searchSortBySetting(input) {
  const allElements = input
    .closest('.options-container')
    .querySelectorAll('.option');
  allElements.forEach((element) => {
    const name = element.querySelector('label').innerText;
    if (!element.classList.value.includes('notSelected')) {
      if (input.value?.trim() === '') {
        element.classList.remove('hidden');
      } else if (
        name.toLowerCase().includes(input.value.trim().toLowerCase())
      ) {
        element.classList.remove('hidden');
      } else if (
        !name.toLowerCase().includes(input.value.trim().toLowerCase())
      ) {
        element.classList.add('hidden');
      }
    }
  });
}

export function closeButtonDropdownSetting(event, input) {
  event.target.closest('button').classList.remove('block');
  event.target.closest('button').classList.add('hidden');
  input.value = '';
}

export function eraseFavoriteDisplay(option) {
  if (option.classList.contains('selectedOption')) {
    option.classList.remove('selectedOption');
  }
  option.querySelector('button')?.remove();
  eraseTag(option);
}
