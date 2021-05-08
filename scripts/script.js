
var code = document.querySelectorAll('.code');

var color = document.querySelectorAll('.color');

var button = document.querySelector('.generate');

button.addEventListener("click",colorGen);

function colorGen() {


    for (let i=0;i<code.length;i++){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        code[i].innerHTML = "#"+Math.floor(Math.random()*16777215).toString(16);;

        color[i].style.backgroundColor = "#"+randomColor;

    }

}

colorGen();