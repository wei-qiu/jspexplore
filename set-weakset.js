const color = require('colors/safe');
//set contains a unique value set of data
//must use constructor, no set literal
//current set does not have intersect, union methods
const mySet = new Set();
//chain add
mySet.add(1).add(2);
console.log(mySet);

const mySet2 = new Set([1,2,3]);
console.log(color.rainbow('before add another 1 and 2 value:'));
console.log(mySet2);
mySet.add(1).add(2); //set would ignore 1, 2 since already exists
console.log(color.rainbow('after add another 1 and 2 value: '));
console.log(mySet2);

//set has iterator
mySet.forEach(i => console.log(i));
for(let j of mySet2){
    console.log(color.red(j));
}

console.table(mySet2);
console.dir(mySet2);

const duplicateAry = [1,2,2,3];
console.log(...new Set(duplicateAry));

const mySet3 = new Set([3,4.5]);
var it = mySet3.entries;
console.dir(it);

const ws = new WeakSet();
class SomeClass {
    constructor() {
        ws.add(this);
    }

    method() {
        if(!ws.has(this)) {
            throw new TypeError('SomeClass.prototype.method called incompatible object!');
        }
        else {
            console.log(color.rainbow('valid call'));
        }
    }
}

var sc = new SomeClass();
sc.method();

var ob = new Object();
sc.method(ob);
