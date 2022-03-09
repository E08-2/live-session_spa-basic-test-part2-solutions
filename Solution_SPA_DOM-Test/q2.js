const form = document.querySelector("form");
// * Solution 1: Adding our own id
//const firstVal = document.querySelector("#fname");
//const secondVal = document.querySelector("#lname");

// * Solution 2: querySelectorAll

const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Solution 1
    //console.log(firstVal.value);
    //console.log(secondVal.value);

    // Solution 2
    inputs.forEach(input => {
        console.log(input.value);
    })
})