import { initDropdown } from './UI/dropdown/init.js';
import {
  recipesTest,
} from '../data/recipes_test.js';
import { displayDataSortBy } from './UI/dropdown/display.js';
import { displayDataRecipes } from './UI/recipes/display.js';
import { displayNumberRecipes } from './UI/utils/numberRecipes.js';
import { initButtonClose } from './UI/headerSortBy/init.js';
import { initTagsSetting } from './UI/tags/init.js';
// import { getNewData } from './data/newData.js';
import { getDataTags } from './data/utils/getTagsData.js';


//Partie data
// getNewData(recipesTest)

//Partie UI
//Mise en place header Sortby
initButtonClose();

//Mise en place sort by
const {ingredientsTags, ustensilsTags, appliancesTags} = getDataTags(recipesTest)
displayDataSortBy(ingredientsTags, 'ingredients');
displayDataSortBy(appliancesTags, 'appliance');
displayDataSortBy(ustensilsTags, 'ustensils');
initDropdown();

//Mise en place affichage recette
displayDataRecipes(recipesTest);

//Mise en place de l'affichage du nombre de recette
displayNumberRecipes();

//Mise en place affichage tags
initTagsSetting();

