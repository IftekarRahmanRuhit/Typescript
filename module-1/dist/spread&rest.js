"use strict";
{
    // spread operator
    // destructuring
    const bros1 = ["Asef", "Sun", "Nayeb"];
    const bros2 = ["Joni", "Parvez", "Saad"];
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
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // -------------------------------------------------------
    // rest opeartor
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Rahim", "karim", "Jumon", "Rahim", "sakib");
}
