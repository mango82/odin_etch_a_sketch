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
        continue
    }
}

const color = document.getElementsByClassName("grid-cell")
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("mouseover", e => {
    color[i].classList.add("color")
})}
    