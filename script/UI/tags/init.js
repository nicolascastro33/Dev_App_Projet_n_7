import { displayNewRecipes } from '../utils/displayNewRecipes.js'
import { eraseFavoriteDisplay } from '../utils/setting.js'
import { getTypeTags } from '../utils/typeTags.js'
import {eraseTag} from './display.js' 

export function initTagsSetting(){
    const tagsSection = document.querySelector('.tagsSection')
    tagsSection.addEventListener('click', (event) => {
        const elementType = event.target.localName
        const option = event.target.closest('div').querySelector('p')
        const typeTag = getTypeTags(event.target.closest('div'))
        const optionDropdown = document.getElementById(`option-${typeTag}-${option.textContent.split(' ').join('').trim()}`)
        if(elementType === 'img' || elementType === 'button'){
            eraseTag(option)
            eraseFavoriteDisplay(optionDropdown)
            displayNewRecipes()
        }
    })
}