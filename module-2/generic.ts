{
// Generic types

// Generic types are a powerful feature in TypeScript that allow you to create reusable components
// and functions that can work with a variety of data types. They enable you to define a function or class 
// that can operate on different types without losing type safety. This is particularly useful when you want to
// create a function or class that can handle multiple types of data without having to write separate code for each type.   


// const rollNumber : number[] = [1,2,3,4];
const rollNumber : Array<number> = [1,2,3,4];  // can also be written as Array<number>

// const mentor : string[] = ["X", "Y", "Z"];
const mentor : Array<string> = ["X", "Y", "Z"];

// const boolArray : boolean[] = [true, false, true];
const boolArray : Array<boolean> = [true, false, true];
// ------------------------------------------------------------


// reusable 
type GenericArray<T> = Array<T>; // type alias for generic array

const rollNumber2 : GenericArray<number> = [1,2,3,4];
const mentor2 : GenericArray<string> = ["X", "Y", "Z"];
const boolArray2 : GenericArray<boolean> = [true, false, true];

// Array of object 
  const user: GenericArray<{ name:string; age:number }> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
  ];

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

    const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];















}