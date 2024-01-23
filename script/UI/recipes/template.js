export function recipeTemplates(data) {
  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'overflow-hidden relative h-72';
  const img = document.createElement('img');
  img.src = `./assets/recipesPictures/${data.image}`;
  img.alt = data.name;
  img.className =
    'absolute w-[105%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]';
  imgWrapper.appendChild(img);

  const textWrapper = document.createElement('div');
  textWrapper.className = 'p-6 flex flex-col justify-between';
  const nameRecipe = document.createElement('h3');
  nameRecipe.className = 'font-anton font-bold mb-4';
  nameRecipe.textContent = data.name;

  const descriptionAndIngredientsWrapper = document.createElement('div');
  const descriptionTextWrapper = document.createElement('div');
  descriptionTextWrapper.className = 'mb-3';
  const recipeHeader = document.createElement('h4');
  recipeHeader.className = 'text-gray-400 mb-3';
  recipeHeader.textContent = 'Recette';
  const descriptionText = document.createElement('p');
  descriptionText.textContent = data.description;
  descriptionTextWrapper.appendChild(recipeHeader);
  descriptionTextWrapper.appendChild(descriptionText);

  const ingredientWrapper = document.createElement('div');
  const ingredientHeader = document.createElement('h4');
  ingredientHeader.className = 'text-gray-400 mb-3';
  ingredientHeader.textContent = 'Ingrédients';
  const listWrapper = document.createElement('ul');
  listWrapper.className = 'grid grid-cols-2 gap-3 ingredientsList';
  ingredientWrapper.appendChild(ingredientHeader);
  ingredientWrapper.appendChild(listWrapper);

  descriptionAndIngredientsWrapper.appendChild(descriptionTextWrapper);
  descriptionAndIngredientsWrapper.appendChild(ingredientWrapper);

  textWrapper.appendChild(nameRecipe);
  textWrapper.appendChild(descriptionAndIngredientsWrapper);

  const asideTimeWrapper = document.createElement('aside');
  asideTimeWrapper.className =
    'absolute top-6 right-6 flex justify-center rounded-xl bg-yellow-400 p-1 min-w-20';
  const textTimeWrapper = document.createElement('p');
  textTimeWrapper.textContent = `${data.time}min`;
  textTimeWrapper.className = 'font-semibold';
  asideTimeWrapper.appendChild(textTimeWrapper);

  const templateWrapper = document.createElement('article');
  templateWrapper.className =
    'min-h-[700px] rounded-lg drop-shadow-xl overflow-hidden bg-white';
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
  quantityIngredient.className = 'text-gray-400';
  quantityIngredient.textContent = fullQuantity;

  const templateWrapper = document.createElement('li');
  templateWrapper.className = 'list-none';
  templateWrapper.appendChild(nameIngredient);
  templateWrapper.appendChild(quantityIngredient);
  return templateWrapper;
}
