const paragraphs = document.querySelectorAll("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    paragraphs.forEach(p => {
        p.style.backgroundColor = "yellow";
    })
})