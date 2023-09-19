// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello (name) {
    if (name === undefined || name === true || name === false){
        return "Hello, World!";
    }
    return `Hello, ${name}!`;
}

function isFive (number) {
    if ( number === '5') {
        return true;
    } else {
        return Boolean(number);
    }
}

function isEven (input) {
    if(input % 2 === 0 || input === 'number'){
        return true;
    } else{
        return false;
    }
}

function isVowel (input){
    return ("aeiouAEIOU".indexOf(input) != -1);
}

function add (a, b){
    return parseInt(a) + parseInt(b);
}