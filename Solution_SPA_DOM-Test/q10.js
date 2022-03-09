const table = document.querySelector("table");
const rowInput = document.querySelector("#row");
const colInput = document.querySelector("#col");
const contentInput = document.querySelector("#content");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    // 1. Take the value from the first ("row") input
    // Find that index in "table.rows"
    // We now have the row the user wants to change
    let rowToChange = table.rows[rowInput.value];
    // 2. Take the value from the second ("col") input
    // Find that index in "rowsToChange.cells"
    // We now have the cell the user wants to change
    let colToChange = rowToChange.cells[colInput.value];
    // 3. We now know the row and cell to change...
    // So grab that cell and change its content...
    // To what the user wrote in the third ("content") input
    colToChange.textContent = contentInput.value;
})

// * Example with rowInput.value = 0
// *              colInput.value = 1

// Step 1:
// "Find the row which has the index 0"

// Step 2:
// "Go to the row we already selected in step 1"
// "Find column with index 1"
// We now find the cell which we want to change

// Step 3:
// Change the content of the cell to the value of input 3 ("content")