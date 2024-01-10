import { initDropdown } from "./UI/dropdown/init.js"
import { sortByDataTestAppliance, sortByDataTestIngredients, sortByDataTestUstensils, recipesTest } from "../data/test.js"
import { displayDataSortBy } from "./UI/dropdown/display.js"
import { displayDataRecipes } from "./UI/recipes/display.js"
import { displayNumberRecipes } from "./UI/utils/numberRecipes.js"
import { initButtonClose } from "./UI/sortBy/init.js"

//Partie UI
//Mise en place header Sortby
initButtonClose()

//Mise en place sort by
displayDataSortBy(sortByDataTestIngredients, 'ingredients')
displayDataSortBy(sortByDataTestAppliance, 'appliance')
displayDataSortBy(sortByDataTestUstensils, 'ustensils')
initDropdown()

//Mise en place affichage recette 
displayDataRecipes(recipesTest)

//Mise en place de l'affichage du nombre de recette 
displayNumberRecipes()

