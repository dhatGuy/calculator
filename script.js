console.clear();
const remove = document.querySelector('.remove');
const result = document.querySelector('.screen');
const operators = document.querySelectorAll('.keys');
const numbers = document.getElementsByClassName('number');

const operate = (num1, func, num2) => {
    let math = num1 + func + num2;
    console.log(eval(math))  
}

const displayNumbers = () => {
    for (i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', e => {
            let value = result.innerHTML;
            if(result.innerHTML === '0'){
                result.innerHTML = ''
            }
            result.innerHTML += e.target.innerHTML;
        })
    }
}

const clearScreen = () => {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        result.innerHTML = 0;
    })

}

const backspace = () => {
    let value = result.innerHTML;
        result.innerHTML = value.substr(0, value.length - 1);
}

const operator = () =>{
    const operators = document.querySelectorAll('.operator');
    operators.forEach(key =>{
        key.addEventListener('click', e=>{
            console.log(e.currentTarget.id)
            result.innerHTML += e.target.id;
        })
    })
}
const equal = document.querySelector('.equal');
equal.addEventListener('click', () =>{
    let ans = eval(result.innerHTML)
    result.innerHTML = ans;
})

remove.addEventListener('click', backspace);

let decimal = document.querySelector('.point');
decimal.addEventListener('click', ()=>{
    if(!result.innerHTML.includes('.')){
        result.innerHTML += '.'
    }
})

clearScreen()
displayNumbers()
operator()