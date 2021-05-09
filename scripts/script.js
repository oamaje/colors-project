let code = document.querySelectorAll(".code");

let color = document.querySelectorAll(".color");

let lock=document.querySelectorAll(".lock")
let generate=document.getElementById("generate")
let saveBtn=document.getElementById("save")
let lib=document.getElementById("library")

//we will use this array to store the colors into local storage 
let array=[];
let randomColor="";
generate.addEventListener("click", () => {

    for (let i = 0; i < 5; i++) {
      if(lock[i].classList.contains("fa-unlock")){
          randomColor=Math.floor(Math.random() * 16777215).toString(16);
        code[i].innerText = "#"+randomColor
        color[i].style.backgroundColor = "#"+ randomColor;
     array[i]=randomColor;
      }
    }
  });
  console.log(array);

lock.forEach(locking =>{
    locking.addEventListener("click", ()=>{
      lockedDiv(locking);
    })
  })

  saveBtn.addEventListener("click",()=>{
    localStorage.setItem("colorpalette", JSON.stringify(array));
  })

  
  lib.addEventListener("click",()=>{
    var retrievedData = localStorage.getItem("colorpalette");
    console.log(retrievedData);
  })


  ///switch and case 
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