let title = document.getElementById('root');
let myMain = document.getElementById('main');
let myHeroes = [];

let heroes = {
    heroes1: {
        name: "batman",
        power: "money",
        suitColor: " black",
    },

    heroes2: {
        name: "superman",
        power: "fly",
        suitColor :" red",
    },
    heroes3 : {
        name: "joker",
        power: "psychadelics",
        suitColor : "purple ",
    },
}

title.style.backgroundColor = "blue";

myHeroes.push(heroes.heroes1);
myHeroes.push(heroes.heroes2);
myHeroes.push(heroes.heroes3);
console.log(myHeroes);
heroes.heroes2.car = 'i can fly';
