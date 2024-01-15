import {
  searchSortByImageSetting,
  closeButtonDropdownSetting,
  favoriteButtonSetting,
  unfavoriteButtonSetting,
  searchSortBySetting,
} from '../utils/setting.js';

export function initDropdown() {
  const selected = document.querySelectorAll('.selected');
  const optionsList = document.querySelectorAll('.option');
  const closeButtonDropdown = document.querySelectorAll('.closeButtonDropdown');
  const searchSortBy = document.querySelectorAll('.searchSortby');


  searchSortBy.forEach((input) => {
    input.addEventListener('change', () => {
      const eraseButton = input
        .closest('.select-box')
        .querySelector('.closeButtonDropdown');
      searchSortByImageSetting(input, eraseButton);
      searchSortBySetting(input);
    });
  });

  closeButtonDropdown.forEach((closeButton) => {
    closeButton.addEventListener('click', (event) => {
      const input = event.target
        .closest('.options-container')
        .querySelector('input');
      closeButtonDropdownSetting(event, input);
      searchSortBySetting(input);
    });
  });

  selected.forEach((element) => {
    element.addEventListener('click', () => {
      element.closest('.select-box').classList.toggle('open');
    });
  });

  optionsList.forEach((option) => {
    option.addEventListener('click', (event) => {
      favoriteButtonSetting(event, option);
      unfavoriteButtonSetting(option);
    });
  });
}
