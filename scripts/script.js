// const color1 = document.getElementById("colorOne");
// const color2 = document.getElementById("colorTwo");
// const color3 = document.getElementById("colorThree");
// const color4 = document.getElementById("colorFour");
// const color5 = document.getElementById("colorFive"); 
const gencolor = document.getElementById("generate");

// const color1para = document.getElementById("coloronep"); 

var divs = document.querySelectorAll('div');





gencolor.addEventListener("click",function () {
    divs.forEach(function(item) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.backgroundColor = "#"+ randomColor;
        let hexaColor=document.createElement("p");
        hexaColor.innerText = "# "+ randomColor;

    });
})
