


// unit tests for isVowel
describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it(`should return a Boolean no matter what the input`, function() {
        expect(typeof isVowel()).toBe(('boolean'));
    });
    it(`should return true when passed "a"`, function() {
        expect(isVowel("a")).toBe(true);
    });
    it(`should return true when passed A`, function() {
        expect(isVowel("A")).toBe(true);
    });
    it(`should return false when passed y`, function() {
        expect(isVowel("y")).toBe(false);
    });
    it(`should return false when called with 4`, function() {
    expect(isVowel(4)).toBe(false);
    });
    it(`should return false when called with "banana".`, function() {
        expect(isVowel("banana")).toBe(false);
    });
    it(`should return false when passed true and false as the inputs`, function() {
        expect(isVowel(true, false)).toBe(false);
    });
    it(`should return false`, function() {
        expect(isVowel()).toBe(false);
    });
});

// isVowel() returns false

// unit tests for isFive
describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('Ensure that isFive returns a boolean no matter what the input', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('Ensure that isFive returns true when passed 5 when executed', function() {
        expect(isFive(5)).toBe(true);
    });
    it("If we pass in the string 5 return true for that.", function() {
        expect(isFive("5")).toBe(true);
    });
});

// unit tests for isEven
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
     it(`should return a Boolean no matter what the input`, function() {
        expect(typeof isEven()).toBe(('boolean'));
    });
    it(`should return true when passed 2`, function() {
        expect(isEven(2)).toBe(true);
    });
    it(`should return true when passed -4`, function() {
        expect(isEven(-4)).toBe(true);
    });
    it(`should return false when passed 3`, function() {
        expect(isEven(3)).toBe(false);
    });
    it(`should return false when called with isEven("banana")`, function() {
        expect(isEven("banana")).toBe(false);
    });
    it(`should return true when called with isEven("8")`, function() {
        expect(isEven("8")).toBe(true);
    });
    it(`should return false when passed with isEven(Infinity)`, function() {
        expect(isEven(Infinity)).toBe(false);
    });
});


// unit tests for sayHello

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello("")).toBe("string");
    });
    it('should return the string "Hello, Jane!" when called with Jane', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when called with Alex', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when called with Pat', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it(`should return "Hello, World!" when called with no argument`, function() {
        expect(sayHello()).toBe("Hello, World!");
    });

    it(`should return "Hello, World!" when called with true`, function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it(`should return "Hello, World!" when called with false`, function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

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

