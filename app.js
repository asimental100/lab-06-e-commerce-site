// import functions and grab DOM elements
const productPageButton = document.getElementById("go-to-products");
// initialize state
let counter =  0;
// set event listeners to update state and DOM
productPageButton.addEventListener('click', () => {
    counter++;
    console.log(`Button Clicked ${counter} Times!`)
})