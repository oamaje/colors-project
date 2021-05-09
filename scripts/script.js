let code = document.querySelectorAll(".code");

let color = document.querySelectorAll(".color");

let button = document.querySelector(".generate");

let lock = document.getElementById("lock");

button.addEventListener("click", colorGen);
lock.addEventListener("click",
function checklock() {
    for (let index = 0; index < 5; index++) {
     lock.value = true;    
     console.log(lock.value);   
    }
})

function colorGen() {
  for (let i = 0; i < code.length; i++) {
      if (lock.value == true) {
          console.log("locked");
      } else if (lock.value == false ) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        code[i].innerHTML = "#" + Math.floor(Math.random() * 16777215).toString(16);
        color[i].style.backgroundColor = "#" + randomColor;
      }
    
  }
}
colorGen();

