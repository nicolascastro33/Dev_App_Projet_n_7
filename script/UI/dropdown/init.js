import { displayTag } from '../tags/display.js';
import {
  searchSortByImageSetting,
  closeButtonDropdownSetting,
  searchSortBySetting,
  eraseFavoriteDisplay,
} from '../utils/setting.js';

export function initDropdown(displayNewRecipes, displayTag) {
  // Configuration des barres de recherche des dropdowns
  configSearchBarDropdown();

  // Configuration du bouton d'effacement de la barre de recherche de chaque dropdown
  configEraseButtonSearchBarDropdown();

  // Configuration des dropdown pour l'ouvrir et le fermer
  openingDropdown();

  // Configuration des différentes options lors du clic d'un filtre
  configFilter(displayNewRecipes, displayTag);
}

function configSearchBarDropdown() {
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
}

function configEraseButtonSearchBarDropdown() {
  const closeButtonDropdown = document.querySelectorAll('.closeButtonDropdown');
  closeButtonDropdown.forEach((closeButton) => {
    closeButton.addEventListener('click', (event) => {
      const input = event.target
        .closest('.options-container')
        .querySelector('input');
      closeButtonDropdownSetting(event, input);
      searchSortBySetting(input);
    });
  });
}

function openingDropdown() {
  const selected = document.querySelectorAll('.selected');

  selected.forEach((element) => {
    element.addEventListener('click', () => {
      element.closest('.select-box').classList.toggle('open');
    });
  });
}

function configFilter(displayNewRecipes, displayTag) {
  const optionsList = document.querySelectorAll('.option');

  optionsList.forEach((option) => {
    option.addEventListener('click', (event) => {
      favoriteButtonSetting(event, option, displayTag);
      unfavoriteButtonSetting(option, displayNewRecipes);
      displayNewRecipes();
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

function unfavoriteButtonSetting(option, displayNewRecipes) {
  option.querySelector('button')?.addEventListener('click', () => {
    eraseFavoriteDisplay(option);
    displayNewRecipes();
  });
}