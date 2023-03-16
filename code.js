// helloWorld function 
const helloWorld= function () {
    return `Hello, World!`;
}

function sayHello(input){
    if (typeof input === 'string') {
        return "Hello, " + input + "!";
    }else{
        return `Hello, World!`;
    }
}

sayHello(`Alex`);
sayHello(`Pat`);
sayHello(`World`)