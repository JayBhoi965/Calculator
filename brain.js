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




/*
// Promise Approch : 

document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let previousInput = "";
    let shouldResetInput = false;

    function calculatePromise(previous, operator, current) {
        return new Promise((resolve, reject) => {
            if (previous === "" || current === "" || operator === "") {
                reject("Invalid operation");
            } else {
                let result;
                try {
                    result = eval(previous + operator + current);
                    resolve(result);
                } catch (error) {
                    reject("Calculation error");
                }
            }
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "C") {
                // Clear all inputs
                currentInput = "";
                previousInput = "";
                operator = "";
                shouldResetInput = false;
                display.innerText = "0";
            } else if (value === "⌫") {
                // Backspace function
                currentInput = currentInput.slice(0, -1);
                display.innerText = currentInput || "0";
            } else if (value === "=") {
                // Calculate using Promises
                if (previousInput !== "" && currentInput !== "") {
                    calculatePromise(previousInput, operator, currentInput)
                        .then((result) => {
                            display.innerText = result;
                            previousInput = result;
                            operator = "";
                            shouldResetInput = true;
                        })
                        .catch((error) => {
                            display.innerText = "Error";
                            console.error(error);
                        });
                }
            } else if (["+", "-", "×", "÷"].includes(value)) {
                // Store operator and previous value
                if (currentInput !== "") {
                    if (previousInput !== "" && operator !== "") {
                        calculatePromise(previousInput, operator, currentInput)
                            .then((result) => {
                                display.innerText = result;
                                previousInput = result;
                            })
                            .catch((error) => {
                                display.innerText = "Error";
                                console.error(error);
                            });
                    } else {
                        previousInput = currentInput;
                    }
                    operator = value === "×" ? "*" : value === "÷" ? "/" : value;
                    currentInput = "";
                    shouldResetInput = false;
                }
            } else {
                // Number or decimal input
                if (shouldResetInput) {
                    currentInput = "";
                    shouldResetInput = false;
                }
                if (currentInput.length < 10) {
                    currentInput += value;
                    display.innerText = currentInput;
                }
            }
        });
    });
}); 

*/
