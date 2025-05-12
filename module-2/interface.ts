{

// interface 

// Note: In TypeScript, both `type` and `interface` can be used to define the shape of an object. However, there are some differences between them. and type alias are similar in many ways, but they have some differences.

// 1. `type` can be used to define primitive types, union types, and intersection types, while `interface` is primarily used to define object shapes.
// 2. `interface` can be extended using the `extends` keyword, while `type` can be combined using intersection types.
// 3. `interface` can be merged, meaning you can define the same interface multiple times and TypeScript will merge them into one, while `type` cannot be merged.

// If we want to add a property using a type alias, we can use intersection.
// If we want to add a property using an interface, we can use the 'extends' keyword.
// Also, if we want, we can create an interface by extending a type as well.

// ----------------------------------------------------------------------------------

type user ={
    name: string;
    age: number;
}

const user1: user = {
    name: "Ruhit",   
    age: 23
}
// -----------------------------------------------------------------

// interface 
interface user2 {
    name: string;
    age: number;
}

const user2: user2 = {
    name: "Ruhit",   
    age: 23
}


// -----------------------------------------------------------------

//  using type alias 
type UserWithRole1 = user & {role : string};

const user3: UserWithRole1 = {
    name: "Ruhit",   
    age: 23,
    role: "admin"
}
// -----------------------------------------------------------------

//  using interface

interface UserWithRole2 extends user2 {
    role: string;
}
const user4: UserWithRole2 = {
    name: "Ruhit",   
    age: 23,
    role: "admin"
}

//----------------------------------------------------------------------------

  type rollNumber = number;

  // js --> object , array-> object function -> object

  type Roll1 = number[];

  interface Roll2 {
   [index : number ] : number
  }

  const rollNumber1: Roll2 = [1,2,3]
                            //   0 1 2 --> number type
                            
  type Add1 = (num1: number,num2:number)=> number
  
  interface Add2 {
    (num1: number,num2:number) : number
  }

  const add: Add2 = (num1 , num2 )=> num1+num2
  
  //


}