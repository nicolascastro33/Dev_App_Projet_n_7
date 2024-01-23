import { initDropdown } from './UI/dropdown/init.js';
import { recipes } from '../data/recipes.js';
import { displayDataSortBy } from './UI/dropdown/display.js';
import { displayDataRecipes } from './UI/recipes/display.js';
import { displayNumberRecipes } from './UI/utils/numberRecipes.js';
import {
  initButtonClose,
  sortByHeaderInputSetting,
} from './UI/headerSortBy/init.js';
import { initTagsSetting } from './UI/tags/init.js';
import { getDataTags } from './UI/utils/getTagsData.js';
import { displayNewRecipes } from './UI/displayNewData/displayNewRecipes.js';
import { displayTag } from './UI/tags/display.js';

//Partie UI
//Mise en place affichage recette
displayDataRecipes(recipes);

//Mise en place header Sortby
sortByHeaderInputSetting();
initButtonClose(displayNewRecipes);

//Mise en place sort by
const { ingredientsTags, ustensilsTags, appliancesTags } = getDataTags(recipes);
displayDataSortBy(ingredientsTags, 'ingredients');
displayDataSortBy(appliancesTags, 'appliance');
displayDataSortBy(ustensilsTags, 'ustensils');
initDropdown(displayNewRecipes, displayTag);

//Mise en place de l'affichage du nombre de recette
displayNumberRecipes();

//Mise en place affichage tags
initTagsSetting(displayNewRecipes);
