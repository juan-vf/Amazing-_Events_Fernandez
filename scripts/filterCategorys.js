function filterCategorysEvents(eventsArray, category){
    //pasarle el array de los eventos, no el objeto con currentDate y events
    let eventArray =[];
    for (const event of eventsArray) {
        let categoryEvent = event.category;
        if(categoryEvent === category){
            eventArray.push(event);
        }
    }
    return eventArray;
}