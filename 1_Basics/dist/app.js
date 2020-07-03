"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then((data) => {
    console.log(data.split(' '));
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10.6);
    }, 2000);
});
promise2.then((data) => {
    console.log(Math.ceil(data));
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Roger' }, { age: 33 }));
const mergedObj = merge({ name: 'Roger' }, { age: 33 });
console.log(mergedObj);
const mergedObjAlternative1 = merge({ name: 'Roger' }, { age: 33 });
console.log(mergedObjAlternative1.name);
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObjAlternative2 = merge2({ name: 'Roger' }, { age: 33 });
console.log(mergedObjAlternative2.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no Value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 0) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
function merge3(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObjAlternative3 = merge3({ name: 'Roger' }, { age: 33 });
console.log(mergedObjAlternative3.name);
console.log(mergedObjAlternative3);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Roger');
textStorage.addItem('Thaisa');
textStorage.removeItem('Roger');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names2 = ['Roger', 'Thaisa'];
//# sourceMappingURL=app.js.map