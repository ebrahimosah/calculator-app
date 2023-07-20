const colorThemes = document.querySelectorAll('[name="theme');
const numbers = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

const storeTheme = (theme)=>{
    localStorage.setItem('theme', theme);
}

const retriveTheme = ()=>{
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach(themeOption=>{
        if(themeOption.id === activeTheme){
            themeOption.checked = true;
        }
    })
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click',()=>{
        storeTheme(themeOption.id);
    })
})


let firstNumber = '';
let secondNumber = '';

let operator = '';

function addNumber(number) {
    if (operator === ''){
        firstNumber += number;
        screen.innerText = firstNumber;
    } else{
        secondNumber += number;
        screen.innerText = secondNumber;
       
    }
};

function addSymbol(symbol) {
    operator = symbol;
    screen.innerText='';
    // firstNumber = '';
    // secondNumber='';
}


function calculate(){
    if (firstNumber !== '' &&  operator !== '' && secondNumber !== ''){
        // let secondNumber = screen.innerText;
        try{
            const result = math.evaluate(`${firstNumber} ${operator} ${secondNumber}`)
            console.log(result);
            screen.innerText = result;
            firstNumber = result.toString();
            secondNumber='';
            operator = '';
        } catch(error){
            console.log(error);
        }
    }
}

function clearResult(){
    firstNumber = '';
    secondNumber='';
    operator = '';
    screen.innerText = '';
}











document.onload = retriveTheme();