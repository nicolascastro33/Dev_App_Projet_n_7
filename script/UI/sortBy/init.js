import { searchSortByImageSetting, closeButtonDropdownSetting } from "../utils/setting.js";

export function initButtonClose(){
    const input = document.querySelector('input');
    const closeButton = document.querySelector('.mainCloseSortBy')
  
    input.addEventListener('change', () => {
      searchSortByImageSetting(input, closeButton);
    });
  
    closeButton.addEventListener('click', (event) => {
      closeButtonDropdownSetting(event, input);
    });
}