function createGrid() {
    const container = document.querySelector(".container");
    const size = parseInt(document.querySelector("#grid-size").value);

    if (size >= 16 && size <= 100) {
        const gridWidth = 864;
        const cellWidth = gridWidth / size;
        
        container.style.height = `${gridWidth}px`;
        container.style.width = `${gridWidth}px`;
        container.innerHTML = "";

        for (let i = 0; i < size; i++) {
            let row = document.createElement("div");
            container.appendChild(row);

            for (let j = 0; j < size; j++) {
                let cell = document.createElement("div");
                cell.style.height = `${cellWidth}px`;
                cell.style.width = `${cellWidth}px`;
                cell.addEventListener("mouseover", (e) => {
                    e.target.classList.add("active");
                });

                row.appendChild(cell);
            }
        }
    } else {
        alert("Please, enter a number between 16-100");
    }
}

const createGridBtn = document.querySelector("#create-grid-btn");

createGridBtn.addEventListener("click", createGrid);

createGrid();