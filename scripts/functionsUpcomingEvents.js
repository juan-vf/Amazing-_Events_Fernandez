
const container = 'cardContainerUpcoming';
categoriesApiInit()
renderCardsApi()
async function renderCardsApi(){
    let allData = await getData();
    console.log(allData);
    let events = dateFilter(allData, 'upcoming');
    renderCards(events, container);
}

let search = document.getElementById('searchInput');
let containerChecks = document.getElementById('dropdownMenuChecks');
let searchListener = search.addEventListener('keyup', filterAll);
let checkListener = containerChecks.addEventListener('change', filterAll);
// filterContain()

// async function filterContain(){
    
// }

async function filterAll() {

    let allData = await getData();
    // let events = await data.events;
    let events = dateFilter(allData, 'upcoming');
    let cardContainer = container;
    let eventsCheckeds = checkFilter(events);
    let evenstFind = searchFilter(eventsCheckeds, search.value.toLowerCase());
    if (await evenstFind.length > 0) {
        renderCards(evenstFind, cardContainer);
        return;
    } else {

        renderMessage('Search without result', container);
    }
}