import { sortByData } from "../../data/utils/getDataSortBy.js";
import { displayDataRecipes } from "../recipes/display.js";
import { updateData } from "../../data/getNewData/newData.js";
import { displayNumberRecipes } from "./numberRecipes.js";
import { displayNewTags, displayNewTagsNoData } from "./displayNewTags.js";

export function displayNewRecipes(){
    const sortData = sortByData()
    const newData = updateData(sortData)
    const erroMessageWrapper = document.getElementById('errorMessage')
    const section = document.querySelector('.recipesSection')
    erroMessageWrapper.innerHTML = ''
    section.innerHTML = ''
    if(newData.length === 0){
        const input = document.getElementById('mainInput')
        erroMessageWrapper.innerHTML = `Aucune recette ne contient '${input.value}' vous pouvez chercher « tarte aux pommes », « poisson », etc`
        displayNewTagsNoData()
        displayNumberRecipes()

    }else{
        displayDataRecipes(newData)
        displayNewTags(newData)
        displayNumberRecipes()
    }
}