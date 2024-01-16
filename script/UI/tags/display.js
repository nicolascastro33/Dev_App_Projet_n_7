import { getTypeTags } from "../utils/typeTags.js"
import { tagTemplate } from "./template.js"

export function displayTag(option){
    const tagsSection = document.querySelector('.tagsSection')
    const tagTemplateWrapper = tagTemplate(option)
    tagsSection.appendChild(tagTemplateWrapper)
}

export function eraseTag(option){
    let sortBy = getTypeTags(option)
    const tagTemplateWrapper = document.getElementById(`tag-${sortBy}-${option.textContent.split(' ').join('').trim()}`)
    tagTemplateWrapper?.remove()
}