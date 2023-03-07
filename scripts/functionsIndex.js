
const cardsData = data;
const divCardContainer = document.getElementById('cardContainer');
// console.log(divCardContainer);
// console.log(cardsData);
// const body = document.querySelector("main");
// const article = document.createElement('article');
// article.classList.add('cardsContainer');
// article.classList.add('d-flex');
// article.classList.add('gap-2');
// body.appendChild(article)

// function createCards(objsArrays) {
//     let text = '';
//     const events = objsArrays.events;
    
//     for (let event of data.events) {
//         // console.log(event);
//         const card = document.createElement('div');
//         // card.className('card');
//         card.classList.add('card');
//         card.style.width = '18rem';
//         card.innerHTML = `<img class="cardImg card-img-top" src="${event.image}">
//         <div class="card-body">
//           <h5 class="card-title">${event.name}</h5>
//           <p class="card-text">${event.description}</p>
//           <div class="priceContainer">
//             <div class="price">
//               <p class="mt-0 mb-0">Price: </p>
//               <p class="mt-0 mb-0">${event.price}</p>
//             </div>
//           </div>
//           <div class="d-flex justify-content-end">
//             <a href="#" class="btn btn-primary ">See more</a>
//           </div>
//         </div>`;
//         article.appendChild(card);
//     }
// }
// createCards(cardsData);

const events = data.events;

function createCards(events, container){
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
    container.innerHTML = cardHTML;
}
createCards(events, divCardContainer);

