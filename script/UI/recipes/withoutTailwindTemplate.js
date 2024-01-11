export function recipeTemplates(data) {
  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'imgWrapper';
  const img = document.createElement('img');
  img.src = `./assets/recipesPictures/${data.image}`;
  img.alt = data.name;
  imgWrapper.appendChild(img);

  const textWrapper = document.createElement('div');
  textWrapper.className = 'textWrapper';
  const nameRecipe = document.createElement('h3');
  nameRecipe.textContent = data.name;

  const descriptionAndIngredientsWrapper = document.createElement('div');
  const descriptionTextWrapper = document.createElement('div');
  descriptionTextWrapper.className = 'descriptionTextWrapper';
  const recipeHeader = document.createElement('h4');
  recipeHeader.textContent = 'Recette';
  const descriptionText = document.createElement('p');
  descriptionText.textContent = data.description;
  descriptionTextWrapper.appendChild(recipeHeader);
  descriptionTextWrapper.appendChild(descriptionText);

  const ingredientWrapper = document.createElement('div');
  const ingredientHeader = document.createElement('h4');
  ingredientHeader.className = 'ingredientHeader';
  ingredientHeader.textContent = 'Ingrédients';
  const listWrapper = document.createElement('ul');
  listWrapper.className = 'listWrapper ingredientsList';
  ingredientWrapper.appendChild(ingredientHeader);
  ingredientWrapper.appendChild(listWrapper);

  descriptionAndIngredientsWrapper.appendChild(descriptionTextWrapper);
  descriptionAndIngredientsWrapper.appendChild(ingredientWrapper);

  textWrapper.appendChild(nameRecipe);
  textWrapper.appendChild(descriptionAndIngredientsWrapper);

  const asideTimeWrapper = document.createElement('aside');
  asideTimeWrapper.className = 'asideTimeWrapper';
  const textTimeWrapper = document.createElement('p');
  textTimeWrapper.textContent = `${data.time}min`;
  asideTimeWrapper.appendChild(textTimeWrapper);

  const templateWrapper = document.createElement('article');
  templateWrapper.className =
    'recipeTemplateWrapper';
  templateWrapper.id = `recipe-${data.id}`;
  templateWrapper.appendChild(imgWrapper);
  templateWrapper.appendChild(textWrapper);
  templateWrapper.appendChild(asideTimeWrapper);
  return templateWrapper;
}

export function ingredientsTemplate(data) {
  const quantity = data.quantity ? data.quantity : '';
  const unit = data.unit ? data.unit : '';
  const fullQuantity =
    unit === 'ml' || unit === 'cl' || unit === 'L'
      ? quantity + unit
      : `${quantity} ${unit}`;

  const nameIngredient = document.createElement('h5');
  nameIngredient.textContent = data.ingredient;
  const quantityIngredient = document.createElement('p');
  quantityIngredient.className = 'quantityIngredient';
  quantityIngredient.textContent = fullQuantity;

  const templateWrapper = document.createElement('li');
  templateWrapper.className = 'ingredientsTemplateWrapper';
  templateWrapper.appendChild(nameIngredient);
  templateWrapper.appendChild(quantityIngredient);
  return templateWrapper;
}
