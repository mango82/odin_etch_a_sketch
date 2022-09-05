const setGrid = document.createElement("button")
setGrid.setAttribute("id", "set-grid")
setGrid.innerHTML = "Set Grid Area"
document.body.appendChild(setGrid)

const container = document.createElement("div")
container.setAttribute('id', 'grid-container')
document.body.appendChild(container)

appendCell(16)
function appendCell(num) {
    for (let i = 0; i < num * num; i++) {
        const cell = document.createElement("div")
        const cloneCell = cell.cloneNode(true)
        cloneCell.classList.add("grid-cell")
        container.appendChild(cloneCell)
        fillColor() 
        continue
    }
}
function fillColor() {
    const color = document.getElementsByClassName("grid-cell")
    for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("mouseover", e => {
    color[i].classList.add("color")
})}
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

setGrid.addEventListener ("click", e => {
    removeAllChildNodes(container)
    appendCell(prompt ("What size grid would you like?")) 
})