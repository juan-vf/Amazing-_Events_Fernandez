
let detailsContainer = document.getElementById('detailsContainer');
let qearyString = location.search;

let params = new URLSearchParams(qearyString);

let id = params.get('id');

async function filterCardById(array, id){
    let arrayN = await array;
    console.log(arrayN);
    let arrayFiltrado = arrayN.filter(element => element._id == id);
    return await arrayFiltrado;
}
async function renderDetailCard(arrayCard){
    let event = await arrayCard[0];
    let html = '';
    html += `
    <div class="container cardDetail d-flex row gx-0 gy-0">
    <img class="card-img cardImg rounded col-9" src="${event.image}" alt="">
    <div class="card-body d-flex justify-content-center align-self-center flex-column text-center col-3">
    <h5 class="cardTittle p-2">${event.name}</h5>
    <p class="card-body align-self-center">
    ${event.description}
    </p>
    <div class="d-flex justify-content-around flex-column flex-sm-row">
    <div class="d-flex justify-content-around m-0 m-sm-2">
    <p class="p-2 m-0 align-self-center">Date:</p>
    <p class="p-2 m-0 align-self-center">${event.date}</p>
    
    </div>
    <div class="price d-flex justify-content-around m-0 m-sm-2">
    <p class="p-0 p-sm-2 m-0 align-self-center">Price:</p>
    <p class="p-0 p-sm-2 m-0 align-self-center">${event.price}$</p>
    </div>
    <div class="d-flex flex-column m-2 space rounded">
    <div class="d-flex m-0 m-sm-2">
    <p class="p-0 p-sm-2 m-0 align-self-center">Place:</p>
    <p class="p-0 p-sm-2 m-0 align-self-center">${event.place}</p>
    </div>
    <div class="d-flex m-0 m-sm-2">
    <p class="p-0 p-sm-2 m-0 align-self-center">Capacity:</p>
    <p class="p-0 p-sm-2 m-0 align-self-center">${event.capacity}</p>
    </div>
    </div>
    
    </div>
    </div>
    </div>
    `;
    detailsContainer.innerHTML = html;
}
async function detailsInit(){
    let eventsData = await getData();
    let events = await eventsData.events;

    renderDetailCard(await filterCardById(events, id))
}
detailsInit()