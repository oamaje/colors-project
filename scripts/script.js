let code = document.querySelectorAll(".code");

let color = document.querySelectorAll(".color");

let lock = document.querySelectorAll(".lock");
let generate = document.getElementById("generate");
let saveBtn = document.getElementById("save");
let lib = document.getElementById("library");

//we will use this array to store the colors into local storage
let array = [];
let randomColor = "";
generate.addEventListener("click", () => {

  for (let i = 0; i < 5; i++) {
    if (lock[i].classList.contains("fa-unlock")) {
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
      code[i].innerText = "#" + randomColor;
      color[i].style.backgroundColor = "#" + randomColor;
      array[i] = randomColor;
      
    }
  }
});
console.log(array);

lock.forEach((locking) => {
  locking.addEventListener("click", () => {
    lockedDiv(locking);
  });
});

// saveBtn.addEventListener("click", () => {
//   localStorage.setItem("colorpalette", JSON.stringify(array));
// });

lib.addEventListener("click", () => {
  var retrievedData = localStorage.getItem("colorpalette");
  console.log(retrievedData);
});

///switch and case
const lockedDiv = (locked) => {
  if (locked.classList.contains("fa-unlock")) {
    locked.classList.remove("fa-unlock");
    locked.classList.add("fa-lock");
  } else if (locked.classList.contains("fa-lock")) {
    locked.classList.add("fa-unlock");
    locked.classList.remove("fa-lock");
  }
};

let hexcodes = class {
  constructor(hex1, hex2, hex3, hex4, hex5) {
    this.hex1 = hex1;
    this.hex2 = hex2;
    this.hex3 = hex3;
    this.hex4 = hex4;
    this.hex5 = hex5;
  }
};

window.localStorage.setItem("Hex code", "");

const savespan = document.getElementById("closebtn");
const savewindow = document.getElementById("modal");
const libwindow = document.getElementById("libmodal");
const libspan = document.getElementById("libclosebtn");
const librarypallets = document.getElementById("pname");
const savepabtn = document.getElementById("savepallete");

//showing the library modal
function libraryshow() {
  lib.addEventListener("click", function () {
    libwindow.style.display = "block";
  });

  libspan.onclick = function () {
    libwindow.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == libwindow) {
      libwindow.style.display = "none";
    }
  };
}
//showing the save modal
function saveshow() {
  saveBtn.addEventListener("click", function () {
    savewindow.style.display = "block";
  });

  savespan.onclick = function () {
    savewindow.style.display = "none";
  };

  window.onclick = function (event2) {
    if (event2.target == savewindow) {
      savewindow.style.display = "none";
    }
  };
}
saveshow();
libraryshow();

const div = document.createElement("div");
librarypallets.append(div);

const arrayname = document.getElementById("saveinp");

savepallete.addEventListener("click", () => {
  localStorage.setItem(arrayname.value, JSON.stringify(array));
 
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")


c1.style.backgroundColor = "#"+array[0];
c2.style.backgroundColor = "#"+array[1];
c3.style.backgroundColor = "#"+array[2];
c4.style.backgroundColor = "#"+array[3];
c5.style.backgroundColor = "#"+array[4];
c1.innerText = array[0];
c2.innerText = array[1];
c3.innerText = array[2];
c4.innerText = array[3];
c5.innerText = array[4];

div.innerHTML ="<b > " + arrayname.value + " </b> " +"<br>";
div.style.color = "#114d64";
});
