
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

console.log(createHelloWorld());

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */