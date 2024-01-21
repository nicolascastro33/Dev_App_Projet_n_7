import { recipes } from '../../../data/recipes.js';

export function runSearch(tagsData) {
  let searchResults = [];

  searchResults = filterByMainText(tagsData.input);
  searchResults = filterByTagUstensil(tagsData.tags.ustensils, searchResults);
  searchResults = filterByTagIngredient(
    tagsData.tags.ingredients,
    searchResults
  );
  searchResults = filterByTagAppliance(tagsData.tags.appliances, searchResults);
  return searchResults;
}

function filterByMainText(text) {
  let newData = [];
  if (!text) {
    return recipes;
  }
  recipes.forEach((recipe) => {
    let isInclude;
    if (recipe.name.toLowerCase().includes(text.trim().toLowerCase())) {
      isInclude = true;
    } else if (
      recipe.description.toLowerCase().includes(text.trim().toLowerCase())
    ) {
      isInclude = true;
    }
    recipe.ingredients?.forEach((ingredient) => {
      if (
        ingredient.ingredient.toLowerCase().includes(text.trim().toLowerCase())
      ) {
        isInclude = true;
      }
    });
    if (isInclude) {
      newData.push(recipe);
    }
  });
  return newData;
}

function filterByTagAppliance(tags, data) {
  if (tags === undefined || tags.length === 0) {
    return data;
  }
  let newData = [];
  data.forEach((recipe) => {
    let isInclude = 0
    tags.forEach((tag) => {
      if (recipe.appliance.trim().toLowerCase().includes(tag.trim().toLowerCase())) {
        isInclude ++
      }
    });
    if(isInclude === tags.length){
      newData.push(recipe);
    }
  });
  return newData;
}

function filterByTagIngredient(tags, data) {
  if (tags === undefined || tags.length === 0) {
    return data;
  }
  let newData = [];
  data.forEach((recipe) => {
    let isInclude = 0;
    tags.forEach((tag) => {
      recipe.ingredients?.forEach((ingredient) => {
        if (
          ingredient.ingredient.toLowerCase().includes(tag.trim().toLowerCase())
        ) {
          isInclude++;
        }
      });
    });
    if (isInclude === tags.length) {
      newData.push(recipe);
    }
  });
  return newData;
}

function filterByTagUstensil(tags, data) {
  if (tags === undefined || tags.length === 0) {
    return data;
  }
  let newData = [];
  data.forEach((recipe) => {
    let isInclude = 0;
    tags.forEach((tag) => {
      recipe.ustensils?.forEach((ustensil) => {
        if (ustensil.toLowerCase().includes(tag.trim().toLowerCase())) {
          isInclude++;
        }
      });
    });
    if (isInclude === tags.length) {
      newData.push(recipe);
    }
  });
  return newData;
}
