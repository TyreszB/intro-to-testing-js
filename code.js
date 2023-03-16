// helloWorld function 
const helloWorld= function () {
    return `Hello, World!`;
}

function sayHello(input){
    if (typeof input === 'string') {
        return "Hello, " + input + "!";
    }else{
        return `not a string`;
    }

}

function isFive(input) {
    if(input === 5){
        return true;
    } else{
        return false;
    }
}

function isEven(input){
    if (input % 2 == 0){
        return true;
    } else{
        return false;
    }
}

function isVowel(input){
    if(input === 'a'){
        return true;
    }else if(input === 'A'){
        return true;
    }else{
        return false
    }
}

function add(num1,num2){
    return (Number(num1)  + Number(num2));
}

console.log(add())
