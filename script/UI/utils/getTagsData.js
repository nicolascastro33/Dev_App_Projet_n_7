export function getDataTags(data) {
  let ingredientsTags = [];
  let ustensilsTags = [];
  let appliancesTags = [];
  data.forEach((element) => {
    isIncludeOrNot(appliancesTags, element.appliance);

    element.ingredients.forEach((ingr) => {
      isIncludeOrNot(ingredientsTags, ingr.ingredient);
    });

    element.ustensils.forEach((ustensil) => {
      isIncludeOrNot(ustensilsTags, ustensil);
    });
  });

  ingredientsTags = sortTags(ingredientsTags);
  ustensilsTags = sortTags(ustensilsTags);
  appliancesTags = sortTags(appliancesTags);

  return { ingredientsTags, ustensilsTags, appliancesTags };
}

function isIncludeOrNot(array, element) {
  const textElement =
    element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  if (!array.includes(textElement)) {
    array.push(textElement);
  }
}

function sortTags(tags) {
  return tags.sort();
}
