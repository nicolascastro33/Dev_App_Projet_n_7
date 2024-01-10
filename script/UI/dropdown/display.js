import { dropdownTemplates } from './templates.js';

export function displayDataSortBy(data, sortBy) {
  const dropdown = document.querySelector(`.${sortBy}`).querySelector('.sortByDataWrapper');
  data.forEach((element) => {
    const template = dropdownTemplates(element);
    dropdown.appendChild(template);
  });
}
