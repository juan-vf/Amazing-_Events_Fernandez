let containerES = document.getElementById('containerEventsStatics');
let containerUp = document.getElementById('upComingStats');
let containerPast = document.getElementById('pastComingStats');
eventsStatsInit()
async function eventsStatsInit() {
    let allData = await getData();
    let events = await allData.events;

    let upEvents = dateFilter(allData, 'upcoming');

    let pastEvents = dateFilter(allData, 'past');

    let upStatics = upComingStatics(upEvents);

    let pastStatics = upComingStatics(pastEvents);
    renderUpStatics(containerUp, upStatics, upEvents, 'up');

    renderUpStatics(containerPast, pastStatics, pastEvents, 'past');

    renderEventStatics(containerES, await highestAndLowest(allData));

}

async function highestAndLowest(array) {
    let arrayData = await array;

    let arrayFiltered = [];
    let arrayPastEvents = dateFilter(array, 'past');
    let arrayPercentajes = [];
    let maxPercentajeEvent;
    let minPercentajeEvent;
    let evento;
    let maxCapacity = 0;
    let index = 1;
    let arrayObj = [];
    for (const arrayobj of arrayPastEvents) {

        let capacity = arrayobj.capacity;
        if (capacity > arrayPastEvents[index].capacity && capacity > arrayPastEvents[index - 1].capacity && capacity > maxCapacity) {
            maxCapacity = capacity;
        }

        let percentajeOfAssitString = percentaje(arrayobj.capacity, arrayobj.assistance);

        let percentajeOfAssitNumber = parseFloat(percentajeOfAssitString);

        arrayObj.push({
            id: arrayobj._id,
            per: percentajeOfAssitNumber
        })
        arrayPercentajes.push(percentajeOfAssitNumber);
        maxPercentajeEvent = {
            id: '',
            percentajeMax: Math.max(...arrayPercentajes)
        }
            ;
        minPercentajeEvent = {
            id: '',
            percentajeMin: Math.min(...arrayPercentajes)
        }
    }

    let percentajes = arrayObj.map(elmt => elmt.per);
    // let maxPer = Math.max(...percentajes);
    // let minPer = Math.min(...percentajes);
    // let eventFiltered = arrayObj.filter(el => el.per == maxPer);
    let eventMax = arrayPastEvents.filter(elmt => percentaje(elmt.capacity, elmt.assistance) == maxPercentajeEvent.percentajeMax);
    maxPercentajeEvent.id = eventMax[0]._id;
    let eventMin = arrayPastEvents.filter(elmt => percentaje(elmt.capacity, elmt.assistance) == minPercentajeEvent.percentajeMin);
    minPercentajeEvent.id = eventMin[0]._id;
    let eventMaxCapacity = arrayPastEvents.filter(el => el.capacity == maxCapacity)



    return {
        eventMax,
        maxPercentajeEvent: maxPercentajeEvent,
        eventMin,
        minPercentajeEvent: minPercentajeEvent,
        eventMaxCapacity,
        maxCapacity,
    };
}
function percentaje(total, value) {
    let percentaje;
    let multiply = (value * 100)
    let divide = (multiply / total);
    // percentaje = divide.toFixed(1);
    percentaje = divide;
    return percentaje;
}

function renderEventStatics(container, events) {
    let maxP = events.maxPercentajeEvent.percentajeMax.toFixed(1);
    let minP = events.minPercentajeEvent.percentajeMin.toFixed(1);
    let maxC = events.eventMaxCapacity[0].capacity;
    // let arrayEventsStats = [events.eventoMax, events.eventoMin, events.eventMaxCapacity]
    let arrayEventsStats = [];
    //SE PUSHE EN ORDEN ASI SE RENDERIZA EN ORDEN O NOSE
    arrayEventsStats.push(events.eventMax[0])
    let maxPer = percentaje(events.eventMax[0].capacity, events.eventMax[0].assistance)
    arrayEventsStats.push(events.eventMin[0])
    arrayEventsStats.push(events.eventMaxCapacity[0])
    let html = ``;
    html += `
            <td>${events.eventMax[0].name} (${maxP}%)</td>
            <td>${events.eventMin[0].name} (${minP}%)</td>
            <td>${events.eventMaxCapacity[0].name} (${maxC} pers.)</td>
        `
    //
    container.innerHTML = html;
}

function upComingStatics(events) {
    let arrayCategories = getCategories(events);//getCategories, GET ALL CATEGORIES OF AN ARRAY OF EVENTSOBJECT
    let arrayRevenues = [];
    let arraySortedByCastegory = [];
    for (const category of arrayCategories) {
        let eventsSameCategory = events.filter(el => { if (el.category == category) { return el } });
        arraySortedByCastegory.push(eventsSameCategory);

        // if(events[i].category == arrayCategories[i]){
        //     let obj = 
        //     arrayRevenues.push(events[i])
        // }
    }
    // console.log(arraySortedByCastegory);
    // console.log(arraySortedByCastegory);

    // for (let i = 0; i < events.length; i++) {
    //     // let firstCategory = events.filter(elmt => { 
    //         if(events[i].category == arrayCategories[i]){
    //             arrayRevenues.push(events[i])
    //         }
    //     // });


    // }

    // console.log(arrayRevenues);


    return arraySortedByCastegory, arrayCategories;
}
function renderUpStatics(container, array, arrayUp, date) {
    let arrayStaticsCategories = array;
    let arrayUpEvents = arrayUp;
    let fixedPercentaje = 0;
    console.log(arrayUpEvents);
    let html = ``;
    if(date === 'up'){

        for (const cat of arrayStaticsCategories) {
            let totalPercentaje = 0;
            let revenues = 0;
            // let revenues = 0;
            let capacity = 0;
            let estimate = 0
            // console.log(revenues);
            for (const ev of arrayUpEvents) {
                if(ev.category === cat){
                    revenues += (ev.price * ev.estimate);
                    capacity += ev.capacity;
                    estimate += ev.estimate;
                }
            }
            totalPercentaje = percentaje(capacity, estimate);
            fixedPercentaje = totalPercentaje.toFixed(2)
            html += `
            <tr id="">
            <td>${cat}</td>
            <td>${revenues} $</td>
            <td>${fixedPercentaje}%</td>
            </tr>
            `;
        }
    }else if(date === 'past'){
        for (const cat of arrayStaticsCategories) {
            let totalPercentaje = 0;
            let revenues = 0;
            // let revenues = 0;
            let capacity = 0;
            let assistance = 0
            // console.log(revenues);
            for (const ev of arrayUpEvents) {
                if(ev.category === cat){
                    revenues += (ev.price * ev.assistance);
                    capacity += ev.capacity;
                    assistance += ev.assistance;
                }
            }
            totalPercentaje = percentaje(capacity, assistance);
            fixedPercentaje = totalPercentaje.toFixed(2)
            html += `
            <tr id="">
            <td>${cat}</td>
            <td>${revenues} $</td>
            <td>${fixedPercentaje}%</td>
            </tr>
            `;
        }
    }
    container.innerHTML = html
}