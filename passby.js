let a = 1;

let change = (val) => {
    //assign will lost the reference
    val = 2;    
};

change(a);
console.log(a);

let b = {num: 1};

let change2 = (val) => {
    //reassign will lose the object referece
    val = {};
    console.log(val)
};

change2(b);
console.log(b);

let change3 = (val) => {
    //mutate object attribute will keep the reference
    val.num = 2;
};

change3(b);
console.log(b);

let c = {num: 1};
let d = c;
console.log('before change d property:')
console.log(c);
console.log(d);

console.log('change d.num:')
d.num = 2;

console.log(c);
console.log(d);

console.log('reassign c a new empty object:')
c = {};
console.log(c);
console.log(d);