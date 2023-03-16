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

sayHello(`Alex`);
sayHello(`Pat`);
sayHello(`World`);

function isFive(input) {
    if(input === 5){
        return true;
    } else{
        return false;
    }
}

console.log(isFive('5'));
isFive(5);