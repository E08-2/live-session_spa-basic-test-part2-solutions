const table = document.querySelector("table");
const button = document.querySelector("button");

const insertRow = () => {
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.textContent = `Row${table.rows.length} cell1`;
    cell2.textContent = `Row${table.rows.length} cell2`;
}

button.addEventListener("click", insertRow);