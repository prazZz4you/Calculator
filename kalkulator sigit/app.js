const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    output = eval(output.replace(/MOD/g, '%'));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else if (btnValue === "%") {
    if (output !== "") {
      output = (eval(output) / 100).toString();
    }
  } else {
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});