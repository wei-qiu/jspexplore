const profile = {
    firstName: null,
    lastName:null,
    setName: function(name) {
        //regular function has its own this 
        //and since it is not constructor function, 
        //then this means global, not profile
        let splitName = function(name){
            let nameArray = name.split(' ');
            this.firstName = nameArray[0]; 
            this.lastName = nameArray[1];
            console.log(this === global); //this means global
        }

        splitName(name);
    }
};

profile.setName('david smith');
console.log(profile.firstName);
console.log(global.firstName);

const profile2 = {
    first_Name: null,
    last_Name:null,
    setName: function(name) {
        //arrow function has no its own this, 
        //this means the object contains the arrow function
        //this means profile2
        let splitName = (name) => {
            let nameArray = name.split(' ');
            this.first_Name = nameArray[0]; 
            this.last_Name = nameArray[1];
            console.log(this); //this means profile2
            console.log(this === profile2);
        }

        splitName(name);
    }
};

profile2.setName('mike smith');
console.log(profile2.first_Name);
//console.log(global.first_Name);