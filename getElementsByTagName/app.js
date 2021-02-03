//const list = document.getElementsByTagName("li");

// list.length;
// list[0];
// list[3];
// list[0].style.color="red";

//changes first letter on list to red

// console.log(list);
// console.log(list.length);  4 - 4 items in list

const list = document.getElementsByTagName("li");
const notOrange = document.getElementsByClassName("not-orange");
for (let i = 0; i< notOrange.length; i++){
    notOrange[i].style.color = "red";
}

//changes every other letter black. List goes [0]-red, [1]-black etc

