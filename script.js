const displayE1 = document.querySelector('.display-1');
const displayE2 = document.querySelector('.display-2');
const displayResult = document.querySelector('.display-result');
const allClear = document.querySelector('.all-clear');
const lastEntityClear = document.querySelector('.last-entity-clear');
const numberE1 = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const oprator = document.querySelectorAll('.opration');


let disNum1 = '';
let disNum2 ='';
let result = null;
let lastOperation = '';
let haveDot = false;

Array.from(numberE1).forEach((number) => {
    number.addEventListener("click", (e) => {
        if(e.target.innerText === "." && !haveDot){
            haveDot = true;
        }else if (e.target.innerText === "." && haveDot){
            return;
        }
        disNum2 += e.target.innerText;
        displayE2.innerText = disNum2;    
    })
});

Array.from(oprator).forEach((opration)=>{
    opration.addEventListener("click", (e)=>{
        if(!disNum2) result;
        haveDot = false;
        const oprationName = e.target.innerText;
        if(disNum1 && disNum2 && lastOperation){
            mathOpration();
        }else{
            result = parseFloat(disNum2);
        }
        clearVar(oprationName);
        lastOperation = oprationName;
        console.log(result);  
    })
});

function clearVar(name = ''){
    disNum1 += disNum2 + '' + name + '';
    displayE1.innerText = disNum1;
    displayE2.innerText = '';
    disNum2 = '';
    displayResult.innerText = result;
} 

function mathOpration(){
    if(lastOperation === "x"){
        result = parseFloat(result) * parseFloat(disNum2);    
    }else if(lastOperation === "+"){
        result = parseFloat(result) + parseFloat(disNum2);
    }else if(lastOperation === "-"){
        result = parseFloat(result) - parseFloat(disNum2);
    }else if(lastOperation === "/"){
        result = parseFloat(result) / parseFloat(disNum2);
    }else if(lastOperation === "%"){
        result = parseFloat(result) % parseFloat(disNum2);
    }
}

equal.addEventListener("click", (e)=>{
    if(!disNum1 || !disNum2) return;
    haveDot = false;
    mathOpration();
    clearVar();
    displayE2.innerText = result;
    displayResult.innerText = '';
    disNum2 = result;
    disNum1 = '';
});

allClear.addEventListener("click", (e)=>{
    displayE1.innerText = '0';
    displayE2.innerText ='0';
    disNum1 = "";
    disNum2 = "";
    result = "";
    displayResult.innerText = "0";
});

lastEntityClear.addEventListener("click",(e)=>{
    displayE2.innerText = "";
    disNum2 = "";
});

window.addEventListener('keydown',(e)=>{
    if(e.key === '0'||
       e.key === '1'||
       e.key === '2'||
       e.key === '3'||
       e.key === '4'||
       e.key === '5'||
       e.key === '6'||
       e.key === '7'||
       e.key === '8'||
       e.key === '9'||
       e.key === '.'
    ){
        clickButtonE1(e.key);
    }else if(e.key === '+'||
             e.key === '-'||
             e.key === '%' 
    ){
        clickOpration(e.key);
    }else if(e.key === "x"){
        clickOpration();
    }
    else if(e.key == "Enter" || e.key === "="){
        clickEqual();
    }
});

function clickButtonE1(key){
    numberE1.forEach(button =>{ 
        if(button.innerText === key){
            button.click();
        }
    })  
};

function clickOpration(key){
    oprator.forEach(opration =>{
        if(opration.innerText === key){
            opration.click();
        }
    })
};

function clickEqual(){
    equal.click();
}









