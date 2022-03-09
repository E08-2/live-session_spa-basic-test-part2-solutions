const button = document.querySelector("button");
const table = document.querySelector("table");

const rowTable = prompt("How many rows do you want?");
const colTable = prompt("How many columns do you want?");

button.addEventListener("click", () => {
    if (Number(rowTable) && Number(colTable)) {
        for (let i = 0; i < rowTable; i++) {
            let row = table.insertRow(i);

            for (let j = 0; j < colTable; j++) {
                let col = row.insertCell(j);
                col.textContent = `Row ${i+1}, column ${j+1}`
            }
        }
    }

    console.log(typeof rowTable)
})