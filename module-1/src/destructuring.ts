{
// destructuring

const user = {
    id: 345,
    name: {
      firstName: "Iftekar",
      middleName: "Rahman",
      lastName: "Ruhit",
    },
    contactNo: "0170000000",
    address: "Bangladesh",
  };
  
  const {
    contactNo,
    name: { middleName: midName },
  } = user;
  
  // array destructuring
  
  const myFriends = ["Kamal", "Jamal", "Rasel", "Kamran", "Farhan", "Faruk"];
  
  const [, , bestFriend, ...rest] = myFriends;
}