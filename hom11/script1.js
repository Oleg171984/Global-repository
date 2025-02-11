
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("table-container");
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    const h1 = document.createElement("h1");
    h1.textContent = "Table Pythagorean";
    container.appendChild(h1);
    for (let row = 0; row < 11; row++) {
        const tr = document.createElement("tr");

        for (let col = 0; col < 11; col++) {
            const td = document.createElement("td");
            // if (row === 0 && col === 0) {
            //     td.textContent = ""; 
            // } else if (row === 0) {
            //     td.textContent = col; 
            // } else if (col === 0) {
            //     td.textContent = row; 
            // } else {
            //     td.textContent = row * col; 
            // }
            if (row === 0 || col === 0) {
                td.textContent = (row === 0 && col === 0) ? "" : (row === 0 ? col  : row);
                td.style.backgroundColor = "#f0f0f0";
                td.style.fontWeight = "bold";
            } else {
                td.textContent = row * col; 
            }
            td.style.border = "1px solid black";
            td.style.padding = "5px 10px";
            td.style.textAlign = "center";
            


            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.appendChild(table);
});
