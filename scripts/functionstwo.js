function getCategories(eventsArray) {
    let categorysArray = [];
    // for (const event of eventsArray) {
    //     let category = event.category;
    //     (categorysArray.includes(category)) ? [null] : [categorysArray.push(category)];
    // }
    // let obtenerCategory = event => event.category
    // let noRepeatCategory = categorysArray.includes()
    let obtainCategoryNoRepeat = (event) => {
        let category = event.category;
        (categorysArray.includes(category)) ? [null] : [categorysArray.push(category)];
    }
    categoruArray = eventsArray.filter(obtainCategoryNoRepeat);
    return categorysArray;
}
// console.log(getCategories(events))
let arrayIdCheckbox = [];

function renderCategories(categoriesArray, id) {
    let categoryContainer = document.getElementById(id)
    let categoriesHtml = '';
    let categoryId = 0;
    for (const category of categoriesArray) {
        //no stiles
        categoriesHtml += `
        <li class="" id="categoryContainer">
            <input type="checkbox" class="" id="checkbox${categoryId}" value="${category}">
            <label for="checkbox${categoryId}" id="labelcheckbox${categoryId}" >${category}</label>
        </li>
      `;
        arrayIdCheckbox.push(`checkbox${categoryId}`);
        categoryId++;
    }
    categoryContainer.innerHTML = categoriesHtml;
    return;
}
renderCategories(getCategories(events), 'dropdownMenuChecks');


let nodeListCategories = document.querySelectorAll('input[type="checkbox"]');
let arrayCategories = Array.from(nodeListCategories).map(element => element);
// console.log(arrayCategories);

let search = document.getElementById('searchInput');
let containerChecks = document.getElementById('dropdownMenuChecks')
//filtar categorias

let nose = search.addEventListener('keyup', filterAll);
let eventCheck = containerChecks.addEventListener('change', filterAll);


/*
esta FUNCION REALIZA: FILTRAR LOS CHECBOX QUE ESTAN TILDADOS/TRUE/CHEQUEADOS,
CREA UN ARRAY CON LOS NOMBRE DE LAS CATEGORIAS QUE ESTAN SIENDO FILTRADAS Y
CREA UN ARRAY CON LOS EVENTOS QUE POSEEN IGUALDAD CON SU CATEGORIA Y LAS CATEGORIAS SELECCIONADAS
*/
function checkFilter(array) {
    let arrayCheckBoxChequeds = arrayCategories.filter(element => element.checked);//element.defaultValue para saber la categoria
    let arrayValuesCheqeds = arrayCheckBoxChequeds.map(element => element.value);
    if (arrayCheckBoxChequeds.length === 0) {
        return array;
    }
    let filteredArray = array.filter(element => arrayValuesCheqeds.includes(element.category));
    // if(filteredArray.length === 0){
    //     console.log("cero");
    //     return 0;
    // }
    return filteredArray;
}
function searchFilter(array, word) {
    if (word === '') {
        return array;
    }
    let arrayFilteredWithName = array.filter(element => element.name.toLowerCase().includes(word));
    return arrayFilteredWithName
}

function filterAll() {
    let cardContainer = container;
    let eventsCheckeds = checkFilter(events);
    let evenstFind = searchFilter(eventsCheckeds, search.value.toLowerCase());

    if (evenstFind.length > 0) {
        renderCards(evenstFind, container);
        return;
    } else {

        renderMessage('Search without result', container);
    }
}

// function emptyFind(array) {

// }
function renderMessage(message, idContainer) {
    let container = document.getElementById(idContainer);

    container.innerHTML = `
        <div class="d-flex justify-content-center t-bold">
            <h3>${message}</h3>
        </div>
    `
}

// function categoryListening(arrayId) {
//     /*
//     anidamiento de funciones
//     descliquear checkbox anterior ya que no se filtra mas esa, sino la nueva
//     */
//     // let checkValue = document.getElementById('dropdownMenu');
//     let categoryForFilter;
//     let label;
//     let arrayCheckboxHistorial = [];

//     let arrayBoxControlHistory = [];
//     let listenerArray = [];
//     try {

//         let addEventListener = (idCheckbox) => {
//             console.log(idCheckbox);
//             let checkbox = document.getElementById(idCheckbox);
//             let label = document.getElementById(`label${idCheckbox}`);
//             let categoryForFilter = (label.innerText);

//             let listenerEvent = checkbox.addEventListener('change', (element) => {
//                 let checked = element.target.checked;
//                 let arrayFiltrado = filterCategorysEvents(events, categoryForFilter);
//                 //ESTE ES EL ARRAY FILTRADO
//                 (checked === true) ? [
//                     renderCards(arrayFiltrado, 'cardContainer'),
//                     arrayBoxControlHistory.push(idCheckbox),
//                     offCheckbox(arrayBoxControlHistory, idCheckbox),
//                 ] : [null];
//                 ifUncheckedsShowAllsEvents('dropdownMenu', events);
//             });
//             return listenerEvent;
//         };
//         listenerArray = arrayId.filter(addEventListener);


//         //Agregar ESCUCHA + RENDERIZAR + SACAR EL CHECKBOX ANTES SELECCIONADO = OFFCHECHBOX()
//         // arrayId.forEach(id => {
//         //     let checkbox = document.getElementById(id);
//         //     checkbox.onchange = () => {
//         //         label = document.getElementById(`label${id}`);
//         //         categoryForFilter = (label.innerText);
//         //         if (checkbox.checked === true) {
//         //             let arrayFiltrado = filterCategorysEvents(events, categoryForFilter);
//         //             renderCards(arrayFiltrado, 'cardContainer');
//         //             arrayCheckboxHistorial.push(id);
//         //             offCheckbox(arrayCheckboxHistorial, id);
//         //         }
//         //         ifUncheckedsShowAllsEvents('dropdownMenu', events);
//         //     }
//         // });
//         // return categoryForFilter;
//     } catch (error) {
//         console.error("no se guardo el filtro");
//     }
//     return;
// }

// console.log(arrayIdCheckbox);
// console.log(categoryListening(arrayIdCheckbox));
// categoryListening(arrayIdCheckbox);

// function offCheckbox(arrayChcecks, actualCheckedId) {
//     let checkbox = document.getElementById(actualCheckedId);
//     if (checkbox.checked === true) {
//         let idForUncheck = arrayChcecks[0];
//         let checkbox = document.getElementById(idForUncheck);
//         if (checkbox.checked === true && arrayChcecks.length >= 2) {
//             checkbox.click();
//             // console.log(checkbox);
//             arrayChcecks.shift();
//         }
//     };
//     return;
// }


// function ifUncheckedsShowAllsEvents(idUlCategories, arrayEvents) {
//     let ul = document.getElementById(idUlCategories)
//     let arrayChecks = [];
//     let ulHTMLCollection = ul.children;
//     for (const elementHTML of ulHTMLCollection) {
//         let value = elementHTML.children[0].checked;
//         (value === false) ? [arrayChecks.push(value)] : [null];
//     }
//     if (arrayChecks.length === 7) {
//         renderCards(arrayEvents, 'cardContainer');
//     }
//     return;
// }