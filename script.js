const container = document.createElement("div")
container.innerHTML = "container"
container.setAttribute('id', 'grid-container')
document.body.appendChild(container)


appendCell(16)

function appendCell(num) {
    for (let i = 0; i < num * num; i++) {
        const cell = document.createElement("div")
        const cloneCell = cell.cloneNode(true)
        cloneCell.classList.add("grid-cell")
        cloneCell.innerHTML = "cell"
        container.appendChild(cloneCell) 
        continue
    }
}
