let number;
let op = 1;
let operator = [];
let arr = [];
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

allClear();

button[0] = document.querySelector(`#row1 #column0`);    //7
button[1] = document.querySelector(`#row1 #column1`);    //8
button[2] = document.querySelector(`#row1 #column2`);    //9
button[3] = document.querySelector(`#row2 #column0`);    //4
button[4] = document.querySelector(`#row2 #column1`);    //5
button[5] = document.querySelector(`#row2 #column2`);    //6
button[6] = document.querySelector(`#row3 #column0`);    //1
button[7] = document.querySelector(`#row3 #column1`);    //2
button[8] = document.querySelector(`#row3 #column2`);    //3
button[9] = document.querySelector(`#row4 #column0`);    //0
button[10] = document.querySelector(`#row3 #column3`);    // +
button[11] = document.querySelector(`#row2 #column3`);    // -
button[12] = document.querySelector(`#row1 #column3`);    // *
button[13] = document.querySelector(`#row0 #column3`);    // /

for (let i=0; i<=9; i++) {
    button[i].addEventListener("click", () => {
        if (disp.textContent.indexOf('.') > -1) {
            result = result + +button[i].textContent;
        } else {
            result = result * 10 + +button[i].textContent;
        }
        
        if (result.toString().length < 12) {
            disp.textContent = result;
        } else if (result.toString().length > 20) {
            allClear();
        }   
        number = +disp.textContent;
    });
}

for (let i=10; i<=11; i++) {
    button[i].addEventListener("click", () => {
        operator[op] = button[i].textContent; 
        operate(number, operator[op-1]);
        op++;
        number = 0;
         
    });
}

for (let i=12; i<=13; i++) {
    button[i].addEventListener("click", () => {
        operator[op] = button[i].textContent;
        operate(number, operator[op-1]);    
        op++;
        number = 1;
        
    });   
}

button[14] = document.querySelector(`#row4 #column3`);    // =
button[14].addEventListener("click", () => {
    operate(number, operator[op-1]);
    op++;
    number = sum;
});

button[15] = document.querySelector(`#row0 #column0`);    // AC
button[15].addEventListener("click", () => {
    allClear();
});

button[16] = document.querySelector(`#row0 #column2`);    // %
button[16].addEventListener("click", () => {
    number = number / 100;
    number = Math.floor(number * 10000000000) / 10000000000;
    clear();
    disp.textContent = number;
});

button[17] = document.querySelector(`#row4 #column2`);    // .
button[17].addEventListener("click", (event) => {
    if (disp.textContent.includes('.')) {
        event.preventDefault();
    } else {
        result = result + button[17].textContent;
        disp.textContent = result;
    }      
});

button[18] = document.querySelector(`#row0 #column1`);    // delete
button[18].addEventListener("click", () => {
    if (disp.textContent.length <= 1) {
        result = 0;
    } else {
        arr = disp.textContent.split("");
        arr.splice(-1, 1);
        result = arr.join("");
    }
    disp.textContent = result;
    number = +disp.textContent;
});

window.addEventListener("keypress", (event) => {
    if (event.key === "7") {
        button[0].click();
    } else if (event.key === "8") {
        button[1].click();
    } else if (event.key === "9") {
        button[2].click();
    } else if (event.key === "4") {
        button[3].click();
    } else if (event.key === "5") {
        button[4].click();
    } else if (event.key === "6") {
        button[5].click();
    } else if (event.key === "1") {
        button[6].click();
    } else if (event.key === "2") {
        button[7].click();
    } else if (event.key === "3") {
        button[8].click();
    } else if (event.key === "0") {
        button[9].click();
    } else if (event.key === "+") {
        button[10].click();
    } else if (event.key === "-") {
        button[11].click();
    } else if (event.key === "*") {
        button[12].click();
    } else if (event.key === "/") {
        button[13].click();
    } else if (event.key === "Enter") {
        button[14].click();
    } else if (event.key === "c") {
        button[15].click();
    } else if (event.key === "%") {
        button[16].click();
    } else if (event.key === ".") {
        button[17].click();
    } else if (event.key === "Backspace") {
        button[18].click();
    }
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
    if (sum === Infinity) {
        sum = "Math Error";
    }
    return sum;
}

function operate(number, operator) {
    switch(operator) {
        case '+':
            add(number);
            compute();
            break;
        case '-':
            subtract(number);
            compute();
            break;
        case '*':
            multiply(number);
            compute();
            break;
        case '/':
            divide(number);
            compute();
            break;                
    }
}

function compute() {
    clear();
    if (sum.toString().length < 12) {
        disp.textContent = sum;
    } else {
        disp.textContent = sum.toString().slice(0, 11);
    }
}

function clear() {
    disp.textContent = 0;
    result = 0;
}

function allClear() {
    disp.textContent = 0;
    result = 0;
    sum = 0;
    op = 1;
    operator = [];
    operator[0] = "+";
    number = 0;
}
