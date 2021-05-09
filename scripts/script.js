let code = document.querySelectorAll(".code");

let color = document.querySelectorAll(".color");

let lock=document.querySelectorAll(".lock")
let generate=document.getElementById("generate")



generate.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if(lock[i].classList.contains("fa-unlock")){
        code[i].innerText = "#"+Math.floor(Math.random() * 16777215).toString(16);
        color[i].style.backgroundColor = "#"+ Math.floor(Math.random() * 16777215).toString(16);
      }
    }
  });

lock.forEach(locking =>{
    locking.addEventListener("click", ()=>{
      lockedDiv(locking);
    })
  })
  
  
  const lockedDiv = (locked)=>{
    if(locked.classList.contains("fa-unlock")){
      locked.classList.remove("fa-unlock");
      locked.classList.add("fa-lock");
    } else if (locked.classList.contains("fa-lock")){
      locked.classList.add("fa-unlock");
      locked.classList.remove("fa-lock");
    }
  }
  




let hexcodes = class {
  constructor(hex1,hex2,hex3,hex4,hex5){
  this.hex1 = hex1;
  this.hex2 = hex2;
  this.hex3 = hex3;
  this.hex4 = hex4;
  this.hex5 = hex5;
}

}

window.localStorage.setItem("Hex code", "")