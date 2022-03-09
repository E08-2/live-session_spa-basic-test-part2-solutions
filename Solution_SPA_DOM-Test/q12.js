const div = document.getElementById("wh");

window.addEventListener("resize", () => {
    div.textContent = `Window width is: ${window.innerWidth} \nWindow height is: ${window.innerHeight};`
});