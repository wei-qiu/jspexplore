const x = {};
const a = {};
const b = { num: 1};

//if put object as a key, then javascript only support 1 object as a key which is the last one
//in this case, will be b
x[a] = 'a'; 
x[b] = 'b';
x[b] = b;
console.log(x);
console.log(x[a]);
console.log(x[b])

//because javascript only support 1 object as a key
//that is why map/weakmap is introduced

//create a instance of Map using constructor
const map = new Map();
map.set(a, 'a');
map.set(b, b);
console.log(map);
console.log(map.get(a));
console.log(map.get(b));

//chain this
const c = {}, d = {};
map.set(c, 'c').set(d, 'd');
console.log(map);

const ary = [...map];
console.dir(ary);
console.dir(map);
console.table(ary);
console.table(map);


//weakmap, since map will hold the key in memory 
//even the key is deleted, in order to free the memory
//weakmap can be used


var weakMap2 = new WeakMap();
const obj2 = {};
weakMap2.set(obj2, 'weak map 2');
console.table(weakMap2);
console.log(weakMap2.get(obj2));


{
    let x = {
        a: [1, 2]
    };

    let y = {
        b: [3,4]
    };

    //x is attached to the maps, so x will not be garbadge collected.
    console.log(map2);
    var map2 = new Map();
    map2.set(x, 'sth');
    map2.delete(x);
    
    //in weakmap, x is not hold 
    var weakMap = new WeakMap();
    weakMap.set(y, 'weak map');
    weakMap.delete(y);
}

console.log('after Map key is deleted, and call get(key), returned: ' + map2.get(x));
//x is attached to the maps, so x will not be garbadge collected.
console.table(map2);
console.log('after weakmap key is deleted to call weakMap, will throw exception: ' + weakMap.get(y));

