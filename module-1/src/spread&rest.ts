{
    // spread operator

    // destructuring

const bros1: string[] = ["Asef", "Sun", "Nayeb"];
const bros2: string[] = ["Joni", "Parvez", "Saad"];
    bros1.push(...bros2);
  
const mentors1 = {
      typescript: "Mezba",
      redux: "Mir",
      dbms: "Mizan",
    };
  
const mentors2 = {
      prisma: "Firoz",
      next: "Tanmoy",
      cloud: "Nahid",
    };
  
const mentorList = {
      ...mentors1,
      ...mentors2,
    };

// -------------------------------------------------------

    // rest opeartor

  const greetFriends = (...friends: string[]) => {

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));

  };
  
greetFriends("Rahim", "karim", "Jumon", "Rahim", "sakib");

}