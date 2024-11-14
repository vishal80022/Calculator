let input = document.querySelector("#inputBox");
let btns = document.querySelectorAll("button");

let string = "";
let arr = [...btns];

arr.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    if (evt.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (evt.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (evt.target.innerHTML == "DEL") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else {
      string += evt.target.innerHTML;
      input.value = string;
    }
  });
});
