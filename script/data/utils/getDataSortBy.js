export function dataSortBy() {
  const allTags = document.querySelectorAll('.tagWrapper');
  const inputValue = document.getElementById('mainInput').value;
  const sortByData = {
    input: inputValue ? inputValue : undefined,
    tags: {
      ingredients: getTagsValue('ingredient', allTags),
      appliances: getTagsValue('appliance', allTags),
      ustensils: getTagsValue('ustensil', allTags),
    },
  };
  return sortByData;
}

function getTagsValue(tagType, allTags) {
  if (!allTags) {
    return undefined;
  }
  let tagsValues = [];
  allTags.forEach((tag) => {
    if (tag.id.includes(tagType)) {
      tagsValues.push(tag.querySelector('p').textContent.trim());
    }
  });
  return tagsValues.length === 0 ? undefined : tagsValues;
}
