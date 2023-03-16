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
