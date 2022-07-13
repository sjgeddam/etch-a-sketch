function createGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < dimension; j++) {
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


function clearGrid() {
    const clearB = document.querySelector('#clear');
    const cells = document.querySelectorAll('.cell');
    clearB.addEventListener('click', () => {
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove('fill');
        }
    });
}

function removeGrid() {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const button = document.querySelector('button');
button.style.color = '#e56b6f';
button.addEventListener('click', () => {
    let answ = prompt("Please enter n where n = n x n grid.");
    removeGrid();
    createGrid(answ);
    changeColor();
    clearGrid(); 
});

createGrid(16);
changeColor();
clearGrid();