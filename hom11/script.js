
document.addEventListener("DOMContentLoaded", function () {
    const tableSize = 10; 

    
    const container = document.getElementById("table-container");

    
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    for (let row = 1; row <= tableSize; row++) {
        const tr = document.createElement("tr");

        for (let col = 1; col <= tableSize; col++) {
            const td = document.createElement("td");
            td.textContent = row * col; 
            td.style.border = "1px solid black";
            td.style.padding = "5px 10px";
            td.style.textAlign = "center";

            
            if (row === 1 || col === 1) {
                td.style.backgroundColor = "#f0f0f0";
                td.style.fontWeight = "bold";
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    
    container.appendChild(table);
});

// Простий варіант 