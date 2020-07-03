//! Option 1 - Using Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;
function add2(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add2('Roger', ' Takeshita');
console.log(result.split(' '));
const result1 = add2(1, 3);
console.log(result1);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(`Name ${emp.name}`);

    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}

//! Option 2 - Using Interfaces
// interface Admin {
//     name: string;
//     privileges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

//+ New object type ElevatedEmployee
const e1: ElevatedEmployee = {
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

    loadCargo(amount: number) {
        console.log(`Loading cargo ${amount}`);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

// const userInputEl = <HTMLInputElement>document.getElementById('user-input')!;
const userInputEl = document.getElementById('user-input')! as HTMLInputElement;
userInputEl.value = 'Hi There!';

interface ErrorContainer {
    [key: string]: string;
}

const errorBag: ErrorContainer = {
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

// console.log(fetchUserData.job && fetchUserData.job.title);
console.log(fetchUserData?.job?.title);

//! nullish coalescing
const userInput = '';
const storedData = userInput || 'DEFAULT';
console.log(storedData);

const userInput2 = '';
const storedData2 = userInput2 ?? 'DEFAULT';
console.log(storedData2);
