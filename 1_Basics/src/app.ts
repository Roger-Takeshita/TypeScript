//= Generic Type Array of Strings
// const names = ['Roger', 'Thaisa'];
const names: Array<string> = []; // equal to string[]
// names[0].split(' ');

//= Generic Type Promise - Returning a String
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then((data) => {
    console.log(data.split(' '));
});

//= Generic Type Promise - Returning a Number
const promise2: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10.6);
    }, 2000);
});
promise2.then((data) => {
    console.log(Math.ceil(data));
});

//= Generic Function
function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
}

console.log(merge({ name: 'Roger' }, { age: 33 }));

const mergedObj = merge({ name: 'Roger' }, { age: 33 });
console.log(mergedObj);
// {name: "Roger", age: 33}
// console.log(mergedObj.name); // this won't work, because TypeScript doesn't know this

//+ One alternative is to use type casting
const mergedObjAlternative1 = merge({ name: 'Roger' }, { age: 33 }) as {
    name: string;
    age: number;
};
console.log(mergedObjAlternative1.name);

//+ A better approach is to use generics to user generic objects
function merge2<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObjAlternative2 = merge2({ name: 'Roger' }, { age: 33 });
console.log(mergedObjAlternative2.name);

//_ Another Generic Function

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no Value';

    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 0) {
        descriptionText = `Got ${element.length} elements`;
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));

//= Constraints
//+ JavaScript won't throw an error, and our object doesn't have a property 33
//- Currently we are saying that T and U should be any type
// function merge3<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

//+ Generic Type Constraints
//- We add extends after the object that we want to constraints
//- We can set any type of constraints, custom type, union types...
function merge3<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObjAlternative3 = merge3({ name: 'Roger' }, { age: 33 });
console.log(mergedObjAlternative3.name);
console.log(mergedObjAlternative3);

//= The "keyof" Constraint

// function extractAndConvert<T extends object, U>(obj: object, key: string) {
//     return `Value: ${obj[key]}`;
// }

// console.log(extractAndConvert({}, 'name'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Roger');
textStorage.addItem('Thaisa');
textStorage.removeItem('Roger');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
console.log(numberStorage.getItems());

//+ To work with object, it's not that simple, because with object the only way to remove an object, it's by accessing the pointer of that object
//+ because the structure of the object might be the same, but in memory they are totally different pointes, that's why we can't simply removeItem({name: 'Roger'})
//- One work around is to define the object as a constant, and then when we want to delete this object, we reference the same constant.
//- Beside that, we can constraint our class to only extends to stings, numbers and booleans
// const objStorage = new DataStorage<object>();
// const rogerObj = { name: 'Roger' };
// objStorage.addItem(rogerObj);
// objStorage.addItem({ name: 'Thaisa' });
// objStorage.removeItem(rogerObj);
// console.log(objStorage.getItems());

//= Generic Utility Types

//_ Partials
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

//_ Readonly
const names2: Readonly<string[]> = ['Roger', 'Thaisa'];
// names2.push('Yumi');
// names2.pop();
