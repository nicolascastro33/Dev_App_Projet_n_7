import { initDropdown } from "./UI/dropdown/init.js"
import { sortByDataTestAppliance, sortByDataTestIngredients, sortByDataTestUstensils } from "../data/test.js"
import { displayDataSortBy } from "./UI/dropdown/display.js"

displayDataSortBy(sortByDataTestIngredients, 'ingredients')
displayDataSortBy(sortByDataTestAppliance, 'appliance')
displayDataSortBy(sortByDataTestUstensils, 'ustensils')
initDropdown()
