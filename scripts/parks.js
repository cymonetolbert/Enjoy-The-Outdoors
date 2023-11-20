"use strict"

window.onload = function (_event) {

    //change placeHolderName once done
    const placeholderName = parkTypesArray
    const parkSelect = document.getElementById("parkSelect")
    parkSelect.onchange = renderParkCard
    
    populateParkSelect(locationsArray, parkSelect)
    populateParkSelect(parkTypesArray, parkSelect)
   
}

function populateParkSelect(paparkTypesArray, parkSelect) {
    let html = `<option>Pick a Park</option>`
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const park = nationalParksArray[index];
        html += `<option value="${park}">${park}</option>`
    }
    parkSelect.innerHTML = html
}

function populateParkSelect(nationalParksArray, parkSelect) {
    let html = `<option>Pick a Location</option>`
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const park = nationalParksArray[index];
        html += `<option value="${park}">${park}</option>`
    }
    parkSelect.innerHTML = html
};

function renderParkCard(event) {
    const chosenParkName = event.target.value
    let html = ""
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const currentPark = nationalParkArray[index];
        if (currentPark.name === chosenParkName) {
            html += 
            `
            <div class="card" style="height: 36rem;"width: 22rem;>
                <img src="/data/images/${currentPark.LocationID} class="card-img-top" alt="${currentPark.LocationID}">
                <div class="card-body">
                    <h5 class="/data/nationalParksArray/${currentPark.LocationID}">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>`
        }
    }

    // if (card.name === renderParkCard) {

    // html+= `<option value = "${park.name}">${park.name}</option>`

    // parkCategory.innerHTML = html

    const resultCard = document.getElementById("renderParkCard")
    resultCard.innerHTML = html

}
