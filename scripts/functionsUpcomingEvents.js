const cardsData = data;
const divCardContainer = document.getElementById('cardContainerUpcoming');

function dateFilter(objArray){
    let date = (objArray.currentDate);
    let currentDate = new Date(date);
    let events = [];
    for (const event of objArray.events) {
        let eventDate = new Date(event.date);
        if(currentDate < eventDate){
            //Los eventos pasados
            events.push(event);
        }else{
            //los eventos futuros
        }
    }
    return events;
};
function createCards(events){
    let cardHTML = '';
    for (const event of events) {
        cardHTML += `
        <div class="card" style="width: 18rem;">
            <img class="cardImg card-img-top" src="${event.image}">
            <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                <div class="priceContainer">
                    <div class="price">
                    <p class="mt-0 mb-0">Price: </p>
                    <p class="mt-0 mb-0">${event.price}</p>
                    </div>
                </div>
                <div class="dateContainer">
                    <div class="date d-flex justify-content-evenly">
                    <p class="mt-0 mb-0">Date: </p>
                    <p class="mt-0 mb-0">${event.date}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <a href="#" class="btn btn-primary ">See more</a>
                </div>
            </div>
        </div>`
    }
    divCardContainer.innerHTML = cardHTML;
}
createCards(dateFilter(cardsData, divCardContainer));