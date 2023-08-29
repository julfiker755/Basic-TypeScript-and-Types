// -------------------
// topic:Function,Spread, Rest, Default Parameters and Destructuring
// ------------------

// normal function/default parameter
function add(num1:number,num2:number=10):number{
    return num1+num2
}
add(6)
// Spread oprator
const myfriend=['julfiker','shuvo','tapus','selim']
const newfriend=['babul','kabbo','tapus','naimur']
myfriend.push(...newfriend)
// console.log(myfriend)

// arrow function
const addarrow=(num1:number,num2:number):number=>num1+num2
const arr=[2,4,6]
const newarry=arr.map((elem:number)=>elem*elem)

const person:{
    name:string,
    balance:number,
    addbalance(monney:number):string // number,string,void::::>>console.log(The you new monney ${this.balance+monney})
}={
    name:'Julfiker',
    balance:5,
    addbalance(monney:number){
        return `The you new monney ${this.balance+monney}`
    }
}
// rest parameter 
// const greetfrind=(...frind:string[])=>frind.forEach(e=>console.log(`Hi ${e}`))
// greetfrind('bulbul','tapus','kabbo','topon','tumi','bela')

// array and object Destructuring
const mybestfrnd={
    fullname:'Julfiker Rahaman Jim 2',
    age:66,
}
const {fullname:myfullname}=mybestfrnd
console.log(myfullname)