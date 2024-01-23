import { recipes } from '../../../data/recipes.js';

export function runSearch2(tagsData) {
  let searchResults = [];
  for (let i = 0; i < recipes.length; i++) {
    let isInclude = filterByMainText(recipes[i], tagsData.text);
    isInclude = filterByTagAppliance(
      recipes[i].appliance,
      tagsData.appliances,
      isInclude
    );
    isInclude = filterByTagUstensil(
      recipes[i].ustensils,
      tagsData.ustensils,
      isInclude
    );
    isInclude = filterByTagIngredient(
      recipes[i].ingredients,
      tagsData.ingredients,
      isInclude
    );
    if (isInclude) {
      searchResults.push(recipes[i]);
    }
  }
  return searchResults;
}

export function filterByMainText(recipe, text) {
  let isInclude = false;
  if (!text) {
    isInclude = true;
    return isInclude;
  }

  if (recipe.name.toLowerCase().includes(text.trim().toLowerCase())) {
    isInclude = true;
  } else if (
    recipe.description.toLowerCase().includes(text.trim().toLowerCase())
  ) {
    isInclude = true;
  }
  for (let i = 0; i < recipe.ingredients.length; i++) {
    const ingredient = recipe.ingredients[i].ingredient;
    if (ingredient.toLowerCase().includes(text.trim().toLowerCase())) {
      isInclude = true;
    }
  }
  return isInclude;
}

export function filterByTagAppliance(appliance, tags, isInclude) {
  if (!isInclude) {
    return isInclude;
  } else if (tags === undefined || tags.length === 0) {
    return isInclude;
  }

  for (let i = 0; i < tags.length; i++) {
    if (!appliance.toLowerCase().includes(tags[i].trim().toLowerCase())) {
      isInclude = false;
    }
  }
  return isInclude;
}

export function filterByTagIngredient(ingredients, tags, isInclude) {
  if (!isInclude) {
    return isInclude;
  } else if (tags === undefined || tags.length === 0) {
    return isInclude;
  }
  let tagsInclude = 0;
  for (let i = 0; i < tags.length; i++) {
    for (let iI = 0; iI < ingredients.length; iI++) {
      if (
        ingredients[iI].ingredient.trim()
          .toLowerCase()
          .includes(tags[i].trim().toLowerCase())
      ) {
        tagsInclude++;
      }
    }
    isInclude = tagsInclude === tags.length;
  }
  return isInclude;
}

export function filterByTagUstensil(ustensil, tags, isInclude) {
  if (!isInclude) {
    return isInclude;
  } else if (tags === undefined || tags.length === 0) {
    return isInclude;
  }
  let tagsInclude = 0;
  for (let i = 0; i < tags.length; i++) {
    for (let iU = 0; iU < ustensil.length; iU++) {
      if (ustensil[iU].toLowerCase().includes(tags[i].trim().toLowerCase())) {
        tagsInclude++;
      }
    }
    isInclude = tagsInclude === tags.length;
  }

  return isInclude;
}
