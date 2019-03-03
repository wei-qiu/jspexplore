var addToThis = function(){
    {
        let j = 1;
        console.log(`i is ${i}`); //variable definition is hoisted, but not the value get hoisted which means undifined.
        console.log(`j is ${j}`);
     
        try {
            console.log(`k is ${k}`); //k is not hoisted will throw the error
        } catch(error) {
            console.log(error.message);
        }
        let k = 1; //not hoist will throw an error
    }

    var i = 0;

    console.log(`i is ${i}`);
    try{
        console.log(`j is ${j}`); //block scope, will throw an error
    } catch(error){
        console.log(error.message);
    }

    const a = 1;

    try {
        a = 3;
       
    } catch(error2){
        console.log(error2.message);
    }

    const arr = [1,2];
    arr.push(3);
    console.log(arr);

    try{
        arr = [4, 5, 6];
    } catch(e){
        console.log(e.message);
    }
    
}();