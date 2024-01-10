
export function searchSortByImageSetting(input) {
    const eraseButton = input
      .closest('.select-box')
      .querySelector('.closeButtonDropdown');
    eraseButton.className =
      input.value === ''
        ? 'hidden closeButtonDropdown'
        : 'block closeButtonDropdown';
  }
  
  export function searchSortBySetting(input){
    const allElements = input.closest('.options-container').querySelectorAll('.option');
    allElements.forEach((element) => {
      const name = element.querySelector('label').innerText
      if(input.value?.trim() === ''){
        element.classList.remove('hidden')
      }else if(name.toLowerCase().includes(input.value.trim().toLowerCase())){
        element.classList.remove('hidden')
      }else if(!name.toLowerCase().includes(input.value.trim().toLowerCase())){
        element.classList.add('hidden')
      }
    })
  }

  export function closeButtonDropdownSetting(event) {
    const input = event.target
      .closest('.select-box')
      .querySelector('.searchSortby');
    event.target.closest('button').className = 'hidden closeButtonDropdown';
    input.value = '';

  }
  
  export function favoriteButtonSetting(event, option) {
    if (
      event.target.id === 'unfavoriteButton' ||
      event.target.id === 'unfavoriteImg'
    ) {
      return;
    }
    option.classList.add('selectedOption');
    if (!option.querySelector('button')) {
      const unfavoriteButton = document.createElement('button');
      const unfavoriteImg = document.createElement('img');
      unfavoriteImg.src = '/assets/logo/whiteClose.png';
      unfavoriteImg.alt = 'sortir des favoris';
      unfavoriteButton.type = 'button';
      unfavoriteButton.id = 'unfavoriteButton';
      unfavoriteImg.id = 'unfavoriteImg';
      unfavoriteButton.appendChild(unfavoriteImg);
      option.appendChild(unfavoriteButton);
    }
  }
  
  export function unfavoriteButtonSetting(option) {
    option.querySelector('button')?.addEventListener('click', () => {
      if(option.classList.contains('selectedOption')){
        option.classList.remove('selectedOption');
      }
      option.querySelector('button')?.remove();
    });
  }
  