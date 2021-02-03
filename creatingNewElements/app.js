const input = document.getElementById(`input`);
const button = document.getElementById(`submit`);
// const button2 = document.getElementById(`showhide`)
const button3=document.getElementById(`remove`);
const listItems=document.getElementsByTagName("li");
//can use these to create the variables however below is advised:

//document.querySelector("#input");
//document.querySelector("#submit");

// const showhidebtn = document.getElementById('showhide-btn');

button.addEventListener('click', () => {
     let listItem = document.createElement('li');
     let list = document.getElementsByTagName('ul')[0];
     listItem.textContent = input.value;
     listItem.addEventListener("mouseover", () => {
        listItem.textContent=listItem.textContent.toUpperCase();
    });
    listItem.addEventListener("mouseout", () => {
        listItem.textContent=listItem.textContent.toLowerCase();
    });
     input.value = '';
        console.log(listItem)
        list.appendChild(listItem);
})

button3.addEventListener(`click`, () => {
    list.removeChild(document.querySelector("#list li:last-child"));
});
//let list = document.querySelector("#list");
//this code below changes the show button from show-hide etc
// let list = document.getElementsByTagName("ul")[0];
      
//  button2.addEventListener("click", () =>{
//      console.log("Button");
//      if (list.style.display == "none") {
//         button2.textContent="Hide";
//         list.style.display = "block";
//      }
    
//     else {
//         list.style.display = "none";
//         button2.textContent="Show";
//     }
     
//  })
 

// for (let listItem of listItems) {
//     listItem.addEventListener("mouseover", () => {
//         listItem.textContent=listItem.textContent.toUpperCase();
//     });
//     listItem.addEventListener("mouseout", () => {
//         listItem.textContent=listItem.textContent.toLowerCase();
//     });
    
// }

//same code as above but using event

list.addEventListener("mouseover", (event) => {
if (event.target.tagName === "LI") {
    event.target.textContent=event.target.textContent.toUpperCase();
}
});
list.addEventListener("mouseout", (event) => {
    if(event.target.tagName === "LI") {
    event.target.textContent=event.target.textContent.toLowerCase();
    }
});

//targeting something and finding its parent. Removes the list item that you click on
list.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        const li = event.target;
        const parent = li.parentNode;
        parent.removeChild(li);
    }
});