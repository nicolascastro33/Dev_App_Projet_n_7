export function dropdownTemplates(data, sortBy) {
  const templateContent = `
    <input
      type="radio"
      class="hidden"
      id="${data}-${sortBy}"
      name="category"
    />
    <label for="${data}" class="cursor-pointer"
      >${data}</label
    >
  `;
  const templateWrapper = document.createElement('div');
  templateWrapper.className =
    'p-2 cursor-pointer flex justify-between items-center option';
  templateWrapper.id = `option-${sortBy}-${data.split(' ').join('').trim()}`;
  templateWrapper.innerHTML = templateContent;
  return templateWrapper;
}
