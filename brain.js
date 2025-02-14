document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", function () {

            let value = this.innerText;

            if (value === "C") {


                currentInput = "";
                previousInput = "";
                operator = "";
                display.innerText = "0";


            } else if (value === "⌫") {
                currentInput = currentInput.slice(0, -1);
                display.innerText = currentInput || "0";
            } else if (value === "=") {

                if (previousInput !== "" && currentInput !== "") {
               
                    currentInput = eval(previousInput + operator + currentInput);
                    display.innerText = currentInput;
                    previousInput = "";
                    operator = "";
               
                }
                
            } else if (["+", "-", "×", "÷"].includes(value)) {
                // Store operator and previous value
                if (currentInput !== "") {
                    previousInput = currentInput;
                    operator = value === "×" ? "*" : value === "÷" ? "/" : value;
                    currentInput = "";
                }
            } else {

                if (currentInput.length < 10) {

                    currentInput += value;
                    display.innerText = currentInput;

                }
                
            }
        });
    });
});
