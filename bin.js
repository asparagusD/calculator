const bigDiv = document.querySelector("#display");
let div = [];
let buttonText = [
    ["AC", "Delete", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", "", ".", "="],
];

for (let i=0; i<5; i++) {
    div[i] = document.createElement("div");
    div[i].setAttribute("id", `row${i}`);
    div[i].style.cssText = "flex: 1; display: flex; background-color: navy;";
    bigDiv.appendChild(div[i]);

    for (let j=0; j<4; j++) {
        if (i===4 && j===1) continue;
        const btn = document.createElement("button");
        btn.textContent = buttonText[i][j];
        btn.setAttribute("id", `column${j}`);
        div[i].appendChild(btn);
        
    }
}



let number1;
let number2;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return  a / b;
}

function operate(number1, number2, operator) {
    switch(operator) {
        case '+':
            add(number1, number2);
            break;
        case '-':
            subtract(number1, number2);
            break;
        case '*':
            multiply(number1, number2);
            break;
        case '/':
            divide(number1, number2);
            break;            
    }
}