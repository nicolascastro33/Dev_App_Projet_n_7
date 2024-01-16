import { initDropdown } from './UI/dropdown/init.js';
import {
  recipes
} from '../data/recipes.js';
import { displayDataSortBy } from './UI/dropdown/display.js';
import { displayDataRecipes } from './UI/recipes/display.js';
import { displayNumberRecipes } from './UI/utils/numberRecipes.js';
import { initButtonClose, sortByHeaderInputSetting } from './UI/headerSortBy/init.js';
import { initTagsSetting } from './UI/tags/init.js';
import { getDataTags } from './data/utils/getTagsData.js';

//Partie UI
//Mise en place header Sortby
sortByHeaderInputSetting();
initButtonClose();

//Mise en place sort by
const {ingredientsTags, ustensilsTags, appliancesTags} = getDataTags(recipes)
displayDataSortBy(ingredientsTags, 'ingredients');
displayDataSortBy(appliancesTags, 'appliance');
displayDataSortBy(ustensilsTags, 'ustensils');
initDropdown();

//Mise en place affichage recette
displayDataRecipes(recipes);

//Mise en place de l'affichage du nombre de recette
displayNumberRecipes();

//Mise en place affichage tags
initTagsSetting();