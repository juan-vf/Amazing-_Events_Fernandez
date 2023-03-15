const cardsData = data;

const container = 'cardContainerUpcoming';
let events = dateFilter(cardsData, 'upcoming');
renderCards(events, container);