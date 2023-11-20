"use strict"

window.onload = function (_event) {

    const mountainSelect = document.getElementById("mountainSelect")
    mountainSelect.onchange = renderMountainCard

    populateMountainSelect(mountainsArray, mountainSelect)
}

function populateMountainSelect(mountainsArray, mountainSelect) {
    let html = `<option>Pick a Mountain</option>`
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountain = mountainsArray[index];
        html += `<option value="${mountain.name}">${mountain.name}</option>`
    }
   mountainSelect.innerHTML = html
}
function renderMountainCard(event) {
    const chosenMountainName = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const currentMountain = mountainsArray[index];
        if (currentMountain.name === chosenMountainName) {
            html += `
                <div class="card" style="height: 36rem; width: 22rem;">
                    <img src="/data/images/${currentMountain.img}" class="card-img-top" alt="${currentMountain.name}">
                    <div class="card-body">
                        <h5 class=/data/mountainsData.js>${currentMountain.name}</h5>
                        <p class=/data/mountainsData.js>${currentMountain.desc}
                        <p class=/data/mountainData.js>${currentMountain.elevation}
                        <p class=/data/mountainData.js>${currentMountain.effort}
                    </div>
                </div>
            `

            break
        }
        
    }
    const resultDiv=document.getElementById("RenderMountainCard")
    resultDiv.innerHTML = html
}

/* <div class="card" style="height: 36rem;"width: 22rem;>
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */