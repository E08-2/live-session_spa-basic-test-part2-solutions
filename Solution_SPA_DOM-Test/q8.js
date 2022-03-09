// const boldItems = document.getElementsByTagName("strong");
const boldItems = document.querySelectorAll("strong");
const anchorTag = document.querySelector("p > a");

anchorTag.addEventListener("mouseover", () => {
    // for (let i = 0; i < boldItems.length; i++) {
    //     boldItems[i].style.color = "green";
    // }

    boldItems.forEach(item => {
        item.style.color = "green";
    })
});