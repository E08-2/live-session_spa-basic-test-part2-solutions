const button = document.querySelector("button");
const img = document.querySelector("img");

// Sameer's solution:

// let randomArr = [];

// let index = 0;

// randomArr[0] = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
// randomArr[1] = "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
// randomArr[2] = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";

// button.addEventListener("click", () => {
//     let index = Math.floor(Math.random() * randomArr.length);

//     if (index === 0) {
//         img.src = randomArr[0];
//     } else if (index === 1) {
//         img.src = randomArr[1];
//     } else {
//         img.src = randomArr[2];
//     }
// })

// =================================

let imagesArr = [
    {
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: 240,
        height: 160
    },
    {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: 320,
        height: 195
    },
    {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: 500,
        height: 343
    }
];

button.addEventListener("click", () => {
    let index = Math.floor(Math.random() * 3);

    img.src = imagesArr[index].src;
    //img.width = imagesArr[index].width;
    //img.height = imagesArr[index].height;
});