export function tagTemplate(data){
    const typeTag = document.getElementById(`option-${data.textContent.split(' ').join('').trim()}`).closest('.select-box').id
    const tagWrapper = document.createElement('div')
    tagWrapper.className = "bg-[#FFD15B] w-56 rounded-xl flex justify-between items-center p-3 shadow-lg tagWrapper"
    tagWrapper.id = `tag-${typeTag}-${data.textContent.split(' ').join('').trim()}`

    const nameTag = document.createElement('p')
    nameTag.textContent = data.textContent
    const buttonTag = document.createElement('button')
    buttonTag.type = 'button'
    buttonTag.classList.add('closeTag')
    const imgCloseTag = document.createElement('img')
    imgCloseTag.src = "./assets/logo/blackClose.png"
    imgCloseTag.alt='close'

    buttonTag.appendChild(imgCloseTag)
    tagWrapper.appendChild(nameTag)
    tagWrapper.appendChild(buttonTag)
    return tagWrapper
    
}

