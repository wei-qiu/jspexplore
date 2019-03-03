//const varible cannot be changed after intially assigned
//const has function scope
//let is new in ES6
//let has block scope
//let value can be reassigned

var addToConstant = function(a) {
    const c = 5;
    return a + 5;
};

console.log(addToConstant(5));

var addToLet = (a) => {
    let c = 0;
    c = 5;
    return a + c;
}

console.log(addToLet(5));
