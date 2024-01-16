import { displayTag } from '../tags/display.js';
import { displayNewRecipes } from '../utils/displayNewRecipes.js';
import {
  searchSortByImageSetting,
  closeButtonDropdownSetting,
  searchSortBySetting,
  eraseFavoriteDisplay,
} from '../utils/setting.js';

export function initDropdown() {
  const selected = document.querySelectorAll('.selected');
  const optionsList = document.querySelectorAll('.option');
  const closeButtonDropdown = document.querySelectorAll('.closeButtonDropdown');
  const searchSortBy = document.querySelectorAll('.searchSortby');


  searchSortBy.forEach((input) => {
    input.addEventListener('input', () => {
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
      displayNewRecipes()
    });
  });
}


function favoriteButtonSetting(event, option) {
  if (
    event.target.id === 'unfavoriteButton' ||
    event.target.id === 'unfavoriteImg'
  ) {
    return;
  }
  option.classList.add('selectedOption');
  if (!option.querySelector('button')) {
    const unfavoriteButton = document.createElement('button');
    const unfavoriteImg = document.createElement('img');
    unfavoriteImg.src = '/assets/logo/whiteClose.png';
    unfavoriteImg.alt = 'sortir des favoris';
    unfavoriteButton.type = 'button';
    unfavoriteButton.id = 'unfavoriteButton';
    unfavoriteImg.id = 'unfavoriteImg';
    unfavoriteButton.appendChild(unfavoriteImg);
    option.appendChild(unfavoriteButton);
    displayTag(option);
  }
}

function unfavoriteButtonSetting(option) {
  option.querySelector('button')?.addEventListener('click', () => {
    eraseFavoriteDisplay(option);
    displayNewRecipes()
  });
}
