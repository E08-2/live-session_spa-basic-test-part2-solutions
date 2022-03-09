const button = document.querySelector("button");
const select = document.querySelector("select");

button.addEventListener("click", () => {
    let list = "";

    for (let i = 0; i < select.length; i++) {
        list += select[i].textContent + "\n";
    }

    alert(`No. of items: ${select.length}\n${list}`);
})