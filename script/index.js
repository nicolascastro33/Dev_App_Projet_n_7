import { initDropdown } from './UI/dropdown/init.js';
import {
  sortByDataTestAppliance,
  sortByDataTestIngredients,
  sortByDataTestUstensils,
  recipesTest,
} from '../data/recipes_test.js';
import { displayDataSortBy } from './UI/dropdown/display.js';
import { displayDataRecipes } from './UI/recipes/display.js';
import { displayNumberRecipes } from './UI/utils/numberRecipes.js';
import { initButtonClose } from './UI/headerSortBy/init.js';
import { initTagsSetting } from './UI/tags/init.js';
import { getNewData } from './data/newData.js';


//Partie data
getNewData(recipesTest)
//Partie UI
//Mise en place header Sortby
initButtonClose();

//Mise en place sort by
displayDataSortBy(sortByDataTestIngredients, 'ingredients');
displayDataSortBy(sortByDataTestAppliance, 'appliance');
displayDataSortBy(sortByDataTestUstensils, 'ustensils');
initDropdown();

//Mise en place affichage recette
displayDataRecipes(recipesTest);

//Mise en place de l'affichage du nombre de recette
displayNumberRecipes();

//Mise en place affichage tags
initTagsSetting();

