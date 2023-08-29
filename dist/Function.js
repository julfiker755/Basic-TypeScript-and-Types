"use strict";
// -------------------
// topic:Function,Spread, Rest, Default Parameters and Destructuring
// ------------------
// normal function/default parameter
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(6);
// Spread oprator
const myfriend = ['julfiker', 'shuvo', 'tapus', 'selim'];
const newfriend = ['babul', 'kabbo', 'tapus', 'naimur'];
myfriend.push(...newfriend);
console.log(myfriend);
// arrow function
const addarrow = (num1, num2) => num1 + num2;
const arr = [2, 4, 6];
const newarry = arr.map((elem) => elem * elem);
const person = {
    name: 'Julfiker',
    balance: 5,
    addbalance(monney) {
        return `The you new monney ${this.balance + monney}`;
    }
};
// rest parameter 
// const greetfrind = (friend1, friend2, friend3) => 
