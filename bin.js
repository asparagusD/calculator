let number1;
let number2;
let operator;
let num;
let result;


const bigDiv = document.querySelector("#display");
let disp = document.createElement("textarea");
disp.textContent = 0;
bigDiv.appendChild(disp);
let div = [];
let button = [];
let btn;
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
        btn = document.createElement("button");
        btn.textContent = buttonText[i][j];
        btn.setAttribute("id", `column${j}`);
        div[i].appendChild(btn);
               
    }
}

button[0] = document.querySelector(`#row1 #column0`);    //7
button[0].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[0].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    }    
});

button[1] = document.querySelector(`#row1 #column1`);    //8
button[1].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[1].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[2] = document.querySelector(`#row1 #column2`);    //9
button[2].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[2].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[3] = document.querySelector(`#row2 #column0`);    //4
button[3].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[3].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[4] = document.querySelector(`#row2 #column1`);    //5
button[4].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[4].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[5] = document.querySelector(`#row2 #column2`);    //6
button[5].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[5].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[6] = document.querySelector(`#row3 #column0`);    //1
button[6].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[6].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[7] = document.querySelector(`#row3 #column1`);    //2
button[7].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[7].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[8] = document.querySelector(`#row3 #column2`);    //3
button[8].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[8].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[9] = document.querySelector(`#row4 #column0`);    //0
button[9].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[9].textContent;
        num = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[10] = document.querySelector(`#row3 #column3`);    // +
button[10].addEventListener("click", () => {
    operator = button[10].textContent;
    number1 = +num;
    clear();
});

button[11] = document.querySelector(`#row2 #column3`);    // -
button[11].addEventListener("click", () => {
    operator = button[11].textContent;
    number1 = +num;
    clear();
});

button[12] = document.querySelector(`#row1 #column3`);    // *
button[12].addEventListener("click", () => {
    operator = button[12].textContent;
    number1 = +num;
    clear();
    
});

button[13] = document.querySelector(`#row0 #column3`);    // /
button[13].addEventListener("click", () => {
    operator = button[13].textContent;
    number1 = +num;
    clear();
    
});

button[14] = document.querySelector(`#row4 #column3`);    // =
button[14].addEventListener("click", () => {
    number2 = +num;
    operate(number1, number2, operator);
    disp.textContent = result;
});

button[15] = document.querySelector(`#row0 #column0`);
button[15].addEventListener("click", () => {
    clear();
});
     

function add(a, b) {
    result = a + b;
    return result;
}

function subtract(a, b) {
    result = a - b;
    return result;
}

function multiply(a, b) {
    result = a * b;
    return result;
}

function divide(a, b) {
    result = a / b;
    return result;
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

function clear() {
    num = 0;
    disp.textContent = 0;
}