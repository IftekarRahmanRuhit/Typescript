"use strict";
// Normal Function
// -------------------------
function add(x, y) {
    return x + y;
}
//   add(2, "2");
// -------------------------------------------------------------------
// Arrow Function
const addArrow = (num1, num2) => num1 + num2;
// ------------------------------------------------------------------
// object --> function --> method (object er vitore function ke method bola hoy)
const profile = {
    name: "Iftekar",
    age: 22,
    balance: 1000,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    },
};
// ----------------------------------------------------------------------------------
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem); // type inference
// -------------------------------------------------------------------------------
