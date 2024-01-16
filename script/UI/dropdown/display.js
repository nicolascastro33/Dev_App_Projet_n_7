import { dropdownTemplates } from './template.js';

export function displayDataSortBy(data, sortBy) {
  const dropdown = document.querySelector(`.${sortBy}`).querySelector('.sortByDataWrapper');
  data.forEach((element) => {
    const template = dropdownTemplates(element,sortBy);
    dropdown.appendChild(template);    
  });
}
