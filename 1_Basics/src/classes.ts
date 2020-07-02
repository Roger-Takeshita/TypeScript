console.log("Time to get started...");

//! Button doesn't exist, handling null or void errors
//+ Option 1) avoiding errors
const button1 = document.querySelector("button");
if (button1) {
  button1.addEventListener("click", () => {
    console.log("Clicked!");
  });
}

//+ Option 2) avoiding errors - cleaner way in JS
const button2 = document.querySelector("button");
button2?.addEventListener("click", () => {
  console.log("Clicked!");
});

//! Normal function returning the result to be used in our program
console.log("-----------------------Normal Function");
function add(a: number, b: number) {
  return a + b;
}
console.log(add(3, 5));

//! Arrow function with default value, returning the result to be used in our program
console.log("-----------------------Default Value");
const addDefault = (a: number, b: number = 1) => a + b;
console.log(addDefault(1));

//! Arrow function receiving a number or a string, not using the result in our program
console.log("-----------------------Function Without Using The Return Value");
console.log(" - Type number or string");
const printOutput: (a: number | string) => void = (output) => {
  console.log(output);
};

console.log(" - Concat String / Sum Number");
const concatStr = (a: string, b: string) => a + b;
printOutput(addDefault(3, 8));
printOutput(concatStr("Roger", "Takeshita"));

console.log("-----------------------Function Using The Return Value");
const birthYear = (age: number) => {
  return 2020 - age;
};

const year = birthYear(33);
printOutput(year);

//! Spread Operator with push method
console.log("-----------------------Spread Operator");
const numbers: number[] = [];
const test: number[] = [1, 2, 3, 4, 5, 6];

numbers.push(...test);
console.log(numbers);

//! Destructuring
console.log("-----------------------Destructuring");
//+ Object
const person = {
  firstName: "Roger",
  lastName: "Takeshita",
  age: 32,
};

const { firstName: userName, age } = person;
console.log(userName, age);

//+ Array with remaining values
const sports: string[] = ["Hiking", "Cycling", "Baseball", "Basketball"];
const [sport1, sport2, ...rest] = sports;
console.log(sport1);
console.log(sport2);
console.log(rest);

//! Classes
console.log("-----------------------Classes");
abstract class Department {
  static fiscalYear: number = 2020;
  // public publicProperty: string;
  // private privateProperty: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return {
      name,
    };
  }

  // describe(this: Department) {
  //     console.log(`Department: ${this.name} (${this.id})`);
  // }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const newEmployee = Department.createEmployee("John");
console.log(newEmployee, Department.fiscalYear);

// const accounting = new Department('d1', 'Accounting');
// accounting.addEmployee('Roger');
// accounting.addEmployee('Thaisa');
// accounting.name = 'New Accounting';

//+ The following code throws an error, because it's a private property of our class
// accounting.employees.push('Yumi');

// accounting.describe();
// accounting.printEmployeeInformation();

// console.log(accounting);

// const accountingCopy = { name: 'copy', id: 'd2', describe: accounting.describe };
// accountingCopy.describe();

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
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
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass a valid value");
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting Reports");
    this.lastReport = reports[0];
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
  addEmployee(name: string) {
    if (name === "Bob") return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accDepartment = new AccountingDepartment('d4', []);
const accDepartment = AccountingDepartment.getInstance();
const accDepartment2 = AccountingDepartment.getInstance();
console.log(accDepartment, accDepartment2);
// console.log(accDepartment.mostRecentReport);
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
