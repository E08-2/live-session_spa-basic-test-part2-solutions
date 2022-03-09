const p = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    p.style.fontFamily = "Arial";
    p.style.fontSize = "2rem";
    p.style.color = "blue";
})