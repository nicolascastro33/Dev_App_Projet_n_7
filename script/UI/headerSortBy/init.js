import {
  searchSortByImageSetting,
  closeButtonDropdownSetting,
} from '../utils/setting.js';
import { displayNewRecipes } from '../displayNewData/displayNewRecipes.js';

export function initButtonClose() {
  const input = document.querySelector('input');
  const closeButton = document.querySelector('.mainCloseSortBy');

  input.addEventListener('input', () => {
    searchSortByImageSetting(input, closeButton);
  });

  closeButton.addEventListener('click', (event) => {
    closeButtonDropdownSetting(event, input);
    displayNewRecipes();
  });
}

export function sortByHeaderInputSetting() {
  const mainInput = document.getElementById('mainInput');
  mainInput.addEventListener('input', () => {
    if (mainInput.value.length >= 3 || mainInput.value.length === 0) {
      displayNewRecipes();
    }
  });
}
