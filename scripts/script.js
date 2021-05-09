let code = document.querySelectorAll(".code");

let color = document.querySelectorAll(".color");

let button = document.querySelector(".generate");

let lock1 = document.getElementById("lock1");
let lock2 = document.getElementById("lock2");
let lock3 = document.getElementById("lock3");
let lock4 = document.getElementById("lock4");
let lock5 = document.getElementById("lock5");
const lock = [lock1.value, lock2.value, lock3.value, lock4.value, lock5.value];
console.log(lock);
let state = false;

lock1.onclick = function locking() {
  let locks = lock1;
  state = !state;
  if (state) {
    locks.value = "true";
    locks.innerHTML = `<i class="fa fa-lock">`;
    console.log(locks);
  } else {
    locks.value = "false";
    locks.innerHTML = `<i class="fa fa-unlock">`;
    console.log(locks);
  }
};

lock2.onclick = function locking() {
  let locks = lock2;
  state = !state;
  if (state) {
    locks.value = "true";
    locks.innerHTML = `<i class="fa fa-lock">`;
    console.log(locks);
  } else {
    locks.value = "false";
    locks.innerHTML = `<i class="fa fa-unlock">`;
    console.log(locks);
  }
};

lock3.onclick = function locking() {
  let locks = lock3;
  state = !state;
  if (state) {
    locks.value = "true";
    locks.innerHTML = `<i class="fa fa-lock">`;
    console.log(locks);
  } else {
    locks.value = "false";
    locks.innerHTML = `<i class="fa fa-unlock">`;
    console.log(locks);
  }
};

lock4.onclick = function locking() {
  let locks = lock4;
  state = !state;
  if (state) {
    locks.value = "true";
    locks.innerHTML = `<i class="fa fa-lock">`;
    console.log(locks);
  } else {
    locks.value = "false";
    locks.innerHTML = `<i class="fa fa-unlock">`;
    console.log(locks);
  }
};

lock5.onclick = function locking() {
  let locks = lock5;
  state = !state;
  if (state) {
    locks.value = "true";
    locks.innerHTML = `<i class="fa fa-lock">`;
    console.log(locks);
  } else {
    locks.value = "false";
    locks.innerHTML = `<i class="fa fa-unlock">`;
    console.log(locks);
  }
};

button.addEventListener("click", function () {
  if (state == false) {
    colorGen();
  } else {
    console.log("its locked");
  }
});
function colorGen() {
  for (let i = 0; i < code.length; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    code[i].innerHTML = "#" + randomColor;
    color[i].style.backgroundColor = "#" + randomColor;
console.log(randomColor);
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