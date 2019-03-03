//primary data type" string, number and boolean
var i = 0xff;
console.log(i);
console.log(typeof(i));

var j = 045; //octal number
console.log(j); 
console.log(typeof(j));

var k = 0.345; //float
console.log(k); 
console.log(typeof(k));

var m = "02";
var m2 = Number(m);
console.log(m2);
console.log(1/0);
console.log(1/+0);
console.log(1/-0);

//NnN Not number
var n = 'babala';
var n2 = Number(n);
console.log(n2);
console.log(typeof(n2));
//composite date type: Array, Object
var o = {};
console.log(typeof(o));

var arr = [];
console.log(typeof(arr));
//Special data type: Undefined, Null
var x;
console.log(x);
console.log(typeof(x));

var y = null;
console.log(y);
console.log(typeof(y));

let z = 2 + '2'
console.log(z);
console.log(typeof(z));

z = 2 + 2 + '2';
console.log(z);
console.log(typeof(z));

z = '2' + 2 + '2';
console.log(z);
console.log(typeof(z));

z = 2 + true;
console.log(z);
console.log(typeof(z));

z = true + 2;
console.log(z);
console.log(typeof(z));

//boolean convert number first, then number convert string
//string is always the first, then number, then boolean
z = 2 + true + '2';
console.log(z);
console.log(typeof(z));

z = true + '2';
console.log(z);
console.log(typeof(z));

//any > 0 number will be true
z = Boolean(5);
console.log(z);
console.log(typeof(z));

//any string will be converted to true
z = Boolean("false");
console.log(z);
console.log(typeof(z));

//empty string will be converted to false
z = Boolean("");
console.log(z);
console.log(typeof(z));

z = Boolean(null);
console.log(z);
console.log(typeof(z));

x = '';
console.log( `x = '', x == 0 is ${x == 0}` );
console.log( `x = '', x === 0 is ${x === 0}` );
if(x){
    console.log(x);
}

if((x !== undefined) || (x !== null) || (x !== 0)){

}

//be careful empty object will be as true
arr =[];
if(arr){
    console.log('empty array will be seen as true');
};

obj = {}
if(obj){
    console.log('empty object will be seen as true');
};

