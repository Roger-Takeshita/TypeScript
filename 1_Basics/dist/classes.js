"use strict";
console.log("Time to get started...");
const button1 = document.querySelector("button");
if (button1) {
    button1.addEventListener("click", () => {
        console.log("Clicked!");
    });
}
const button2 = document.querySelector("button");
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", () => {
    console.log("Clicked!");
});
console.log("-----------------------Normal Function");
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
console.log("-----------------------Default Value");
const addDefault = (a, b = 1) => a + b;
console.log(addDefault(1));
console.log("-----------------------Function Without Using The Return Value");
console.log(" - Type number or string");
const printOutput = (output) => {
    console.log(output);
};
console.log(" - Concat String / Sum Number");
const concatStr = (a, b) => a + b;
printOutput(addDefault(3, 8));
printOutput(concatStr("Roger", "Takeshita"));
console.log("-----------------------Function Using The Return Value");
const birthYear = (age) => {
    return 2020 - age;
};
const year = birthYear(33);
printOutput(year);
console.log("-----------------------Spread Operator");
const numbers = [];
const test = [1, 2, 3, 4, 5, 6];
numbers.push(...test);
console.log(numbers);
console.log("-----------------------Destructuring");
const person = {
    firstName: "Roger",
    lastName: "Takeshita",
    age: 32,
};
const { firstName: userName, age } = person;
console.log(userName, age);
const sports = ["Hiking", "Cycling", "Baseball", "Basketball"];
const [sport1, sport2, ...rest] = sports;
console.log(sport1);
console.log(sport2);
console.log(rest);
console.log("-----------------------Classes");
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return {
            name,
        };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
const newEmployee = Department.createEmployee("John");
console.log(newEmployee, Department.fiscalYear);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }
}
const it = new ITDepartment("d3", ["Roger"]);
it.addEmployee("Mike");
it.addEmployee("Joy");
it.addEmployee("Yumi");
it.name = "New IT";
it.describe();
it.printEmployeeInformation();
console.log(it);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting Reports");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please pass a valid value");
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d4", []);
        return this.instance;
    }
    describe() {
        console.log(`Custom Accounting Department - ID: ${this.id}`);
    }
    addEmployee(name) {
        if (name === "Bob")
            return;
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accDepartment = AccountingDepartment.getInstance();
const accDepartment2 = AccountingDepartment.getInstance();
console.log(accDepartment, accDepartment2);
accDepartment.mostRecentReport = "Report using setter";
accDepartment.name = "New Accounting Department";
accDepartment.describe();
accDepartment.addEmployee("Bob");
accDepartment.addEmployee("Marley");
accDepartment.addReport("Report 1");
accDepartment.addReport("Report 2");
accDepartment.addReport("Report 3");
accDepartment.printReports();
accDepartment.printEmployeeInformation();
console.log(accDepartment);
console.log(accDepartment.mostRecentReport);
//# sourceMappingURL=classes.js.map