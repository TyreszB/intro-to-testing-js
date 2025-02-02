// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe(`helloWorld`, function(){
    it('should take in sayHello as a function', function () {
        expect(typeof sayHello).toBe(`function`);
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe(`string`);
    });
    it('should return a string `Hello, Alex!', function () {
        expect(sayHello(`Alex`)).toBe(`Hello, Alex!`);
    });
    it('should return a string `Hello, Pat!', function () {
        expect(sayHello(`Pat`)).toBe(`Hello, Pat!`);
    });
    it('should return a string `Hello, World`!', function () {
        expect(sayHello(`World`)).toBe(`Hello, World!`);
    });
})

describe(`isFive`, function () {
    it('should a take in a function called isFive', function () {
        expect(typeof isFive).toBe(`function`);
    });
    it('should always return a boolean expression', function () {
        expect(typeof isFive()).toBe(`boolean`);
    });
    it(`should return '5' as a boolean` , function () {
        expect(isFive('5')).toBe(false);
    });
});

describe(`isEven`, function (){
    it('should define a function named isFive', function () {
        expect(typeof isEven).toBe(`function`)
    });
    it('should return a boolean whn called', function () {
        expect(typeof  isEven()).toBe(`boolean`);
    });
    it('should return true when isEven(2)', function () {
        expect (isEven(2)).toBe(true);
    });
    it('should return true when isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when isEven("banana")', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('should return false when isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean is called', function () {
        expect(isEven('boolean')).toBe(false);
    });
})

describe(`isVowel`, function(){
    it('should define a function', function (){
        expect(typeof isVowel).toBe(`function`);
    });
    it('should return a boolean', function (){
        expect(typeof isVowel()).toBe(`boolean`)
    });
    it('should return "a" as true', function (){
        expect(isVowel("a")).toBe(true)
    });
    it('should return "A" as true', function (){
        expect(isVowel("A")).toBe(true)
    });
    it('should return "y" as false', function (){
        expect(isVowel("y")).toBe(false)
    });
    it('should return 4 as false', function (){
        expect(isVowel("4")).toBe(false)
    });
    it('should return "y" as false', function (){
        expect(isVowel('boolean')).toBe(false)
    });
    it('should return "banana" as false', function (){
        expect(isVowel("banana")).toBe(false)
    });
    it('should return "y" as false', function (){
        expect(isVowel()).toBe(false)
    });

});

describe(`add`, function (){
    it('should define a function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return the value of 2 and 3 equals 5', function (){
        expect(add(3,2)).toBe(5);
    });
    it('should return the value of -9 and -3 equals -12', function (){
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return the value of "5" and 6 equals 11', function (){
        expect(add(6,'5')).toBe(11);
    });
    it('should return the value of "-4" and "10" equals 6', function (){
        expect(add("10","-4")).toBe(6);
    });
    it('should return the value of "banana" and "split" equals NaN', function (){
        expect(add('banana','split')).toBe('nan');
    });
    it('should return the value of 2 and "apples" equals NaN', function (){
        expect(add(2,'apples')).toBe('nan');
    });
    it('should return the value of "banana" and "split" equals NaN', function (){
        expect(add()).toBe('nan');
    });
});