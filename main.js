
//colour array
let colours = ['brown', 'blue', 'red', 'yellow', 'orange', 'magenta'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function () {
    //randomizer
    let randomColor = colours[Math.floor(Math.random() * colours.length)]
    //get container
    let container = document.getElementById('container');
    //container style
    container.style.background = randomColor;
})