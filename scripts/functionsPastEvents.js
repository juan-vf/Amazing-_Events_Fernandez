const cardsData = data;
const container = 'cardContainerPast';
let events = dateFilter(cardsData, 'past');
renderCards(events, container);