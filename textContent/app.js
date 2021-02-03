const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

// submit.addEventListener("click", () =>{
//     placeholder.style.color ="goldenrod";
//     placeholder.textContent = input.value;
// })
//changes the heading to a gold colour and whatever you type in the box appears in the heading


submit.addEventListener("click", () =>{
    placeholder.style.color ="goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`;
    list.innerHTML = `<li>${input.value}</li>`
})