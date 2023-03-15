let search = document.getElementById('searchInput');
let inputValue;

// let bottonSearch = document.getElementById('searchButton');
// bottonSearch.addEventListener("click", ()=>{
//     inputValue = search.value.toLowerCase();
//     findAndRender(events, inputValue)
// })
search.addEventListener('keyup', ()=>{
    inputValue = search.value.toLowerCase();
    // console.log(inputValue);
    // console.log(find(events, inputValue));
    renderCards(find(events, inputValue), 'cardContainer');
});
function find(arrayEvents, valueForSearch){
    // console.log(valueForSearch);
    // let event;
    // let idEvents = [];
    let eventsCompatible = [];
    for (const event of arrayEvents) {
        let eventName =  event.name.toLowerCase();
        let eventDescription = event.description.toLowerCase();
        // let checkName = eventName.split(" ").includes(valueForSearch); 
        //SI SE COLOCA ES SPLIT(" "), CONVIERTE EN CADENAS DE STRING CADA PALABRA Y LA VALIDACION SOLO DA CUANDO LA PALABRA ES LA MISMA EXACTAMENTE
        let checkName = eventName.includes(valueForSearch);
        let checkDescription = eventDescription.includes(valueForSearch);

        //REVISAR QUE LOS EVENTOS NO SE GUARDEN 2 VECES, PORQUE TAL VEZ LA PALABRA ESTA EN EL NOMBRE Y LA DESCRIPCION
        if(checkName){
            // console.log(eventName);
            //revisa si
            eventsCompatible.push(event);
        }else if(checkDescription){
            // console.log(eventDescription);
            eventsCompatible.push(event);
        }
    }
    //Retorn el array con los eventos compatibles con la busqueda// despues renderCards()
    return eventsCompatible;
}
// search.onchange = ()=>{
//     console.log("finding");

// }