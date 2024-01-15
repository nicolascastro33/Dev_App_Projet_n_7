import { tagTemplate } from "./template.js"

export function displayTag(option){
    const tagsSection = document.querySelector('.tagsSection')
    const tagTemplateWrapper = tagTemplate(option)
    tagsSection.appendChild(tagTemplateWrapper)
}

export function eraseTag(option){
    const tagTemplateWrapper = document.getElementById(`tag-${option.textContent.split(' ').join('').trim()}`)
    tagTemplateWrapper?.remove()
}