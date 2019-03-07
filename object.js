const debug = require('debug');
var obj = new Object();
var obj2 = {};
console.dir(obj);
console.dir(obj2);

//singleton object
var Pizza = {
    crust: 'thin',
    toppings: 3,
    hasBacon: true,
    howmanyToppings: function(){
        return this.toppings;
    }
};

console.log(Pizza.toppings);
console.log(Pizza.howmanyToppings());
Pizza.price = 'S9.99';
console.dir(Pizza);
delete(Pizza.price);
console.log(Pizza);

//create new object from another object
//using function object
var ChicagoPizza = function() {

    //public variable defined start with this
    this.name = 'chicago pizza';
    this.crust = 'thin';
    this.toppings = 3;
    this.hasBacon = true;

    //private variable without this.
    var _price = '$9.99'; 

    //public getter
    this.getPrice = function() {
        return _price;
    };

    //public setter
    this.setPrice = function(price) {
        _price = price; 
    };
};

//cannot access property using this way
console.log(ChicagoPizza);

//test chicagoPizza is craeted from ChicagoPizz
console.log(chicagoPizza instanceof ChicagoPizza);

//in order to access the property, 
//create an object from ChicagoPizza
var chicagoPizza = new ChicagoPizza();
console.log(chicagoPizza.name);

//but private variable is not shown
console.log(chicagoPizza);

//access to private vairlable
console.log(chicagoPizza.getPrice());
chicagoPizza.setPrice('$11.99');
console.log(chicagoPizza.getPrice());


console.log(JSON.stringify(chicagoPizza));
//console.dir(chicagoPizza, {depth:4});
//console.dir(chicagoPizza.constructor, {depth:4});

//does not work
debug('debug string');
debug('%O', chicagoPizza.constructor);

//closure used to create an object
var NYPizza = function() {
    var crust = 'thick';
    var toppings = 5;
    var price = '$10.99';

    var getPrice = function(){
        return price;
    };

    var tmp = {};
    tmp.getPrice = getPrice;

    return tmp;
}

var nyPizza = new NYPizza();
console.log(nyPizza.getPrice());

//closure used to be a function factory

var Factory = function() {
    var tool = 'wrech';

    return function createTool() {
        return tool;
    }
}

var createToolFunc = new Factory();
var tool = createToolFunc();
console.log(tool);