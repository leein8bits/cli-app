const fs =require('fs');
console.log("Hello World");
class Player {
    constructor(name, hp) {
        this.name = name,
            this.gold = 10,
            this.hitPoints = hp,
            this.foodBag = [{
                    name: "apple",
                    valueGold: 5,
                    valueHp: 3
                },
                {
                    name: "banana",
                    valueGold: 10,
                    valueHp: 7
                }
            ]
    }
    eat(foodName) {
         this.foodBag.forEach(item => {
            if (item.name === foodName) {
                this.hitPoints += item.valueHp;
                console.log(item);
                console.log(`You ate the ${foodName} and feel better than you did!\n HP:${this.hitPoints}`);
                this.foodBag.splice(item,1)

            } else {
                console.log(`I don't see ${foodName} in your backpack but I do see [${item.name}]`);
                return
            }
        })
        // this.hitPoints +=foodIndex[0].valueHp;
    }
    look(thing){
        if(thing===this.name || "me"){
            console.log(`\nYou are ${this.name}.
            You have ${this.gold} pieces of gold.
            You have ${this.hitPoints} hit points.
            You have ${this.foodBag} in your backpack.`)
        } else if( thing ==="backpack"){
            
        } 
        
    }

};
let player = new Player("Leebo", 10);

// console.log(player);
// player.eat("twinkie");
// console.log(player);
process.stdin.on('data', function(input){
    //console.log(`<${input.toString()}>`);
    if(input.toString().substr(0,4) == "exit"){
        process.stdin.destroy();
    }
    if(input.toString().substr(0,3) == "eat"){
        console.log(`this is the input[${input.toString().trim()}]`)
        player.eat(input.toString().substr(4).trim())
        
    } 
    if(input.toString().substr(0,4) == "look"){
        console.log(`this is the input[${input.toString().trim()}]`)
        player.look();
        
    } else {
        console.log('Woot ', input.toString()); 
    }
});
