export function getTypeTags(option){
    let sortBy
    if(option.id.includes('ingredients')){
        sortBy = 'ingredients'
    }else if (option.id.includes('appliance')){
        sortBy = 'appliance'
    }else if(option.id.includes('ustensils')){
        sortBy = 'ustensils'
    }
    return sortBy
}