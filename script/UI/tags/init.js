import { eraseFavoriteDisplay, eraseTag } from '../utils/setting.js';
import { getTypeTags } from '../utils/typeTags.js';

export function initTagsSetting(displayNewRecipes) {
  const tagsSection = document.querySelector('.tagsSection');
  tagsSection.addEventListener('click', (event) => {
    if (event.target.tagName === 'SECTION') {
      return;
    }
    const elementType = event.target.localName;
    const option = event.target.closest('div').querySelector('p');
    const typeTag = getTypeTags(event.target.closest('div'));
    const optionDropdown = document.getElementById(
      `option-${typeTag}-${option.textContent.split(' ').join('').trim()}`
    );
    if (elementType === 'img' || elementType === 'button') {
      eraseTag(option);
      eraseFavoriteDisplay(optionDropdown);
      displayNewRecipes();
    }
  });
}