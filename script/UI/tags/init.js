import { eraseFavoriteDisplay } from '../utils/setting.js'
import {eraseTag} from './display.js' 

export function initTagsSetting(){
    const tagsSection = document.querySelector('.tagsSection')
    tagsSection.addEventListener('click', (event) => {
        const elementType = event.target.localName
        const option = event.target.closest('div').querySelector('p')
        const optionDropdown = document.getElementById(`option-${option.textContent.split(' ').join('').trim()}`)
        if(elementType === 'img' || elementType === 'button'){
            eraseTag(option)
            eraseFavoriteDisplay(optionDropdown)
        }
    })
}