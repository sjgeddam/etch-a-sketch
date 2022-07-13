function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < 16; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        document.getElementById('container').appendChild(row);
    }
}

function changeColor() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            cells[i].classList.add('fill');
        });
    }
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let answ = prompt("Please enter n where n = nxn grid");
});

createGrid();
changeColor();