// topic:2-8: Union, Intersection and Enum Types

type NoobDeveloper={
    name:string
}
// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// }

//  Intersection
type JuniorDeveloper=NoobDeveloper &{
    expertise:string,
    experience:number
}
// Enum Types
enum Level{
    junior="junior",
    mid="mid",
    senior="senior",
}
type Nextlaveldeveloper=JuniorDeveloper & {
    lidershipexperience:number,
    // lavel:"junior" | "mid" |"senior",
    lavel:Level,
}

const newDeveloper:NoobDeveloper | JuniorDeveloper={
    name:'Julfiker ali',
    expertise:'Javascript',
    experience:3,
}

const developer:Nextlaveldeveloper ={
    name:'Rana Islam',
    expertise:'typescript',
    experience:2,
    lidershipexperience:1,
    lavel:Level.senior,
}