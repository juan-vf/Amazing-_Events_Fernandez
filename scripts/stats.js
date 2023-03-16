let events = data;
console.log(highestAndLowest(events));

function highestAndLowest(array){

    let arrayFiltered = [];
    let arrayPastEvents = dateFilter(array, 'past');
    let arrayPercentajes =[];
    let maxPercentajeEvent;
    let minPercentajeEvent;
    let evento;

    let arrayObj = [];
    for (const arrayobj of arrayPastEvents) {
        let percentajeOfAssitString = percentaje(arrayobj.capacity, arrayobj.assistance);
        
        let percentajeOfAssitNumber = parseFloat(percentajeOfAssitString);

        arrayObj.push({
            id: arrayobj._id,
            per: percentajeOfAssitNumber
        })
        arrayPercentajes.push(percentajeOfAssitNumber);
        maxPercentajeEvent = {
            id: arrayobj._id,
            percentajeMax: Math.max(...arrayPercentajes)
        }
        ;
        minPercentajeEvent = {
            id: arrayobj._id,
            percentajeMin: Math.min(...arrayPercentajes)
        }
    }

    let percentajes = arrayObj.map(elmt => elmt.per);
    let maxPer = Math.max(...percentajes);
    let eventFiltered = arrayObj.filter(el => el.per == maxPer)
    console.log(eventFiltered);
    let arrayEvents = array.events;
    evento = arrayEvents.filter(elmt => percentaje(elmt.capacity, elmt.assistance) == maxPercentajeEvent.percentajeMax)

    return {
        evento, 
        maxPercentajeEvent: maxPercentajeEvent,
        minPercentajeEvent: minPercentajeEvent,
    };
}
console.log(largerCapacity(events.events))
function largerCapacity(array){
    
}
function percentaje(total, value){
    let percentaje;
    let multiply = (value * 100)
    let divide = (multiply / total);
    // percentaje = divide.toFixed(1);
    percentaje = divide;
    return percentaje;
}
