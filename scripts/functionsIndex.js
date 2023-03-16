const container = 'cardContainer';
renderCardsApi()
async function renderCardsApi(){
    const data = await getData();
    events = await data.events;
    renderCards(events, container);
}