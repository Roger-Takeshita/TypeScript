<h1 id='summary'>Summary</h1>

-   [TypeScript](#typescript)
    -   [Package](#package)
    -   [Generate .js](#generatejs)
        -   [Single File](#singlefile)
        -   [Single File Watch Mode](#singlefilewatch)
        -   [All .ts Files - Project](#allfileswatch)
            -   [Exclude .ts](#excludets)
            -   [Include .ts](#includets)
            -   [Extra Configuration](#extraconfig)
    -   [Getting Started](#gettingstarted)
        -   [DOM Error](#domerror1)
            -   [Error - Option 1](#error1)
            -   [Error - Option 2](#error2)
        -   [Functions](#functions)
            -   [Normal Function](#normalfunction)
            -   [Arrow Function With Return Value](#arrowfunction)
            -   [Arrow Function Without Return Value](#arrowfunction1)
            -   [Function With Different Types of Arguments](#functionargs)
        -   [Spread Operator](#spread)
        -   [Destructuring](#destructuring)
            -   [Object](#object)
            -   [Array](#array)
        -   [Classes](#classes)
            -   [Inheritance](#inheritance)
            -   [Getters and Setters](#getters)
            -   [Static Methods / Properties](#static)
            -   [Abstract](#abstract)
            -   [Private Constructor - Singleton Pattern](#singleton)
        -   [Interface](#interface)
            -   [Inheritance](#inheritinterface)
            -   [Function](#interfacefunction)
            -   [Optional](#interfaceoption)
        -   [Advanced Types](#advancedtypes)
            -   [Intersection Types](#intersectiontypes)
            -   [Type Guards](#typeguards)
            -   [Discriminated Unions](#discriminatedunion)
            -   [Type Casting](#typecasting)
            -   [Index Properties](#indexproperties)
            -   [Optional Chaining](#optionalchaining)
            -   [Nullish Coalescing](#nullish)
        -   [Generics](#generics)
            -   [Generic Type](#generictype)
            -   [Generic Function](#genericfunction)
            -   [Constraints](#constraints)
            -   [Another Generic Function](#anothergenericfunction)
            -   [The "keyof" Constraint](#keyofconstraint)
            -   [Generic Utility Type](#utilitytype)

<h1 id='typescript'>TypeScript</h1>

<h2 id='package'>Package</h2>

[Go Back to Summary](#summary)

-   Install **TypeScript** package globally with the command

    ```Bash
      npm install typescript -g
    ```

<h2 id='generatejs'>Generate .js</h2>

<h3 id='singlefile'>Single File</h3>

[Go Back to Summary](#summary)

-   To manually generate a JavaScript file, use the command

    ```Bash
      tsc <file_name.ts>
    ```

<h3 id='singlefilewatch'>Single File Watch Mode</h3>

[Go Back to Summary](#summary)

-   Enable watch mode to automatically update our JavaScript file, once we save our TypeScript file. For That just add `--w` or `--watch`

    ```Bash
      tsc <file_name.ts> --w

      # or

      tsc <file_name.ts> --watch
    ```

<h3 id='allfileswatch'>All .ts Files - Project</h3>

[Go Back to Summary](#summary)

-   To watch all .ts of our project, we need to run the following command just once in our project and TypeScript will take care of all .ts files for us

    ```Bash
      tsc --init
    ```

    -   Once we ran the command, TypeScript will create a new file `tsconfig.json`
    -   This indicates to TypeScript which this file (`tsconfig.json`) lives and all sub-folders should be managed by TypeScript
    -   In `tsconfig.json` we can enable extra configuration for our project
    -   Another thing, we can also exclude certain files from compilation
        -   By adding in the end of the file `"exclude"`, `"exclude"` is an array where we can define the path of the files that we want to exclude

    ```JSON
      {
        "compilerOptions": {
          /* Visit https://aka.ms/tsconfig.json to read more about this file */

          /* Basic Options */
          // "incremental": true,                   /* Enable incremental compilation */
          "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
          "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
          // "lib": [],                             /* Specify library files to be included in the compilation. */
          // "allowJs": true,                       /* Allow javascript files to be compiled. */
          // "checkJs": true,                       /* Report errors in .js files. */
          // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
          // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
          // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
          // "sourceMap": true,                     /* Generates corresponding '.map' file. */
          // "outFile": "./",                       /* Concatenate and emit output to single file. */
          // "outDir": "./",                        /* Redirect output structure to the directory. */
          // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
          // "composite": true,                     /* Enable project compilation */
          // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
          // "removeComments": true,                /* Do not emit comments to output. */
          // "noEmit": true,                        /* Do not emit outputs. */
          // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
          // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
          // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

          /* Strict Type-Checking Options */
          "strict": true,                           /* Enable all strict type-checking options. */
          // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
          // "strictNullChecks": true,              /* Enable strict null checks. */
          // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
          // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
          // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
          // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
          // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

          /* Additional Checks */
          // "noUnusedLocals": true,                /* Report errors on unused locals. */
          // "noUnusedParameters": true,            /* Report errors on unused parameters. */
          // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
          // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

          /* Module Resolution Options */
          // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
          // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
          // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
          // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
          // "typeRoots": [],                       /* List of folders to include type definitions from. */
          // "types": [],                           /* Type declaration files to be included in compilation. */
          // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
          "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
          // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
          // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

          /* Source Map Options */
          // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
          // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
          // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
          // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

          /* Experimental Options */
          // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
          // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

          /* Advanced Options */
          "skipLibCheck": true,                     /* Skip type checking of declaration files. */
          "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
        },
        "exclude": [
          "analytics.ts"
        ]
      }
    ```

    -   We can also use wildcards to exclude certain type of files

        ```JSON
          "exclude": [
            "*.dev.ts"
          ]
        ```

    -   Or we can exclude from any folder that matches the criteria

        ```JSON
          "exclude": [
            "**/*.dev.ts"
          ]
        ```

<h4 id='excludets'>Exclude .ts</h4>

-   One thing that we might do for every project is to exclude the **node_modules**, because we don't want to compile the `.ts` files from our libraries

    -   **By default, TypeScript already excludes the node_modules**

    ```JSON
      "exclude": [
        "**/*.dev.ts",
        "node_modules"
      ]
    ```

<h4 id='includets'>Include .ts</h4>

-   Another thing that we can also do is to manually include the files.
-   If we specify the `"include"`, we have manually set all the files that we want to TypeScript to compile

    ```JSON
      "include": [
        "app.ts"
      ]
    ```

<h4 id='extraconfig'>Extra Configuration</h4>

-   We can also set extra configuration

    -   In the configuration below, we need to manually add a new field (**noEmitOnError**), by default is set to **false**.
        -   If set to **true**, TypeScript won't compile the **.ts** file if there is any error
    -   **sourceMap**, it a good option to debug our `.ts` using Chrome Dev Tools

    ```JSON
      {
        "compilerOptions": {
          /* Visit https://aka.ms/tsconfig.json to read more about this file */

          /* Basic Options */
          "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
          "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
          "lib": [
            "DOM",
            "ES6",
            "DOM.Iterable",
            "ScriptHost"
          ],                                        /* Specify library files to be included in the compilation. */
          "sourceMap": true,                        /* Generates corresponding '.map' file. */
          "outDir": "./dist",                       /* Redirect output structure to the directory. */
          "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
          "removeComments": true,                   /* Do not emit comments to output. */
          "noEmitOnError": true,

          /* Strict Type-Checking Options */
          "strict": true,                           /* Enable all strict type-checking options. */

          /* Additional Checks */
          "noUnusedLocals": true,                   /* Report errors on unused locals. */
          "noUnusedParameters": false,              /* Report errors on unused parameters. */
          "noImplicitReturns": true,                /* Report error when not all code paths in function return a value. */
          "noFallthroughCasesInSwitch": true,       /* Report errors for fallthrough cases in switch statement. */

          /* Module Resolution Options */
          "esModuleInterop": true,                  /* Enables emit interoperability between

          /* Advanced Options */
          "skipLibCheck": true,                     /* Skip type checking of declaration files. */
          "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
        },
        "exclude": [
          "analytics.ts"
        ]
      }
    ```

-   Then, after we've created the `tsconfig.json`
    -   we execute `tsc --w` (`--w`, watch mode)
    -   And this command will search for all `.ts` in our project and compile the `.js` version of each file

<h2 id='gettingstarted'>Getting Started</h2>

<h3 id='domerror1'>DOM Error</h3>

[Go Back to Summary](#summary)

<h4 id='error1'>Error - Option 1</h4>

-   The easiest way to handle error from non existing elements in our DOM it to add and `if` statement to check if the element is truthy

    ```TypeScript
      const button1 = document.querySelector('button');
      if (button1) {
          button1.addEventListener('click', () => {
              console.log('Clicked!');
          });
      }
    ```

<h4 id='error2'>Error - Option 2</h4>

-   Another option is to add a `?` right after the element

    ```TypeScript
      const button2 = document.querySelector('button');
      button2?.addEventListener('click', () => {
          console.log('Clicked!');
      });
    ```

<h3 id='functions'>Functions</h3>

[Go Back to Summary](#summary)

<h4 id='normalfunction'>Normal Function</h4>

-   Normal function returning the result to be used in our code

    ```TypeScript
      function add(a: number, b: number) {
          return a + b;
      }
      console.log(add(3, 5));

      // 8
    ```

<h4 id='arrowfunction'>Arrow Function With Return Value</h4>

-   Arrow function with default value, returning the result to be used in our code

    ```TypeScript
      const addDefault = (a: number, b: number = 1) => a + b;

      console.log(addDefault(1));

      // 2
    ```

    ```TypeScript
      const birthYear = (age: number) => {
          return 2020 - age;
      };

      const year = birthYear(33);
      printOutput(year);

      // 1987
    ```

<h4 id='arrowfunction1'>Arrow Function Without Return Value</h4>

-   Arrow function receiving a number or a string, not using the result in our program

    -   If we are not returning anything from a function, it's a good practice to define as **void**
        -   so if we are using an arrow function we fist have to define the input type that our function can receive
            -   `printOutput: (a: number | string)`
        -   Then we have to explicit indicate that this function is not returning anything
            -   `=> void`
        -   And the rest is just a normal arrow function

    ```TypeScript
      const printOutput: (a: number | string) => void = (output) => {
          console.log(output);
      };
    ```

<h4 id='functionargs'>Function With Different Types of Arguments</h4>

[Go Back to Summary](#summary)

-   We can also create a function that accepts `n` types of arguments

    ```TypeScript
      const concatStr = (a: string, b: string) => a + b;

      printOutput(addDefault(3, 8));
      printOutput(concatStr('Roger', 'Takeshita'));

      // 11
      // RogerTakeshita
    ```

<h3 id='spread'>Spread Operator</h3>

[Go Back to Summary](#summary)

```TypeScript
  const numbers: number[] = [];
  const test: number[] = [1, 2, 3, 4, 5, 6];

  numbers.push(...test);
  console.log(numbers);

  // [1, 2, 3, 4, 5, 6]
```

<h3 id='destructuring'>Destructuring</h3>

[Go Back to Summary](#summary)

<h4 id='object'>Object</h4>

-   Destructuring an object and assigning a different name from the object

    ```TypeScript
      const person = {
          firstName: 'Roger',
          lastName: 'Takeshita',
          age: 33,
      };

      const { firstName: userName, age } = person;
      console.log(userName, age);

      // Roger 33
    ```

<h4 id='array'>Array</h4>

-   We can also destructuring an array by position, and the rest of remaining values we could assign to another variable

    ```TypeScript
      const sports: string[] = ['Hiking', 'Cycling', 'Baseball', 'Basketball'];
      const [sport1, sport2, ...rest] = sports;

      console.log(sport1);
      console.log(sport2);
      console.log(rest);

      // Hiking
      // Cycling
      // ["Baseball", "Basketball"]
    ```

<h3 id='classes'>Classes</h3>

[Go Back to Summary](#summary)

-   [MDN Official Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
-   **Properties**
    -   **public** properties, where can be accessed anywhere outside of the class
    -   **private** properties, where can be accessed only inside the class, but not from subclasses - inheritance
    -   **protected** properties, where cannot be accessed outside of the class, but can be accessed from their subclass - inheritance
-   **Constructor**
    -   The constructor immediately instantiate the properties defined inside the constructor, when we invoke a new instance of the class
    -   With TypeScript we can create a new property, assign in one line:
        -   `public`, `private`, `protected`
        -   `readonly` - read mode only, cannot be modified
        -   assign the `type`
-   **Methods**

    -   With a method of a class, we can create custom functions for our classes
    -   But if we need access to certain properties from the constructor to a subclass, we need to assign to the type of **class**, in other words assign **name of the class**

    ```TypeScript
      class Department {
          // public publicProperty: string;
          // private privateProperty: string;
          protected employees: string[] = [];

          constructor(private readonly id: string, public name: string) {}

          describe(this: Department) {
              console.log(`Department: ${this.name} (${this.id})`);
          }

          addEmployee(employee: string) {
              this.employees.push(employee);
          }

          printEmployeeInformation() {
              console.log(this.employees.length);
              console.log(this.employees);
          }
      }
    ```

<h4 id='inheritance'>Inheritance</h4>

-   We can inherit properties, methods and override methods from the parent class

    -   In a derived class, the **super** keyword represents the parent superclass and must be called before the **this** keyword can be used in the constructor.

    ```TypeScript
      const it = new ITDepartment('d3', ['Roger']);
      it.addEmployee('Mike');
      it.addEmployee('Joy');
      it.addEmployee('Yumi');
      it.name = 'New IT';
      it.describe();
      it.printEmployeeInformation();
      console.log(it);

      class AccountingDepartment extends Department {
          constructor(id: string, private reports: string[]) {
              super(id, 'Accounting Reports');
          }

          addEmployee(name: string) {
              if (name === 'Bob') return;
              this.employees.push(name);
          }

          addReport(text: string) {
              this.reports.push(text);
          }

          printReports() {
              console.log(this.reports);
          }
      }

      const accDepartment = new AccountingDepartment('d4', []);
      accDepartment.name = 'New Accounting Department';
      accDepartment.describe();
      accDepartment.addEmployee('Bob');
      accDepartment.addEmployee('Marley');
      accDepartment.addReport('Report 1');
      accDepartment.addReport('Report 2');
      accDepartment.addReport('Report 3');
      accDepartment.printReports();
      accDepartment.printEmployeeInformation();
      console.log(accDepartment);
    ```

<h4 id='getters'>Getters and Setters</h4>

-   Encapsulating more complex logic to our class, we can use `get` (getter) and `set` (setter) to define a new method that we can access like a property of the class

    ```TypeScript
      class AccountingDepartment extends Department {
          private lastReport: string;

          get mostRecentReport() {
              if (this.lastReport) return this.lastReport;
              throw new Error('No report found.');
          }

          set mostRecentReport(value: string) {
              if (!value) throw new Error('Please pass a valid value');
              this.addReport(value);
          }

          constructor(id: string, private reports: string[]) {
              super(id, 'Accounting Reports');
              this.lastReport = reports[0];
          }

          addEmployee(name: string) {
              if (name === 'Bob') return;
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

      const accDepartment = new AccountingDepartment('d4', []);
      // console.log(accDepartment.mostRecentReport);
      accDepartment.mostRecentReport = 'Report using setter';
      accDepartment.name = 'New Accounting Department';
      accDepartment.describe();
      accDepartment.addEmployee('Bob');
      accDepartment.addEmployee('Marley');
      accDepartment.addReport('Report 1');
      accDepartment.addReport('Report 2');
      accDepartment.addReport('Report 3');
      accDepartment.printReports();
      accDepartment.printEmployeeInformation();
      console.log(accDepartment);
      console.log(accDepartment.mostRecentReport);
    ```

<h4 id='static'>Static Methods / Properties</h4>

-   Call a method without instantiating a class
-   For that we have to define the method / property as **static**
-   **ATTENTION**: With **static** methods / properties in our class, we cannot access invoke inside other methods in our Class directly. This static method / property is only available outside of the class

    -   static methods/properties are detached from the class, that's why wen can't access using `this` keyword
    -   To access the static method/property inside of a class method, we have to call the class itself to access the method/property
        -   `Department.fiscalYear`

    ```TypeScript
      class Department {
          static fiscalYear: number = 2020;
          // public publicProperty: string;
          // private privateProperty: string;
          protected employees: string[] = [];

          constructor(private readonly id: string, public name: string) {}

          static createEmployee(name: string) {
              return {
                  name,
              };
          }

          describe(this: Department) {
              console.log(`Department: ${this.name} (${this.id})`);
          }

          addEmployee(employee: string) {
              this.employees.push(employee);
          }

          printEmployeeInformation() {
              console.log(this.employees.length);
              console.log(this.employees);
          }
      }

      const newEmployee = Department.createEmployee('John');
      console.log(newEmployee, Department.fiscalYear);

      const accounting = new Department('d1', 'Accounting');
      accounting.addEmployee('Roger');
      accounting.addEmployee('Thaisa');
      accounting.name = 'New Accounting';
    ```

<h4 id='abstract'>Abstract</h4>

-   Abstract classes, are classes that we don't need to define complete structure of a method, but we want to enforce that our subclasses also have the same method but with different implementation
-   This way we only define the method that we want to enforce as `abstract` and also we need to define our class as `abstract`

    -   for methods, we we are not returning any value, we should assign `void`
    -   Then all of subclasses will inherit this method, and we will need to create the method to that subclass, otherwise, we'll get an error

    ```TypeScript
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

      class ITDepartment extends Department {
          admins: string[];
          constructor(id: string, admins: string[]) {
              super(id, 'IT');
              this.admins = admins;
          }

          describe() {
              console.log(`IT Department - ID: ${this.id}`);
          }
      }
    ```

<h4 id='singleton'>Private Constructor - Singleton Pattern</h4>

-   Single instance of an object
-   To create a private constructor, we just need to assign `private` in front of the constructor
    -   But with that, we no longer can create a new instance of class (`new AccountingDepartment('d4', [])`)
    -   To have access to the private constructor we have to create a `static` method, this way we don't need to invoke the class, but just the method
-   Then we need to create a `private static` instance, type **class**, so we can check if there is already an existing class, if yes, we use that one, otherwise, create one

    ```TypeScript
      class AccountingDepartment extends Department {
          private lastReport: string;
          private static instance: AccountingDepartment;

          get mostRecentReport() {
              if (this.lastReport) return this.lastReport;
              throw new Error('No report found.');
          }

          set mostRecentReport(value: string) {
              if (!value) throw new Error('Please pass a valid value');
              this.addReport(value);
          }

          private constructor(id: string, private reports: string[]) {
              super(id, 'Accounting Reports');
              this.lastReport = reports[0];
          }

          static getInstance() {
              if (this.instance) {
                  return this.instance;
              }
              this.instance = new AccountingDepartment('d4', []);
              return this.instance;
          }

          describe() {
              console.log(`Custom Accounting Department - ID: ${this.id}`);
          }
          addEmployee(name: string) {
              if (name === 'Bob') return;
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
      accDepartment.mostRecentReport = 'Report using setter';
      accDepartment.name = 'New Accounting Department';
      accDepartment.describe();
      accDepartment.addEmployee('Bob');
      accDepartment.addEmployee('Marley');
      accDepartment.addReport('Report 1');
      accDepartment.addReport('Report 2');
      accDepartment.addReport('Report 3');
      accDepartment.printReports();
      accDepartment.printEmployeeInformation();
      console.log(accDepartment);
      console.log(accDepartment.mostRecentReport);
    ```

<h3 id='interface'>Interface</h3>

[Go Back to Summary](#summary)

-   [TypeScript Official Docs](https://www.typescriptlang.org/docs/handbook/interfaces.html)
-   One option of an interface would be a `type` object
-   We often can use interchangeably `interface` or `type`

    ```TypeScript
        type Person = {
            name: string;
            age: number;

            greet(phrase: string): void;
        }

        let user1: Person;
        user1 = {
            name: 'Roger',
            age: 33,
            greet(phrase: string) {
                console.log(`${phrase} ${this.name}`);
            }
        }

        user1.greet('Hi there - I am');
    ```

-   The difference between an **interface** and **type**:

    -   With interface we can only use to describe the structure of an object. While a `type`, it can be used to store other things like `union types` (multiple types into one type)
        -   `let text: string | string[];`
    -   When we define as an **interface**, it's clear that we want to define only the structure of the object, while **type** is not always true
    -   An **interface** can be implemented inside a **class**
        -   To do so, we have to `implements`, similar to `extends` but we can assign multiple interfaces
        -   Then we just need to create the method inside our class, and this method will follow the structure of our interface
    -   Interfaces are often used to share functionalities among different classes, not concrete about the implementation but regarded to structure / features that a class should have
    -   Similar to an `abstract class`

-   Not allowed in an **interface**

    -   `public`
    -   `private`
    -   `protected`

-   Allowed

    -   `readonly`

    ```TypeScript
      interface Greetable {
          readonly name: string;

          greet(phrase: string): void;
      }

      class Person implements Greetable {
          name: string;
          age = 30;

          constructor(n: string) {
              this.name = n;
          }

          greet(phrase: string) {
              console.log(`${phrase} ${this.name}`);
          }
      }

      let user1: Greetable;

      user1 = new Person('Roger');
      user1.name = 'Not Allowed';
      user1.greet('Hi there - I am');
      console.log(user1);
    ```

<h4 id='inheritinterface'>Inheritance</h4>

-   We can combine interfaces with the help of `extends` (just like in a class), the the sub interface will inherit everything from the parent interface

    -   the only difference is that **interfaces** can extend more than one **parent interface** (with classes that's not allowed)

    ```TypeScript
      interface Named {
          readonly name: string;
      }

      interface Greetable extends Named {
          greet(phrase: string): void;
      }

      class Person implements Greetable {
          name: string;
          age = 30;

          constructor(n: string) {
              this.name = n;
          }

          greet(phrase: string) {
              console.log(`${phrase} ${this.name}`);
          }
      }

      let user1: Greetable;

      user1 = new Person('Roger');
      // user1.name = 'Not Allowed';  <--- will get an error
      user1.greet('Hi there - I am');
      console.log(user1);
    ```

<h4 id='interfacefunction'>Function</h4>

-   Most common way to create a function structure would be using `type`
    -   `type AddFn = (a: number, b: number) => number;`
-   An alternative would be to create using function interface, for that we need to an anonymous function

    ```TypeScript
      // type AddFn = (a: number, b: number) => number;
      interface AddFn {
          (a: number, b: number): number;
      }

      let add1: AddFn;
      add1 = (n1: number, n2: number) => {
          return n1 + n2;
      };
    ```

<h4 id='interfaceoption'>Optional</h4>

-   Not always we want to enforce the structure of the interface, fot that we can create optional properties by adding a `?` (question mark) after the name of the property

    -   We could also mark methods as optional
        -   `myMethod?(){...}`

    ```TypeScript
      interface Named {
          readonly name?: string;
          outputName?: string;
      }

      interface Greetable extends Named {
          greet(phrase: string): void;
      }

      class Person implements Greetable {
          name?: string;
          age = 30;

          constructor(n?: string) {
              if (n) {
                  this.name = n;
              }
          }

          greet(phrase: string) {
              if (this.name) {
                  console.log(`${phrase} ${this.name}`);
              } else {
                  console.log('Hi');
              }
          }
      }

      let user1: Greetable;

      user1 = new Person();
      // user1.name = 'Not Allowed';
      user1.greet('Hi there - I am');
      console.log(user1);
    ```

<h3 id='advancedtypes'>Advanced Types</h3>

[Go Back to Summary](#summary)

<h4 id='intersectiontypes'>Intersection Types</h4>

-   Intersection types (**&**)

    -   Combine one or more `types`

    ```TypeScript
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

      //+ New object type ElevatedEmployee
      const e1: ElevatedEmployee = {
          name: 'Roger',
          privileges: ['create-server'],
          startDate: new Date(),
      };
    ```

<h4 id='typeguards'>Type Guards</h4>

```TypeScript
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

  function add2(a: Combinable, b: Combinable) {
      if (typeof a === 'string' || typeof b === 'string') {
          return a.toString() + b.toString();
      }
      return a + b;
  }
```

-   This is called a **Type Guard**

    -   **Type Guard** is just a term that describes the idea or approach of checking if a certain property or method before using it.
    -   It allows us to the flexibility that `union type` gives us and still assure that our code run correctly at run time

    ```TypeScript
      if (typeof a === 'string' || typeof b === 'string') {
          return a.toString() + b.toString();
      }
    ```

-   Checking if a property exist

    ```TypeScript
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
          if ('loadCargo' in vehicle) {
              vehicle.loadCargo(1000);
          }
      }

      useVehicle(v1);
      useVehicle(v2);
    ```

-   Elegant way to check if a property exists

    -   We can use [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) (it's vanilla JS)
    -   The `instanceof` operator tests whether the `prototype` property of a constructor appears anywhere in the prototype chain of an object

    ```JavaScript
      function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
      const auto = new Car('Honda', 'Accord', 1998);

      console.log(auto instanceof Car);
      // expected output: true

      console.log(auto instanceof Object);
      // expected output: true
    ```

-   For objects we can use `in` or `instanceof`
-   And for other cases we can use `typeof`

<h4 id='discriminatedunion'>Discriminated Unions</h4>

-   `Discriminated Union` is a pattern which we can use to work with **union types** that makes implementing **type guards** easier
-   It's available when we are working with object types
-   The discriminant is a singleton type property which is common in each of the elements of the union (tag).

    ```TypeScript
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
    ```

<h4 id='typecasting'>Type Casting</h4>

-   **Type Casting** helps you tell TypeScript that some value is of a specific type

    -   **Option 1** - using `<...>` before the element
    -   **Option 2** define `as` the element type after targeting the element

    ```TypeScript
      // const userInputEl = <HTMLInputElement>document.getElementById('user-input')!;
      const userInputEl = document.getElementById('user-input')! as HTMLInputElement;
      userInputEl.value = 'Hi There!';
    ```

    -   `!` in the end of the element tells TypeScript that the expression in front of it will never yield `null`

<h4 id='indexproperties'>Index Properties</h4>

-   Works with object, we could define an error container where we define all the possible errors, and using generic key/value pairs to access the information

    -   `[key: string]: string`
    -   Where the `key` is of type `string`
    -   and the `value` is of type `string`

    ```TypeScript
      interface ErrorContainer {
          [key: string]: string;
      }

      const errorBag: ErrorContainer = {
          email: 'Not a valid email!',
          username: 'Must start with a capital character!',
      };
    ```

<h4 id='functionoverloads'>Function Overloads</h4>

-   Function overloads is a feature that allows us define multiple function signatures

    -   Multiple ways to call the function with multiple parameters to do something inside of that function

    ```TypeScript
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
    ```

<h4 id='optionalchaining'>Optional Chaining</h4>

-   by adding a `?` after the object that we are unsure that exists or not. If the property exist then it will accesses the next property, and so on...

    ```TypeScript
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
    ```

<h4 id='nullish'>Nullish Coalescing</h4>

-   the double `?` checks if the value is really `null` or `undefined` different from normal JS that an empty string is `falsy`

    ```TypeScript
      const userInput = '';
      const storedData = userInput || 'DEFAULT';
      console.log(storedData);
      // DEFAULT

      const userInput2 = '';
      const storedData2 = userInput2 ?? 'DEFAULT';
      console.log(storedData2);
      //
    ```

<h3 id='generics'>Generics</h3>

[Go Back to Summary](#summary)

<h4 id='generictype'>Generic Type</h4>

-   Generic type `Array<type_here>`

    ```TypeScript
      //! Generic Type Array of Strings
      // const names = ['Roger', 'Thaisa'];
      const names: Array<string> = []; // equal to string[]
      // names[0].split(' ');

      //! Generic Type Promise - Returning a String
      const promise: Promise<string> = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve('This is done');
          }, 2000);
      });
      promise.then((data) => {
          console.log(data.split(' '));
      });

      //! Generic Type Promise - Returning a Number
      const promise2: Promise<number> = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(10.6);
          }, 2000);
      });
      promise2.then((data) => {
          console.log(Math.ceil(data));
      });
    ```

<h4 id='genericfunction'>Generic Function</h4>

```TypeScript
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
```

<h4 id='constraints'>Constraints</h4>

-   The following code JavaScript fails silently, JavaScript won't throw an error, and our object doesn't have a property `33`
-   Currently we are saying that `T` and `U` should be **any type**

    ```TypeScript
      function merge3<T, U>(objA: T, objB: U) {
          return Object.assign(objA, objB);
      }

      const mergedObjAlternative3 = merge3({ name: 'Roger' }, 33);
      console.log(mergedObjAlternative3.age);

      // TypeScript will throw an error
    ```

-   Generic Type Constraints

    -   We add extends after the object that we want to constraints
    -   We can set any type of constraints, custom type, union types...

    ```TypeScript
      function merge3<T extends object, U extends object>(objA: T, objB: U) {
        return Object.assign(objA, objB);
      }

      const mergedObjAlternative3 = merge3({ name: 'Roger' }, { age: 33 });
      console.log(mergedObjAlternative3.name);
      console.log(mergedObjAlternative3);
    ```

<h4 id='anothergenericfunction'>Another Generic Function</h4>

-   we can create a custom `interface` and then **extends** our generic function, then explicit indicate that our function will return a **tuple** where the first position is of `type any` (not a number type), and the second position will be a `type string`.

    ```TypeScript
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
    ```

<h4 id='keyofconstraint'>The "keyof" Constraint</h4>

-   We can use the `keyof` constraint to extend certain types to the class to be more specific (instead of `type any`)

    ```TypeScript
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
    ```

-   To work with object, it's not that simple, because with objects, the only way to remove an object, it's by accessing the pointer of that object
-   Just because the structure of an object might be the same, this doesn't mean that the pointer in memory are the same, that's why we can't simply removeItem({name: 'Roger'})
-   One work around is to define the object as a constant, and then when we want to delete this object, we reference the same constant.
-   Beside that, we can constraint our class to only extends to `stings`, `numbers` and `booleans`

    ```TypeScript
      const objStorage = new DataStorage<object>();
      const rogerObj = { name: 'Roger' };

      objStorage.addItem(rogerObj);
      objStorage.addItem({ name: 'Thaisa' });
      objStorage.removeItem(rogerObj);
      console.log(objStorage.getItems());
    ```

<h4 id='utilitytype'>Generic Utility Type</h4>

-   [TypeScript Official Docs](https://www.typescriptlang.org/docs/handbook/utility-types.html)

-   **Partials**

    -   **Partial** is another type of property where it assigns everything as optional, this way when we have an empty array but we want to assign an interface so we can use this object later.
    -   We can assign as **Partial** with the type `<CourseGoal>`
    -   And then, before we return the new object, we convert it as a CourseGoal object, because so far we have a as a Partial object and not as CourseGoal object

        ```TypeScript
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
        ```

-   **Readonly**

    ```TypeScript
      const names2: Readonly<string[]> = ['Roger', 'Thaisa'];
      names2.push('Yumi'); // <---- It will throw an error
      names2.pop();        // <---- It will throw an error
    ```
