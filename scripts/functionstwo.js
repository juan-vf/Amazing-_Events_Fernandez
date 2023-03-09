function getCategories(eventsArray) {
    let categorysArray = [];
    for (const event of eventsArray) {
        let category = event.category;
        (categorysArray.includes(category)) ? [null] : [categorysArray.push(category)];
    }
    return categorysArray
}
function renderCategories(categoriesArray, id){
    let categoryContainer = document.getElementById(id)
    let categoriesHtml = '';
    for (const category of categoriesArray) {
        //no stiles
        categoriesHtml += `
        <li class="" id="categoryContainer">
            <input type="checkbox" class="" id="checkbox">
            <label >${category}</label>
        </li>
      `
    }
    categoryContainer.innerHTML = categoriesHtml;
}
renderCategories(getCategories(events), 'dropdownMenu');


let checkValue = document.getElementById('categoryContainer');
console.log(checkValue);
// console.log(checkValue.value);
checkValue.addEventListener('change', (event)=>{
    // console.log(checkValue.childNodes, "!", event.target.checked);
    let nodes = checkValue.childNodes;
    let label;
    nodes.forEach(element => {
        // console.log(element.innerText)
        (element.innerText != undefined)?[label = element]:[]
    });
    console.log(label.innerText);
})
