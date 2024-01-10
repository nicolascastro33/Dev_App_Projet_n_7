import {
  searchSortByImageSetting,
  closeButtonDropdownSetting,
  favoriteButtonSetting,
  unfavoriteButtonSetting,
  searchSortBySetting,
} from './setting.js';

export function initDropdown() {
  const selected = document.querySelectorAll('.selected');
  const optionsList = document.querySelectorAll('.option');
  const closeButtonDropdown = document.querySelectorAll('.closeButtonDropdown');
  const searchSortBy = document.querySelectorAll('.searchSortby');

  searchSortBy.forEach((input) => {
    input.addEventListener('change', () => {
      searchSortByImageSetting(input);
      searchSortBySetting(input);
    });
  });

  closeButtonDropdown.forEach((closeButton) => {
    closeButton.addEventListener('click', (event) => {
      const input = event.target.closest('.options-container').querySelector('input')
      closeButtonDropdownSetting(event);
      searchSortBySetting(input)
    });
  });

  selected.forEach((element) => {
    element.addEventListener('click', () => {
  
    console.log(element.closest('.select-box'))
    element.closest('.select-box').classList.toggle('open');
  });
  })

  optionsList.forEach((option) => {
    option.addEventListener('click', (event) => {
      favoriteButtonSetting(event, option);
      unfavoriteButtonSetting(option);
    });
  });
}
