export function displayNumberRecipes(){
    const numberRecipesWrapper = document.querySelector('.numberRecipes h2')
    const numberRecipes = getNumberRecipes()
    numberRecipesWrapper.innerHTML = numberRecipes <= 1 ? `${numberRecipes} recette` : `${numberRecipes} recettes`
}

function getNumberRecipes(){
    const recipes = document.querySelectorAll('article')
    return recipes.length
}