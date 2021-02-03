const heading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button");

//make the button listen for mouse clicks
// get the value from input value and use that to change the heading colour

button.addEventListener("click", () => {
    heading.style.color=input.value;
});