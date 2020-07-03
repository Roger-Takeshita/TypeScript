"use strict";
var _a;
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add2('Roger', ' Takeshita');
console.log(result.split(' '));
const result1 = add2(1, 3);
console.log(result1);
function printEmployeeInformation(emp) {
    console.log(`Name ${emp.name}`);
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}
const e1 = {
    name: 'Roger',
    privileges: ['create-server'],
    startDate: new Date(),
};
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Thaisa', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving truck...');
    }
    loadCargo(amount) {
        console.log(`Loading cargo ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving at speed: ${speed}`);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 30 });
const userInputEl = document.getElementById('user-input');
userInputEl.value = 'Hi There!';
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',
};
const fetchUserData = {
    id: 'ui',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company',
    },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput || 'DEFAULT';
console.log(storedData);
const userInput2 = '';
const storedData2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT';
console.log(storedData2);
//# sourceMappingURL=extra.js.map