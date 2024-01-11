export function recipeTemplates(data) {
  const templateContent = `
          <div class="overflow-hidden relative h-72">
            <img src="./assets/recipesPictures/${data.image}" alt="photo" class="absolute w-[105%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" />
          </div>
          <div class="p-6">
            <h3 class="font-anton font-bold mb-4">${data.name}</h3>
            <div>
              <div class="mb-3">
                <h4 class="text-gray-400 mb-3">Recette</h4>
                <p>
                  ${data.description}
                </p>
              </div>
              <div>
                <h4 class="text-gray-400 mb-3">Ingrédients</h4>
                <ul class="grid grid-cols-2 gap-3 drop-shadow-xl ingredientsList">
                </ul>
              </div>
            </div>
          </div>
          <aside class="absolute top-6 drop-shadow-lg right-6 flex justify-center rounded-xl bg-yellow-400 p-1 min-w-20">
            <p class="font-semibold">${data.time}min</p>
          </aside>
    `;
  const templateWrapper = document.createElement('article');
  templateWrapper.className =
    'min-h-[700px] rounded-lg drop-shadow-xl overflow-hidden bg-white';
  templateWrapper.id = `recipe-${data.id}`;
  templateWrapper.innerHTML = templateContent;
  return templateWrapper;
}

export function ingredientsTemplate(data) {
  const quantity = data.quantity ? data.quantity : ''
  const unit = data.unit ? data.unit : ''
  const fullQuantity = unit === 'ml' || unit === 'cl' || unit === 'L' ? quantity+unit : `${quantity} ${unit}`
  
  const templateContent = `
  <h5>${data.ingredient}</h5>
  <p class="text-gray-400">${fullQuantity}</p>
  `;

  const templateWrapper = document.createElement('li')
  templateWrapper.className = "list-none"
  templateWrapper.innerHTML = templateContent
  return templateWrapper
}

