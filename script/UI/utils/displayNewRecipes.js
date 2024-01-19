import { sortByData } from '../../UI/utils/getDataSortBy.js';
import { displayDataRecipes } from '../recipes/display.js';
import { runSearch } from '../../data/searchEngine.js';
import { runSearch2 } from '../../data/searchEngine2.js';
import { displayNumberRecipes } from './numberRecipes.js';
import { displayNewTags, displayNewTagsNoData } from './displayNewTags.js';

export function displayNewRecipes() {
  const sortData = sortByData();
  const newData = runSearch(sortData);
  const newData2 = runSearch2(sortData)

  // const erroMessageWrapper = document.getElementById('errorMessage');
  // const section = document.querySelector('.recipesSection');
  // erroMessageWrapper.innerHTML = '';
  // section.innerHTML = '';
  // if (newData.length === 0) {
  //   const input = document.getElementById('mainInput');
  //   erroMessageWrapper.innerHTML = `Aucune recette ne contient '${input.value}' vous pouvez chercher « tarte aux pommes », « poisson », etc`;
  //   displayNewTagsNoData();
  //   displayNumberRecipes();
  // } else {
  //   displayDataRecipes(newData);
  //   displayNewTags(newData);
  //   displayNumberRecipes();
  // }
}

// Amélioration à voir : algo1 ne fonctionnent pas correctement au niveau des appareils et algo2 ne fonctionnent pas correctement au niveau des ustensils
// voir aussi ui pour le mot casserole qui se retrouvent dans appareils et ustensiles
