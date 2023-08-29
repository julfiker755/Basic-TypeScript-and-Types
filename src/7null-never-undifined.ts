// topic::2-9: Null, Unknown and Never Types

// null
const searchName=(value:string | null)=>{
    if(value === null){
        console.log("There is nothing to search")
    }else{
        console.log("Searching ......")
    }
}
searchName(null)

// Unknown
const getMyCarspeed=(speed:unknown)=>{
    if(typeof speed === "number"){
        const convertspeed=(speed *1000)/3600
        console.log(`My speed is ${convertspeed}`)
    }
    if(typeof speed === 'string'){
        const [value,unit]=speed.split(" ") // ['10','kmh^-1']
        const convertspeed=(parseFloat(value) *1000)/3600
        console.log(`My speed is ${convertspeed}`)
    }else{
        console.log('There is wrong type')
    }
}

getMyCarspeed(10)
getMyCarspeed('10 khm^-1')
getMyCarspeed(true)

// never
function throwerror(message:string):never{
    throw new Error(message)
}
throwerror('vai Error hoyche')