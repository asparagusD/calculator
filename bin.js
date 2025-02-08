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
button[0].addEventListener("click", () => {
    result = result * 10 + +button[0].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent;
});

button[1] = document.querySelector(`#row1 #column1`);    //8
button[1].addEventListener("click", () => {
    result = result * 10 + +button[1].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent; 
});

button[2] = document.querySelector(`#row1 #column2`);    //9
button[2].addEventListener("click", () => {
    result = result * 10 + +button[2].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent;
});

button[3] = document.querySelector(`#row2 #column0`);    //4
button[3].addEventListener("click", () => {
    result = result * 10 + +button[3].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent; 
});

button[4] = document.querySelector(`#row2 #column1`);    //5
button[4].addEventListener("click", (event) => {
    result = result * 10 + +button[4].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent;
});

button[5] = document.querySelector(`#row2 #column2`);    //6
button[5].addEventListener("click", () => {
    result = result * 10 + +button[5].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent; 
});

button[6] = document.querySelector(`#row3 #column0`);    //1
button[6].addEventListener("click", () => {
    result = result * 10 + +button[6].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent; 
});

button[7] = document.querySelector(`#row3 #column1`);    //2
button[7].addEventListener("click", () => {
    result = result * 10 + +button[7].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent; 
});

button[8] = document.querySelector(`#row3 #column2`);    //3
button[8].addEventListener("click", () => {
    result = result * 10 + +button[8].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent; 
});

button[9] = document.querySelector(`#row4 #column0`);    //0
button[9].addEventListener("click", () => {
    result = result * 10 + +button[9].textContent;
    if (result.toString().length < 12) {
        disp.textContent = result;
    } else if (result.toString().length > 20) {
        allClear();
    }   
    number = +disp.textContent; 
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
    allClear();
});

button[16] = document.querySelector(`#row0 #column2`);    //%
button[16].addEventListener("click", () => {
    number = number / 100;
    number = Math.floor(number * 10000000000) / 10000000000;
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
    if (sum === Infinity) {
        sum = "Math Error";
    }
    return sum;
}



function operate(number, operator) {
    switch(operator) {
        case '+':
            add(number);
            clear();
            if (sum.toString().length < 12) {
                disp.textContent = sum;
            } else {
                disp.textContent = sum.toString().slice(0, 11);
            }
            break;
        case '-':
            subtract(number);
            clear();
            if (sum.toString().length < 12) {
                disp.textContent = sum;
            } else {
                disp.textContent = sum.toString().slice(0, 11);
            }
            break;
        case '*':
            multiply(number);
            clear();
            if (sum.toString().length < 12) {
                disp.textContent = sum;
            } else {
                disp.textContent = sum.toString().slice(0, 11);
            }
            break;
        case '/':
            divide(number);
            clear();
            if (sum.toString().length < 12) {
                disp.textContent = sum;
            } else {
                disp.textContent = sum.toString().slice(0, 11);
            }
            break;                
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