//getElementById()
// const logo = document.getElementById('logo');
// logo.style.size = '5rem';
// console.log(logo);

// const title = document.getElementById('box3Problem');
// title.style.color = "rgb(225, 214, 150)";
// console.log(title);

const letsConnect = document.getElementById('letsConnect');
letsConnect.style.color = "black";
console.log(letsConnect);

//getElementByClassName()
const navBar = document.getElementsByClassName('box2');
for (i = 0; i < navBar.length; i++) {
    navBar[i].style.fontSize = '5rem';
}
console.log(navBar);

//getElementByTagName - ex. ('li)

// querySelector()
// const container = document.querySelector('grid_container');
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container);


// let button = document.querySelector('button');
// document.querySelector('#green').addEventListener('click', function() {
//     button.style.backgroundColor = 'yellow';
// });

