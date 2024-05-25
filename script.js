let output = "";
let mplus = "";
let mminus = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "C") {
      mplus = mminus = output;
      output = "";
    } else if (e.target.innerHTML == "=") {
      output = eval(output);
      mplus = mminus = output;
    } else if (e.target.innerHTML == "M+") {
      output = eval(output + mplus);
    } else if (e.target.innerHTML == "M-") {
      output = eval(mminus - output);
    } else {
      output += e.target.innerHTML;
    }
    document.querySelector("input").value = output;
  });
});
