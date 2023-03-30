const container = 'cardContainer';
categoriesApiInit()
renderCardsApi()
async function renderCardsApi(){
    const data = await getData();
    events = await data.events;
    renderCards(events, container, true);

}

let search = document.getElementById('searchInput');
let containerChecks = document.getElementById('dropdownMenuChecks');
let searchListener = search.addEventListener('keyup', filterAll);
let checkListener = containerChecks.addEventListener('change', filterAll);
// filterContain()
// async function filterContain(){
    
// }

async function filterAll() {

    let data = await getData();
    let events = await data.events;
    let cardContainer = container;
    let eventsCheckeds = checkFilter(events);
    let evenstFind = searchFilter(eventsCheckeds, search.value.toLowerCase());
    if (await evenstFind.length > 0) {
        renderCards(evenstFind, cardContainer, true);
        return;
    } else {

        renderMessage('Search without result', container);
    }
}