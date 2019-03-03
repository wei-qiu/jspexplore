let promiseToCleanTheRoom = new Promise(function(resolve, reject){

    //clean room

    let isClean = false;

    if(isClean) {
        resolve('Clean');
    } else {
        reject('Not clean');
    }

});

let cleanRoom = function() {
    return new Promise(function(resolve, reject){
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject){
        resolve(`${message} Removed the garbage`);
    });
};

let winIcecream = function(message) {
    return new Promise(function(resolve, reject){
        resolve(`${message} Win Icecream`);
    });
};

promiseToCleanTheRoom.then(function(fromResolve){
    console.log(`the room is ${fromResolve}`);
}).catch(function(fromReject) {
    console.log(`the room is ${fromReject}`);
} );

cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIcecream(result);
}).then(function(result){
    console.log(`${result}; Finished.`);
});

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(result){
    console.log(`all finished.`);
});

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(result){
    console.log(`one of promises is finished.`);
});