// Reference type -> object


  const user1 : {
    readonly company: string; // type --> literal types (emn jodi situation hoy amr akta value shobsomoy  fixed thakbe shy ketre amra seta ke type hishabe use korte pari)

    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming Hero",
    firstName: "Iftekar",
    lastName: "Ruhit",
    isMarried: false,
  };

//   user4.company = "PH";

let user2 : object = {name: "Iftekar", age: 22};
let user3 : object = {name: "Rahman", age: 22, isStudent: true};
let user4 : object = {name: "Ruhit", age: 22, isStudent: true, hobbies: ["coding", "reading"]};