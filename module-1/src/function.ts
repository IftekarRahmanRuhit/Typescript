// Normal Function
// -------------------------
function add(x: number, y: number): number // this indicates the return type of the function 
{
    return x + y;
}
//   add(2, "2");


// -------------------------------------------------------------------
// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// ------------------------------------------------------------------

// object --> function --> method (object er vitore function ke method bola hoy)

const profile = {
    name: "Iftekar",
    age: 22,
    balance: 1000,
    addBalance(balance: number): string {
      return `My new balance is : ${this.balance + balance}`;
    },
}

// ----------------------------------------------------------------------------------


  const arr: number[] = [1, 4, 10];

const newArray : number[] = arr.map((elem: number) : number => elem * elem); // type inference

// -------------------------------------------------------------------------------

