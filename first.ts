let myMoney = 15;
myMoney = 50;
myMoney = 150;


let age: number = 12;
age = 12;
console.log(age);

let club: string = "Barcelona";
console.log(club);

let isFamous: boolean = false;


const leader: string = "Messi";





//typescript function

function add(num1:number, num2: number) {
    return num1 + num2;
}
add(12, 32);

function sub(num1:number, num2: number): number {   
    return num1 - num2;
}

function userName(num1: any, num2: number| string){
    return num1 + num2;
}

const multiply = (num: number, num2: number): number => 2 *3;

let multiply2 : (num: number, num2: number) => number;

multiply2 = (x, y) => x * y;