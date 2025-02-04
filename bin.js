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
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    }    
});

button[1] = document.querySelector(`#row1 #column1`);    //8
button[1].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[1].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[2] = document.querySelector(`#row1 #column2`);    //9
button[2].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[2].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[3] = document.querySelector(`#row2 #column0`);    //4
button[3].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[3].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[4] = document.querySelector(`#row2 #column1`);    //5
button[4].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[4].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[5] = document.querySelector(`#row2 #column2`);    //6
button[5].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[5].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[6] = document.querySelector(`#row3 #column0`);    //1
button[6].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[6].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[7] = document.querySelector(`#row3 #column1`);    //2
button[7].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[7].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[8] = document.querySelector(`#row3 #column2`);    //3
button[8].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[8].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

button[9] = document.querySelector(`#row4 #column0`);    //0
button[9].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        disp.textContent = disp.textContent * 10 + +button[9].textContent;
        number1 = disp.textContent;
    } else {
        event.preventDefault();
    } 
});

               
     

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