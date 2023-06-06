let block = document.querySelector('.block')
let colors = ["red", "lime", "green", "blue", "black", "brown", "tomato", "tan",]

function changeColor(){
block.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
}

function changePosition(){
    block.style.left = `${Math.floor(Math.random()* window.innerWidth)}px`
    block.style.top = `${Math.floor(Math.random()*window.innerHeight)}px`
}

setInterval(changeColor, 500);
setInterval(changePosition, 1000);

