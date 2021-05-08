const color1 = document.getElementById("colorOne");
const color2 = document.getElementById("colorTwo");
const color3 = document.getElementById("colorThree");
const color4 = document.getElementById("colorFour");
const color5 = document.getElementById("colorFive"); 
const gencolor = document.getElementById("generate");

const color1para = document.getElementById("coloronep"); 


gencolor.addEventListener("click",function () {
    const randcol = () => {
        const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
        const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
        const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
        const randomColor4 = Math.floor(Math.random()*16777215).toString(16);
        const randomColor5 = Math.floor(Math.random()*16777215).toString(16);
        color1.style.backgroundColor = "#" + randomColor1;
        color2.style.backgroundColor = "#" + randomColor2;
        color3.style.backgroundColor = "#" + randomColor3;
        color4.style.backgroundColor = "#" + randomColor4;
        color5.style.backgroundColor = "#" + randomColor5;

        
        color1para.innerText = "# "+ randomColor1;

        }
        randcol();


})
