function renderCards(events, idString) {
    let divCardContainer = document.getElementById(idString);
    let cardHTML = '';
    for (let event of events) {
        cardHTML += `<div class="card p-0 col-12 col-sm-6 col-lg-4" style="width: 18rem;">
        <img class="cardImg card-img-top" src="${event.image}">
        <div class="card-body align-middle d-flex flex-column">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text d-none">${event.description}</p>
            <div class="priceContainer d-flex justify-content-end">
                <div class="price">
                <div class="d-flex">
                <p class="mt-0 mb-0">Price: </p>
                <p class="mt-0 mb-0">${event.price}$</p>
                </div>
                </div>
            </div>
            <div class="dateContainer">
                <div class="date d-flex justify-content-evenly">
                <p class="mt-0 mb-0">Date: </p>
                <p class="mt-0 mb-0">${event.date}</p>
                </div>
            </div>
            <div class="d-flex justify-content-end d-none" id="btnCard">
                <a href="../src/details.html?id=${event._id}" class="btn btn-primary ">See more</a>
            </div>
        </div>
    </div>`
    }
    divCardContainer.innerHTML = cardHTML;
}
function dateFilter(objArray, date){
    let dateEvent = (objArray.currentDate);
    let currentDate = new Date(dateEvent);
    let events = [];
    for (const event of objArray.events) {
        let eventDate = new Date(event.date);
        if(date.toLowerCase() === 'past'){
            (currentDate > eventDate)?[events.push(event)]:[null];
        }
        else if(date.toLowerCase() === 'upcoming'){
            (currentDate < eventDate)?[events.push(event)]:[null];
        }
    }
    return events;
};
