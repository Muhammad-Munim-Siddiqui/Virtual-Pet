var pet = {
    name : "Fido",
    Type : "dog",
    age :5 ,
    happiness :30,
    hunger : 20,

    feed: function(){
        this.hunger -= 10;
        if(this.hunger < 0){
            this.hunger = 0;
        }
        alert(`${this.name} has feed .His Hunger is ${this.hunger}`);
    },

    play: function(){
        this.happiness += 20;
        this.hunger += 10;
        if(this.happiness > 100){
            this.happiness = 100;
        }
        if(this.hunger < 0){
            this.hunger = 0;
        }
        alert(`${this.name} had fun playing! Happiness is now at ${this.happiness} and hunger is ${this.hunger}.`);
    },

    agePet: function(){
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;
        if(this.happiness < 0){
            this.happiness = 0;
        }
        if(this.hunger > 100){
            this.hunger = 100;
        }
        
        alert(`${this.name} is now ${this.age} years old! Happiness is ${this.happiness} and hunger is ${this.hunger}.`)
    },

    getInfo:function(){
        alert(`Pet Name: ${this.name}\nType: ${this.Type}\n Age: ${this.age}\n Happiness: ${this.happiness}\n Hunger: ${this.hunger}`)
    },
};

// while(true){
//     let action = +prompt(`What would you like to do\n1.Feed \n2.Play \n3.Age \n4.GEt Info \n5.Get Exit`);

//     switch (action) {
//         case 1:
//             pet.feed();
//             break;
    
//         case 2:
//             pet.play();
//             break;
    
//         case 3:
//             pet.agePet();
//             break;
    
//         case 4:
//             pet.getInfo();
//             break;
    
//         case 5:
//             alert("Thanks for the playing with the pet!");
//             break;
    
//         default:
//             alert("Invalid choice!");
//             break;
//     }

//     if(action === 5){
//         break;
//     }
// }