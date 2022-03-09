const radiusInput = document.querySelector("#radius");
const volumeInput = document.querySelector("#volume");
const button = document.querySelector("button");

function volume() {
    let volume;
    let radius = radiusInput.value;

    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);

    volume = volume.toFixed(4);

    volumeInput.value = volume;
}

button.addEventListener("click", volume);