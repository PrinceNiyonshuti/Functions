
// 10 Arrow Functions

// 1. Entrance based on funds
const entrance = (name,amount)=>{
  if(amount >= 400){
    console.log(`Thanks ${name} , welcome to Cinema`);
  }else{
    console.log(`Sorry ${name} , your funds are insuficcient `);
  }
}
entrance("king",300);
entrance("king",700);

// 2. average
const average=(mark1,mark2,mark3)=>{
  let sum=0;
  sum = mark1+mark2+mark3;
  avg=sum/3;
  console.log(`The average is ${avg}`);
}
average(30,60,90);

// 3. square function
const square = num => {
    return num * num;
}
theSquare=square(4);
console.log(`the square of a number is ${theSquare}`);

// 4. person functipn that filter if you are above 18 age
const persons = [
  { name: "John", age: 35 },
  { name: "Anne", age: 24 },
  { name: "Tom", age: 41 },
  { name: "Andrew", age: 55 },
  { name: "Mary", age: 18 },
];
const overThirty = persons.filter(person => person.age > 30)
console.log(overThirty);

// 5. function using object
const getUser = user => {
  return { name: user.name, age: user.age ,dept:user.dept};
};
const user = { name: "Shyaka", age: 21 ,dept:"Trainings"};
console.log(getUser(user));
console.log(getUser({ name: "Prince", age: 18 ,dept:"Resources Manager"}));

// 6. calculate sales taxes 
const calcSalesTax = (amount, taxPercent) => {
  return amount + (taxPercent * amount);
}
const salesAmount= calcSalesTax(100,4);
console.log(`The Sales Tax amount is ${salesAmount}`);

// 7. tip calculator
const tipCalc = (bill, tip) => {
  return bill * (tip + 1);
}
console.log(` Prince owes :  `+ tipCalc(500,25));

// 8. function inside a fucntion
const greetTeam = (greeting) => {
  return function(name="Guest") {
    return `${greeting}, ${name} !` 
  }
}
const myGreet = greetTeam('Good morning');
console.log(myGreet());
console.log(myGreet('Team'));

// function to check array and return number that are modulus of 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numMod2 = numbers.filter(numbers => numbers % 2);
console.log(numMod2);

// 9. function to feed the cat
var feedTheCat = (cat) => {
  if (cat == 'hungry' || cat == 'Hungry' || cat == 'HUNGRY'|| cat == 'hUNGRY') {
    return 'Feed the cat';
  } else {
    return 'Do not feed the cat';
  }
}
feedTheCat("Hungry");
feedTheCat("Hungry");
feedTheCat("hUngry");

// 10. using function to return the length of each array element
const studentNames = [
  'Ben',
  'Kelly',
  'Morningstar',
  'Allan'
];
const nameLength = studentNames.map(studentNames => studentNames.length);
console.log(`The Student names lengths are ${nameLength}`)
console.log(studentNames.map(studentNames => studentNames.length));


// 10 Normal Functions
console.log(`********************************************* Normal 10 Functions *****************`)
// 1. Entrance based on funds
function entranceNew (name,amount){
  if(amount >= 400){
    console.log(`Thanks ${name} , welcome to Cinema`);
  }else{
    console.log(`Sorry ${name} , your funds are insuficcient `);
  }
}
entranceNew("king",300);
entranceNew("king",700);


// 2. average
function averageN (mark1,mark2,mark3){
  let sum=0;
  sum = mark1+mark2+mark3;
  avg=sum/3;
  console.log(`The average is ${avg}`);
}
averageN (30,60,90);

// 3. square function
function squareN (num ) {
    return num * num;
}
theSquare=squareN(4);
console.log(`the square of a number is ${theSquare}`);

// 4. person functipn that filter if you are above 18 age
const personsN = [
  { name: "John", age: 35 },
  { name: "Anne", age: 24 },
  { name: "Tom", age: 41 },
  { name: "Andrew", age: 55 },
  { name: "Mary", age: 18 },
];
personsN.filter(overAge);
function overAge(personsN){
  return personsN.age > 30;
}

// 5. function using object
function getUserN (userN) {
  return { name: user.name, age: user.age ,dept:user.dept};
};
const userN = { name: "Shyaka", age: 21 ,dept:"Trainings"};
console.log(getUser(user));
console.log(getUser({ name: "Prince", age: 18 ,dept:"Resources Manager"}));

// 6. calculate sales taxes 
function calcSalesTaxN (amount, taxPercent) {
  return amount + (taxPercent * amount);
}
const salesAmountN= calcSalesTaxN(100,2);
console.log(`The Sales Tax amount is ${salesAmountN}`);

// 7. tip calculator
function tipCalcN (bill, tip){
  return bill * (tip + 1);
}
console.log(` Prince owes :  `+ tipCalc(500,25));

// 8. function inside a fucntion
function greetTeamN (greeting) {
  return function(name="Guest") {
    return `${greeting}, ${name} !` 
  }
}
const myGreetN = greetTeamN('Good morning');
console.log(myGreetN());
console.log(myGreetN('Team'));

// function to check array and return number that are modulus of 2
const numbersN = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbersN.filter(numMod2N);
function numMod2N(numbersN){
  return numbersN % 2;
}

// 9. function to feed the cat
function feedTheCatN (cat) {
  if (cat == 'hungry' || cat == 'Hungry' || cat == 'HUNGRY'|| cat == 'hUNGRY') {
    return 'Feed the cat';
  } else {
    return 'Do not feed the cat';
  }
}
feedTheCatN("Hungry");
feedTheCatN("Hungry");
feedTheCatN("hUngry");

// 10. using function to return the length of each array element
const studentNamesN = [
  'Ben',
  'Kelly',
  'Morningstar',
  'Allan'
];

console.log(`The Student names lengths are ${studentNamesN.length}`);
console.log("************************ Separator **********************************")

studentNamesN.map(nameLengthN);
function nameLengthN(studentNamesN){
  const studentLength = studentNamesN.length;
  console.log(`The Student names lengths are ${studentLength}`);
  return studentLength;
}


