const select = document.querySelector("select");
const button = document.querySelector("button");

console.log(select.selectedIndex)

button.addEventListener("click", () => {
    select.remove(select.selectedIndex);
})