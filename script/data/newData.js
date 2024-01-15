import { dataSortBy } from "./utils/getDataSortBy.js";

export function getNewData(recipes){
    const body = document.querySelector('body')
    body.addEventListener('click', () => {
        newData()
    })
}

function newData(){
    console.log(dataSortBy())

}