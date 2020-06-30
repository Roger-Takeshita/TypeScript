console.log('Time to get started...');

//! Button doesn't exist, handling null or void errors
//+ Option 1) avoiding errors
const button1 = document.querySelector('button');
if (button1) {
    button1.addEventListener('click', () => {
        console.log('Clicked!');
    });
}

//+ Option 2) avoiding errors - cleaner way in JS
const button2 = document.querySelector('button');
button2?.addEventListener('click', () => {
    console.log('Clicked!');
});

//! Normal function returning the result to be used in our program
console.log('-----------------------Normal Function');
function add(a: number, b: number) {
    return a + b;
}
console.log(add(3, 5));

//! Arrow function with default value, returning the result to be used in our program
console.log('-----------------------Default Value');
const addDefault = (a: number, b: number = 1) => a + b;
console.log(addDefault(1));

//! Arrow function receiving a number or a string, not using the result in our program
console.log('-----------------------Function Without Using The Return Value');
console.log(' - Type number or string');
const printOutput: (a: number | string) => void = (output) => {
    console.log(output);
};

console.log(' - Concat String / Sum Number');
const concatStr = (a: string, b: string) => a + b;
printOutput(addDefault(3, 8));
printOutput(concatStr('Roger', 'Takeshita'));

console.log('-----------------------Function Using The Return Value');
const birthYear = (age: number) => {
    return 2020 - age;
};

const year = birthYear(33);
printOutput(year);

//! Spread Operator with push method
console.log('-----------------------Spread Operator');
const numbers: number[] = [];
const test: number[] = [1, 2, 3, 4, 5, 6];

numbers.push(...test);
console.log(numbers);

//! Destructuring
console.log('-----------------------Destructuring');
//+ Object
const person = {
    firstName: 'Roger',
    lastName: 'Takeshita',
    age: 32,
};

const { firstName: userName, age } = person;
console.log(userName, age);

//+ Array with remaining values
const sports: string[] = ['Hiking', 'Cycling', 'Baseball', 'Basketball'];
const [sport1, sport2, ...rest] = sports;
console.log(sport1);
console.log(sport2);
console.log(rest);
