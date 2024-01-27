import { recipes } from '../../../data/recipes.js';

export function runSearch(tagsData) {
  let searchResults = [];
  recipes.forEach((recipe) => {
    let isInclude = filterByMainText(recipe, tagsData.text);
    isInclude = filterByTagAppliance(
      recipe.appliance,
      tagsData.appliances,
      isInclude
    );
    isInclude = filterByTagUstensil(
      recipe.ustensils,
      tagsData.ustensils,
      isInclude
    );
    isInclude = filterByTagIngredient(
      recipe.ingredients,
      tagsData.ingredients,
      isInclude
    );
    if (isInclude) {
      searchResults.push(recipe);
    }
  });
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
  recipe.ingredients.forEach((ingredients) => {
    const ingredient = ingredients.ingredient;
    if (ingredient.toLowerCase().includes(text.trim().toLowerCase())) {
      isInclude = true;
    }
  });
  return isInclude;
}

export function filterByTagAppliance(appliance, tags, isInclude) {
  if (!isInclude) {
    return isInclude;
  } else if (tags === undefined || tags.length === 0) {
    return isInclude;
  }
  if (
    !tags.find((tag) =>
      tag.toLowerCase().includes(appliance.trim().toLowerCase())
    )
  ) {
    isInclude = false;
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
  tags.forEach((tag) => {
    if (
      ingredients.find(
        (oneIngredient) =>
          oneIngredient.ingredient
            .trim()
            .toLowerCase()
            .includes(tag.trim().toLowerCase()) ||
          `${oneIngredient.ingredient.trim().toLowerCase()}s` ===
            tag.trim().toLowerCase() ||
          oneIngredient.ingredient.trim().toLowerCase() ===
            `${tag.trim().toLowerCase()}s`
      )
    ) {
      tagsInclude++;
    }
    isInclude = tagsInclude === tags.length;
  });
  return isInclude;
}

export function filterByTagUstensil(ustensils, tags, isInclude) {
  if (!isInclude) {
    return isInclude;
  } else if (tags === undefined || tags.length === 0) {
    return isInclude;
  }
  let tagsInclude = 0;
  tags.forEach((tag) => {
    if (
      ustensils.find((ustensil) =>
        ustensil.trim().toLowerCase().includes(tag.trim().toLowerCase())
      )
    ) {
      tagsInclude++;
    }
    isInclude = tagsInclude === tags.length;
  });
  return isInclude;
}
