import { sortByData } from '../utils/getDataSortBy.js';
import { displayDataRecipes } from '../recipes/display.js';
import { runSearch } from '../../data/searchEngine.js';
import { displayNumberRecipes } from '../utils/numberRecipes.js';
import {
  displayNewTags,
  displayNewTagsNoData,
} from './displayNewTags.js';

export function displayNewRecipes() {
  const filterData = sortByData();
  const newData = runSearch(filterData);
  // console.log(newData.length === newData2.length);

  // On efface toutes les recettes ou message d'erreur sur l'interface
  const erroMessageWrapper = document.getElementById('errorMessage');
  const section = document.querySelector('.recipesSection');
  erroMessageWrapper.innerHTML = '';
  section.innerHTML = '';

  if (newData.length === 0) {
    const input = document.getElementById('mainInput');
    erroMessageWrapper.innerHTML = `Aucune recette ne contient '${input.value}' vous pouvez chercher « tarte aux pommes », « poisson », etc`;
    displayNewTagsNoData();
    displayNumberRecipes();
  } else {
    displayDataRecipes(newData);
    displayNewTags(newData);
    displayNumberRecipes();
  }
}
