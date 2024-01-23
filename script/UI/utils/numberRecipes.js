export function displayNumberRecipes(){
    const numberRecipesWrapper = document.querySelector('.numberRecipes h2')
    const numberRecipes = getNumberRecipes()
    numberRecipesWrapper.innerHTML = `${numberRecipes} recettes`
}

function getNumberRecipes(){
    const recipes = document.querySelectorAll('article')
    return recipes.length
}