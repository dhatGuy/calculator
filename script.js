const remove = document.querySelector('.remove');
const result = document.querySelector('.screen');
const operators = document.querySelectorAll('.keys');
const numbers = document.getElementsByClassName('number');

// const operate = (num1, func, num2) => {
//     let math = num1 + func + num2;
//     console.log(eval(math))
// }

const displayNumbers = () => {
    for (i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', e => {
            let value = result.innerHTML;
            if (result.innerHTML === '0') {
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

const operator = () => {
    const operators = document.querySelectorAll('.operator');
    operators.forEach(key => {
        key.addEventListener('click', e => {
            result.innerHTML += e.target.id;

        })
    })
}
window.addEventListener('keydown', e => {
    let value = result.innerHTML;
    if (result.innerHTML === '0') {
        result.innerHTML = ''
    }
    switch (e.key) {
        case '-':
            result.innerHTML += '-';
            break;
        case '1':
            result.innerHTML += 1;
            break;
        case '2':
            result.innerHTML += 2;
            break;
        case '3':
            result.innerHTML += 3;
            break;
        case '4':
            result.innerHTML += 4;
            break;
        case '5':
            result.innerHTML += 5;
            break;
        case '6':
            result.innerHTML += 6;
            break;
        case '7':
            result.innerHTML += 7;
            break;
        case '8':
            result.innerHTML += 8;
            break;
        case '9':
            result.innerHTML += 9;
            break;
        case '0':
            result.innerHTML += 0;
            break;
        case '/':
            result.innerHTML += '/';
            break;
        case '+':
            result.innerHTML += '+';
            break;
        case '*':
            result.innerHTML += '*';
            break;
        case '.':
            if (!result.innerHTML.includes('.')) {
                result.innerHTML += '.'
            }
            break;
        case 'Enter':
            let ans = eval(result.innerHTML);
            result.innerHTML = ans;
            if(result.innerHTML.length > 14){
                Math.round(result.innerHTML)
            }
            break;
        case 'Backspace':
            backspace();
            break;
        case 'Delete':
            result.innerHTML = 0;
            break;
    }
})

const calculate = () => {
    const equal = document.querySelector('.equal');
    equal.addEventListener('click', () => {
        let ans = eval(result.innerHTML);
        result.innerHTML = ans;
        return result.innerHTML;
    })
}


remove.addEventListener('click', backspace);

let decimal = document.querySelector('.point');
decimal.addEventListener('click', () => {
    if (!result.innerHTML.includes('.')) {
        result.innerHTML += '.'
    }
})

const calculator = () => {
    clearScreen()
    displayNumbers()
    operator()
    calculate()
}

calculator();