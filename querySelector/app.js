//cycle over the list items and apply colours from the array called colours

const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const listItems = document.querySelectorAll("li");

for(let  i = 0; i < listItems.length; i++) {
     listItems[i].style.color  =  colours[i];
 }

 //each word is the next colour on the list

