let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ["0","1","2","3","4","5","6","7","8","9","."];
const action = ["-","+","*","/"];

const out = document.querySelector(".calc-screen p");

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
    // Եթե կնոպկա չի սեղմված
    if(!event.target.classList.contains("btn")) return;
    // Եթե սեղմված է ՋՆՋ կնոպկան
    if(event.target.classList.contains("ac")) return;
    out.textContent = '';
    // Ստանում ենք սեղմված կնոպկան
    const key = event.target.textContent;

    // Եթե սեղմած է 0-9 կամ ․ կնոպկան
    if(digit.includes(key)) {
        if(b === '' && sign === ''){ 
            a += key;
            out.textContent = a;
        }
        else if(a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    // Եթե սեղմված է + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //Եթե սեղմած է =
    if(key === "=") {
        if(b === "") b = a;
        switch (sign) {
            case"+":
                a = (+a) + (+b);
                break;
            case"-":
                a = a - b;
                break;
            case"*":
                a = a * b;
                break;   
            case"/":
                if(b === "0") {
                    out.textContent = "Սխալ";
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;               
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}