// ternary operator
const age:number=23
if(age >= 18){
    console.log('Yes')
}else{
    console.log('No')
}
// const isage=age >= 18 ? 'Yes':'No'
// console.log(isage)

// Nullish Coeslancing Operator---null/undifined
const isAuthenticationuser='';
const userName=isAuthenticationuser ?? 'Guest';
const userName2=isAuthenticationuser ? isAuthenticationuser :'Guest';
console.log({userName},{userName2})