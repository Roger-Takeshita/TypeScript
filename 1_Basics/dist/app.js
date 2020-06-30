"use strict";
console.log('Time to get started...');
const button1 = document.querySelector('button');
if (button1) {
    button1.addEventListener('click', () => {
        console.log('Clicked!');
    });
}
const button2 = document.querySelector('button');
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener('click', () => {
    console.log('Clicked!');
});
console.log('-----------------------Normal Function');
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
console.log('-----------------------Default Value');
const addDefault = (a, b = 1) => a + b;
console.log(addDefault(1));
console.log('-----------------------Function Without Using The Return Value');
console.log(' - Type number or string');
const printOutput = (output) => {
    console.log(output);
};
console.log(' - Concat String / Sum Number');
const concatStr = (a, b) => a + b;
printOutput(addDefault(3, 8));
printOutput(concatStr('Roger', 'Takeshita'));
console.log('-----------------------Function Using The Return Value');
const birthYear = (age) => {
    return 2020 - age;
};
const year = birthYear(33);
printOutput(year);
console.log('-----------------------Spread Operator');
const numbers = [];
const test = [1, 2, 3, 4, 5, 6];
numbers.push(...test);
console.log(numbers);
console.log('-----------------------Destructuring');
const person = {
    firstName: 'Roger',
    lastName: 'Takeshita',
    age: 32,
};
const { firstName: userName, age } = person;
console.log(userName, age);
const sports = ['Hiking', 'Cycling', 'Baseball', 'Basketball'];
const [sport1, sport2, ...rest] = sports;
console.log(sport1);
console.log(sport2);
console.log(rest);
//# sourceMappingURL=app.js.map