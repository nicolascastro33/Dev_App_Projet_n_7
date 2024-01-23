export const recipes = [
    {
        id: 50,
        image: 'Recette50.jpg',
        name: 'Frangipane',
        servings: 2,
        ingredients: [
          {
            ingredient: 'Pâte feuilletée',
            quantity: 400,
            unit: 'grammes',
          },
          {
            ingredient: 'Oeuf',
            quantity: 6,
          },
          {
            ingredient: "Poudre d'amendes",
            quantity: 500,
            unit: 'grammes',
          },
          {
            ingredient: 'Beurre',
            quantity: 500,
            unit: 'grammes',
          },
          {
            ingredient: 'Sucre glace',
            quantity: 500,
            unit: 'grammes',
          },
        ],
        time: 60,
        description:
          "Préparer la frangipane : Mélanger le sucre la poudre d'amandes, le beurre et les oeufs. Étaler la moitié de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
        appliance: 'Four',
        ustensils: ['rouleau à patisserie', 'fouet'],
      },
]