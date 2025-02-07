let number;
let op = 1;
let operator = [];
operator[0] = "+";
let sum = 0;
let result;

const bigDiv = document.querySelector("#display");
let disp = document.createElement("textarea");
result = 0;
disp.textContent = result;
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
        result = result * 10 + +button[0].textContent;
        disp.textContent = result;
        number = result;
        
    } else {
        event.preventDefault();
    }    
});

button[1] = document.querySelector(`#row1 #column1`);    //8
button[1].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[1].textContent;
        disp.textContent = result;
        number = result;
        
    } else {
        event.preventDefault();
    } 
});

button[2] = document.querySelector(`#row1 #column2`);    //9
button[2].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[2].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[3] = document.querySelector(`#row2 #column0`);    //4
button[3].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[3].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[4] = document.querySelector(`#row2 #column1`);    //5
button[4].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[4].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[5] = document.querySelector(`#row2 #column2`);    //6
button[5].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[5].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[6] = document.querySelector(`#row3 #column0`);    //1
button[6].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[6].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[7] = document.querySelector(`#row3 #column1`);    //2
button[7].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[7].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[8] = document.querySelector(`#row3 #column2`);    //3
button[8].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[8].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[9] = document.querySelector(`#row4 #column0`);    //0
button[9].addEventListener("click", (event) => {
    if (disp.textContent.length < 11) {
        result = result * 10 + +button[9].textContent;
        disp.textContent = result;
        number = result;
    } else {
        event.preventDefault();
    } 
});

button[10] = document.querySelector(`#row3 #column3`);    // +
button[10].addEventListener("click", () => {
    operator[op] = button[10].textContent;   
    operate(number, operator[op-1]);
    op++;
    number = sum;
     
});

button[11] = document.querySelector(`#row2 #column3`);    // -
button[11].addEventListener("click", () => {
    operator[op] = button[11].textContent;    
    operate(number, operator[op-1]);
    op++;
    number = sum;
    
});

button[12] = document.querySelector(`#row1 #column3`);    // *
button[12].addEventListener("click", () => {
    operator[op] = button[12].textContent;
    operate(number, operator[op-1]);    
    op++;
    number = sum;
    
});

button[13] = document.querySelector(`#row0 #column3`);    // /
button[13].addEventListener("click", () => {
    operator[op] = button[13].textContent;
    operate(number, operator[op-1]);
    op++;
    number = sum;
    
});

button[14] = document.querySelector(`#row4 #column3`);    // =
button[14].addEventListener("click", () => {
    operate(number, operator[op-1]);
    op++;
    number = sum;
});

button[15] = document.querySelector(`#row0 #column0`);    // AC
button[15].addEventListener("click", () => {
    clear();
    sum = 0;
    op = 1;
    operator = [];
    operator[0] = "+";
    number = 0;
});

button[16] = document.querySelector(`#row0 #column2`);    //%
button[16].addEventListener("click", () => {
    number = number / 100;
    clear();
    disp.textContent = number;
});
     

function add(a) {
    sum = sum + a;
    return sum;
}

function subtract(a) {
    sum = sum - a;
    return sum;
}

function multiply(a) {
    sum = sum * a;
    return sum;
}

function divide(a) {
    sum = sum / a;
    return sum;
}

function percent(a) {
    sum = a / 100;
    return sum;
}

function operate(number, operator) {
    switch(operator) {
        case '+':
            add(number);
            clear();
            disp.textContent = sum;
            break;
        case '-':
            subtract(number);
            clear();
            disp.textContent = sum;
            break;
        case '*':
            multiply(number);
            clear();
            disp.textContent = sum;
            break;
        case '/':
            divide(number);
            clear();
            disp.textContent = sum;
            break;
        case '%':
            percent(number);
            clear();
            disp.textContent = sum;
            break;                
    }
}

function clear() {
    disp.textContent = 0;
    result = 0;
}