import { getDataTags } from '../../data/utils/getTagsData.js';

export function displayNewTags(recipes) {
  const { ingredientsTags, ustensilsTags, appliancesTags } =
    getDataTags(recipes);
  changeDisplayTag(ingredientsTags, 'ingredient');
  changeDisplayTag(ustensilsTags, 'ustensil');
  changeDisplayTag(appliancesTags, 'appliance');
}

export function displayNewTagsNoData(){
    const allOptions = document.querySelectorAll('.option')
    allOptions.forEach((option) => {
        if(!option.className.includes('selectedOption')){
            option.classList.add('hidden');
        }
    })
}

function changeDisplayTag(tagData, option) {
  const allElements = document
    .querySelector(`#${option}`)
    .querySelector('.options-container')
    .querySelectorAll('.option');
  allElements.forEach((element) => {
    let isInclude = false;
    const name = element.querySelector('label').innerText;
    tagData.forEach((tag) => {
      if (name === tag) {
        isInclude = true;
      }
    });
    if (isInclude) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
}
