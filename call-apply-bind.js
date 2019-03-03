var obj = {num: 2};

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1, 3, 5)); //functionname.call(obj, function arguments)

var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr)); //apply is used for arr arguments

var addToThis2 = function(a) {
    return this.num + a;
};

console.log(addToThis2.call(obj, 3));

console.log(addToThis2.apply(obj, [3])); //apply requires array like arguments passed in

var obj2 = {num: 5};
console.log(addToThis.apply(obj2, arr));

console.dir(addToThis.bind(obj)(1, 2, 3));  //bind make addToThis to be obj's method