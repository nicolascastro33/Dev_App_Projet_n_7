import { tagTemplate } from "./template.js"

export function displayTag(option){
    const tagsSection = document.querySelector('.tagsSection')
    const tagTemplateWrapper = tagTemplate(option)
    tagsSection.appendChild(tagTemplateWrapper)
}