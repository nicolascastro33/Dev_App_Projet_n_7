import { recipeTemplates, ingredientsTemplate } from './newTemplate.js';

export function displayDataRecipes(data) {
  const section = document.querySelector('.recipesSection');
  data.forEach((element) => {
    const template = recipeTemplates(element);
    section.appendChild(template);
    ingredientsDisplay(element);
  });
}

function ingredientsDisplay(data) {
  const listWrapper = document
    .querySelector(`#recipe-${data.id}`)
    .querySelector('.ingredientsList');
  data.ingredients.forEach((ingredient) => {
    const template = ingredientsTemplate(ingredient);
    listWrapper.appendChild(template);
  });
}
