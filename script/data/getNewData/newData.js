import { recipes } from '../../../data/recipes.js';

export function updateData(tagsData) {
  let newData = [];
  newData = updateDataWithInput(tagsData.input);
  newData = updataDataUstensilsTags(tagsData.tags.ustensils, newData);
  newData = updataDataIngredientsTags(tagsData.tags.ingredients, newData);
  newData = updataDataAppliancesTags(tagsData.tags.appliances, newData);
  return newData;
}

function updateDataWithInput(input) {
  let newData = [];
  if (!input) {
    return recipes;
  }
  recipes.forEach((recipe) => {
    let isInclude;
    if (recipe.name.toLowerCase().includes(input.trim().toLowerCase())) {
      isInclude = true;
    } else if (
      recipe.description.toLowerCase().includes(input.trim().toLowerCase())
    ) {
      isInclude = true;
    }
    recipe.ingredients?.forEach((ingredient) => {
      if (
        ingredient.ingredient.toLowerCase().includes(input.trim().toLowerCase())
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

function updataDataAppliancesTags(tags, data) {
  if (tags === undefined || tags.length === 0) {
    return data;
  }
  let newData = [];
  data.forEach((recipe) => {
    tags.forEach((tag) => {
      if (recipe.appliance.toLowerCase().includes(tag.trim().toLowerCase())) {
        newData.push(recipe);
      }
    });
  });
  return newData;
}

function updataDataIngredientsTags(tags, data) {
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

function updataDataUstensilsTags(tags, data) {
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
