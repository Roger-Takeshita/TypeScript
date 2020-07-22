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
-   [Decorators](#decorators)
    -   [Init Project](#initproject)
    -   [What is a Decorator?](#what)
        -   [Decorator Factories](#decoratorfactories)
        -   [More Advance Decorator](#moreadvance)
        -   [Multiple Decorators](#multipledecorators)
        -   [Property Decorator](#propertydecorator)
            -   [Property Decorator](#propdec)
            -   [Property Descriptor](#propertydescriptor)
            -   [Method Decorator](#methodsdecorator)
            -   [Parameter Decorator](#parameterdecorator)
        -   [Return Decorator](#returndecorator)
        -   [Other Decorator Types](#otherdecorator)
            -   [Accessor Decorators - Return](#accessordec2)
            -   [Methods Decorators - Return](#methoddec2)
        -   [Decorators For Validation](#validationdec)
-   [Drag and Drop Project](#draganddrop)
    -   [Interacting with DOM Elements](#interacting)
    -   [Auto Bind Decorator](#autobind)
    -   [Validation](#validation1)
    -   [Singleton Pattern](#singletonpattern)
-   [Importing/Exporting - Split Project](#splitproject)
    -   [Bundle](#enablebundle)
        -   [TypeScript namespace](#namespace)
            -   [Exporting](#exporting)
            -   [Importing](#importing)
    -   [ES6 Modules](#es6modules)
        -   [Exporting ES6 Modules](#exportinges6)
        -   [Importing ES6 Modules](#importinges6)
-   [Webpack With TypeScript](#webpack)
    -   [What is a Webpack?](#whatis)
    -   [Third Party Libraries](#thirdparty)
    -   [Config Webpack](#configwebpack)
        -   [tsconfig.json](#tsconfig)
        -   [webpack.config.js - Development](#webpackconfig)
            -   [Build Webpack - Development](#developmentbuild)
        -   [webpack.config.prod.js - Production](#productionwebpack)
            -   [Build Webpack - Production](#productionbuild)
-   [Third Party Libraries and TypeScript](#thirdparty)
    -   [Project Base](#projectbase)
    -   [Create Folder and Files](#folderfiles)
    -   [Config Webpack and TypeScript](#configwebpackts)
        -   [Index.html](#indexbase)
        -   [package.json](#packagejson)
        -   [tsconfig.json](#tsconfigbase)
        -   [webpack.config.js](#webpackbase)
    -   [Installing JavaScript Libraries](#installingjavascrip)
    -   [declare - as a Last Resort](#declare)
    -   [npm i class-transform](#calsstransforme)
    -   [npm i class-validator](#calssvalidator)
-   [React App + TypeScript](#reactapp)
    -   [Installation](#install)
    -   [Config Base Project](#configbase)
        -   [App.tsx](#apptsx)
        -   [Index.tsx](#indextsx)
        -   [Index.css](#indexcss)
    -   [Structuring Project](#structuringproject)
        -   [Folder and Files](#folderfiles)
        -   [TodoList.jsx](#todolist)
        -   [NewTodo.jsx](#newtodo)
        -   [Todo Model](#todomodel)
        -   [App.tsx](#app1)
-   [Node + Express with TypeScript](#nodeproject)
    -   [Base Project](#newproject)
        -   [Create New Project](#createproject)
        -   [Config tsconfig.json](#configtsconfig)
        -   [Cong package.json](#configpackage)
        -   [Folder and Files](#folderfiles)
        -   [App.ts](#appts)
        -   [index.ts](#appts)
    -   [CRUD Todo List](#todo)
        -   [Folders and Files](#folderfiles1)
        -   [App.ts](#appts1)
        -   [Models](#models)
        -   [Controllers](#controllers)
        -   [Routes](#routes)

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

<h1 id='decorators'>Decorators</h1>

[Go Back to Summary](#summary)

<h2 id='initproject'>Init Project</h2>

[Go Back to Summary](#summary)

-   Create new folder

    -   `mkdir 2_Decorators`
    -   `cd 2_Decorators`
    -   `npm init`
    -   `npm i`
    -   `tsc --init`

-   Then we have to config our `tsconfig.json`

    -   We first need to change the **target** from `es5` to `es6`
    -   Then we have to enable the decorators, otherwise, we won't be able to user decorators in our project

    ```JSON
      {
        "compilerOptions": {

          /* Basic Options */
          "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
          "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
          "sourceMap": true /* Generates corresponding '.map' file. */,
          "outDir": "./dist" /* Redirect output structure to the directory. */,
          "rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
          "removeComments": true /* Do not emit comments to output. */,
          "noEmitOnError": true,

          /* Strict Type-Checking Options */
          "strict": true /* Enable all strict type-checking options. */,

          /* Additional Checks */
          "noUnusedLocals": true /* Report errors on unused locals. */,
          "noUnusedParameters": true /* Report errors on unused parameters. */,
          "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
          "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,

          /* Module Resolution Options */
          "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

          /* Experimental Options */
          "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,

          /* Advanced Options */
          "skipLibCheck": true /* Skip type checking of declaration files. */,
          "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
        }
      }
    ```

-   Packages

    -   Install `npm i lite-server`

-   in `package.json`

    -   Config our `start` script as `lite-server`

    ```JSON
      {
        "name": "2_decorators",
        "version": "1.0.0",
        "description": "TypeScript Decorators",
        "main": "app.js",
        "scripts": {
          "start": "lite-server",
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "Roger Takeshita",
        "license": "ISC",
        "dependencies": {
          "lite-server": "^2.5.4"
        }
      }
    ```

<h2 id='what'>What is a Decorator?</h2>

[Go Back to Summary](#summary)

-   Decorator is in the end just a function, a function that you apply to something
-   So we can declare as a normal function, the only difference is that the name of the function starts with a capital letter (by convention)
-   To use the decorator we have to add the `@` in front of the decorator
    -   We declare before the of the thing that we want to apply this function/decorator
    -   `@` is a symbol recognized by TypeScript, after the `@` we should **point** to the function/decorator (no execute `()`)
-   Decorators receive argument(s) depending on where we want to apply the decorator
    -   For **class** we have one argument **constructor**
-   **Decorators are executed when the class is defined**, in other words, we don't even need to instantiate the class to execute the decorator

    ```TypeScript
      function Logger(constructor: Function) {
          console.log('Logging...');
          console.log(constructor);
      }

      @Logger
      class Person {
          name = 'Roger';
          constructor() {
              console.log('Creating person object...');
          }
      }

      const person = new Person();
      console.log(person);
    ```

<h3 id='decoratorfactories'>Decorator Factories</h3>

[Go Back to Summary](#summary)

-   The difference between a normal decorator and a **decorator factories**, is that we have to define the decorator returning an anonymous function.

    -   The advantage of doing that is that we can pass it arguments to the decorator that can be used inside of the the constructor
    -

    ```TypeScript
      function Logger(logString: string) {
          return function (constructor: Function) {
              console.log(logString);
              console.log(constructor);
          };
      }

      @Logger('LOGGING - PERSON')
      class Person {
          name = 'Roger';
          constructor() {
              console.log('Creating person object...');
          }
      }

      const person = new Person();
      console.log(person);
    ```

-   Another example of **decorator factories**

    -   If we're not going to use the constructor, we have to indicates to TypeScript that we know that the the decorator factory needs an argument (a constructor in this case) but we are not going to use it. So we have to specify using `_`

    ```TypeScript
      function WithTemplate(template: string, hookId: string) {
          return function (_: Function) {
              const hookEl = document.getElementById(hookId);
              if (hookEl) {
                  hookEl.innerHTML = template;
              }
          };
      }

      @WithTemplate('<h1>My Person Object</h1>', 'app')
      class Person {
          name = 'Roger';
          constructor() {
              console.log('Creating person object...');
          }
      }
    ```

<h3 id='moreadvance'>More Advance Decorator</h3>

[Go Back to Summary](#summary)

-   We could instantiate a new constructor of our class, then output the name to the DOM

    ```TypeScript
      function WithTemplate(template: string, hookId: string) {
          return function (constructor: any) {
              const hookEl = document.getElementById(hookId);
              const newPerson = new constructor();

              if (hookEl) {
                  hookEl.innerHTML = template;
                  hookEl.querySelector('h1')!.innerHTML = newPerson.name;
              }
          };
      }

      @WithTemplate('<h1>My Person Object</h1>', 'app')
      class Person {
          name = 'Roger';
          constructor() {
              console.log('Creating person object...');
          }
      }
    ```

<h3 id='multipledecorators'>Multiple Decorators</h3>

[Go Back to Summary](#summary)

-   We can use multiple decorators, but TypeScript executes **bottom up**

        ```TypeScript
          function Logger(logString: string) {
              return function (constructor: Function) {
                  console.log(logString);
                  console.log(constructor);
              };
          }

          function WithTemplate(template: string, hookId: string) {
              return function (constructor: any) {
                  console.log('Rendering template');
                  const hookEl = document.getElementById(hookId);
                  const newPerson = new constructor();

                  if (hookEl) {
                      hookEl.innerHTML = template;
                      hookEl.querySelector('h1')!.innerHTML = newPerson.name;
                  }
              };
          }

          @Logger('LOGGING')
          @WithTemplate('<h1>My Person Object</h1>', 'app')
          class Person {
              name = 'Roger';
              constructor() {
                  console.log('Creating person object...');
              }
          }
        ```

<h3 id='propertydecorator'>Property Decorator</h3>

[Go Back to Summary](#summary)

<h4 id='propdec'>Property Decorator</h4>

-   To add a decorator to a property, it's like adding to a class
-   The only differences are the arguments, properties the decorator has two arguments

    -   1st - **target**
        -   if the target is a class, then it's the `constructor`
        -   if the target is an object, then it's the `prototype`
    -   2nd - **property name**

    ```TypeScript
      function Log(target: any, propertyName: string | symbol) {
          console.log('Property decorator!');
          console.log(target, propertyName);
      }

      class Product {
          @Log
          title: string;
          private _price: number;

          set price(val: number) {
              if (val > 0) {
                  this._price = val;
              } else {
                  throw new Error('Invalid Price - Should Be Positive!');
              }
          }

          constructor(t: string, p: number) {
              this.title = t;
              this._price = p;
          }

          getPriceWithTax(tax: number) {
              return this._price * (1 + tax);
          }
      }
    ```

<h4 id='propertydescriptor'>Property Descriptor</h4>

-   Adding a decorator to an accessor (**setter**)

    ```TypeScript
      function Log(target: any, propertyName: string | symbol) {
          console.log('Property decorator!');
          console.log(target, propertyName);
      }

      function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
          console.log('Accessor decorator');
          console.log(target);
          console.log(name);
          console.log(descriptor);
      }

      class Product {
          @Log
          title: string;
          private _price: number;

          @Log2
          set price(val: number) {
              if (val > 0) {
                  this._price = val;
              } else {
                  throw new Error('Invalid Price - Should Be Positive!');
              }
          }

          constructor(t: string, p: number) {
              this.title = t;
              this._price = p;
          }

          getPriceWithTax(tax: number) {
              return this._price * (1 + tax);
          }
      }
    ```

<h4 id='methodsdecorator'>Method Decorator</h4>

[Go Back to Summary](#summary)

```TypeScript
  function Log3(
      target: any,
      name: string | symbol,
      descriptor: PropertyDescriptor
  ) {
      console.log('Method decorator');
      console.log(target);
      console.log(name);
      console.log(descriptor);
  }

  class Product {
      @Log
      title: string;
      private _price: number;

      @Log2
      set price(val: number) {
          if (val > 0) {
              this._price = val;
          } else {
              throw new Error('Invalid Price - Should Be Positive!');
          }
      }

      constructor(t: string, p: number) {
          this.title = t;
          this._price = p;
      }

      @Log3
      getPriceWithTax(tax: number) {
          return this._price * (1 + tax);
      }
  }
```

<h4 id='parameterdecorator'>Parameter Decorator</h4>

```TypeScript
  function Log4(target: any, name: string | symbol, position: number) {
      console.log('Parameter decorator');
      console.log(target);
      console.log(name);
      console.log(position);
  }

  class Product {
      @Log
      title: string;
      private _price: number;

      @Log2
      set price(val: number) {
          if (val > 0) {
              this._price = val;
          } else {
              throw new Error('Invalid Price - Should Be Positive!');
          }
      }

      constructor(t: string, p: number) {
          this.title = t;
          this._price = p;
      }

      @Log3
      getPriceWithTax(@Log4 tax: number) {
          return this._price * (1 + tax);
      }
  }
```

<h3 id='returndecorator'>Return Decorator</h3>

[Go Back to Summary](#summary)

-   It's possible to have a `return value` inside a decorator (**class** and **methods** decorators)

-   Working with class decorator

    -   With class decorators, we can return a new constructor function which will replace the old one, in other words will replace the class d
    -   So we could return a new **class** (anonymous - doesn't need to have a name), a new constructor function, and we could extends the new **constructor**
    -   In other words we are keeping all the original properties for the constructor and add new functionalities
        -   To do that, we have to call `super()` inside of our new constructor - just like a normal **class** to inherit from the parent class

    ```TypeScript
      function WithTemplate(template: string, hookId: string) {
          console.log('Template Factory');
          return function <T extends { new (...args: any[]): { name: string } }>(
              originalConstructor: T
          ) {
              return class extends originalConstructor {
                  constructor(..._: any[]) {
                      super();

                      console.log('Rendering template');
                      const hookEl = document.getElementById(hookId);

                      if (hookEl) {
                          hookEl.innerHTML = template;
                          hookEl.querySelector('h1')!.innerHTML = this.name;
                      }
                  }
              };
          };
      }

      @Logger('LOGGING')
      @WithTemplate('<h1>My Person Object</h1>', 'app')
      class Person {
          name = 'Roger';

          constructor() {
              console.log('Creating person object...');
          }
      }

      // const person = new Person();
      // console.log(person);
    ```

<h3 id='otherdecorator'>Other Decorator Types</h3>

[Go Back to Summary](#summary)

-   [Object.defineProperty() - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

-   We can also have a return value to other decorators, but not always the return value is respected
-   Decorators that we can return something:
    -   `methods` and `accessors`
-   Decorators that TypeScript ignores the return value:

    -   `properties` and `parameters`

-   For `methods` and `accessors` we can execute another function/methods (`descriptor`)

    -   For `methods` the property descriptor we have:
        -   `configurable`
        -   `enumerable`
        -   `value` (in our case it's a method)
        -   `writable`
    -   For `accessors` the property descriptor we have:
        -   `configurable`
        -   `enumerable`
        -   `get` (getters)
        -   `set` (setters)

<h4 id='accessordec2'>Accessor Decorators - Return</h4>

-   We could change the return value of the accessor and assign a new method to override the old method

    -   For example, we could have a new **setter**
    -   To do that we have to indicate to TypeScript that the we have a return value type `PropertyDescriptor`

    ```TypeScript
      function Log2(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
          console.log('Accessor decorator');
          console.log(target);
          console.log(name);
          console.log(descriptor);

          return {set ...}
      }
    ```

<h4 id='methoddec2'>Methods Decorators - Return</h4>

-   One way to bind `this` keyword to the method that is executed, and not the method that is calling, we need to bind the this, in the example bellow we are using arrow function to bind, but we could use `bind(this)` (es5)

    ```JavaScript
      class Printer {
          message = 'This works!';

          showMessage() {
              console.log(this.message);
          }
      }

      const p = new Printer();
      const button = document.querySelector('button')!;
      button.addEventListener('click', () => p.showMessage());
    ```

-   Elegant way to bind `this` using decorators

    ```TypeScript
      function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
          const originalMethod = descriptor.value;
          const adjDescriptor: PropertyDescriptor = {
              configurable: true,
              enumerable: false,
              get() {
                  const boundFn = originalMethod.bind(this);
                  return boundFn;
              },
          };
          return adjDescriptor;
      }

      class Printer {
          message = 'This works!';

          @AutoBind
          showMessage() {
              console.log(this.message);
          }
      }

      const p = new Printer();
      const button = document.querySelector('button')!;
      button.addEventListener('click', p.showMessage);
    ```

<h3 id='validationdec'>Decorators For Validation</h3>

[Go Back to Summary](#summary)

```TypeScript
  interface ValidatorConfig {
      [property: string]: {
          [validatableProp: string]: string[]; // ['required', 'positive']
      };
  }

  const registeredValidators: ValidatorConfig = {};

  function Required(target: any, propName: string) {
      registeredValidators[target.constructor.name] = {
          ...registeredValidators[target.constructor.name],
          [propName]: ['required'],
      };
  }

  function PositiveNumber(target: any, propName: string) {
      registeredValidators[target.constructor.name] = {
          ...registeredValidators[target.constructor.name],
          [propName]: ['positive'],
      };
  }

  function validate(obj: any) {
      const objValidatorConfig = registeredValidators[obj.constructor.name];
      if (!objValidatorConfig) {
          return true;
      }

      let isValid = true;

      for (const prop in objValidatorConfig) {
          for (const validator of objValidatorConfig[prop]) {
              switch (validator) {
                  case 'required':
                      isValid = isValid && !!obj[prop];
                      break;
                  case 'positive':
                      isValid = isValid && obj[prop] > 0;
                      break;
              }
          }
      }

      return isValid;
  }

  class Course {
      @Required
      title: string;
      @PositiveNumber
      price: number;

      constructor(t: string, p: number) {
          this.title = t;
          this.price = p;
      }
  }

  const courseForm = document.querySelector('form')!;
  courseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const titleEl = document.getElementById('title') as HTMLInputElement;
      const priceEl = document.getElementById('price') as HTMLInputElement;

      const title = titleEl.value;
      const price = +priceEl.value;

      const createdCourse = new Course(title, price);
      if (!validate(createdCourse)) {
          alert('Invalid input, please try again!');
          return;
      }
      console.log(createdCourse);
  });
```

<h1 id='draganddrop'>Drag and Drop Project</h1>

<h2 id='interacting'>Interacting with DOM Elements</h2>

[Go Back to Summary](#summary)

-   We can create a **class** to interact with our `DOM` elements, to instantiate a HTML element. For example our form in `index.html` isn't visible

    ```HTML
      <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>ProjectManager</title>
          <link rel="stylesheet" href="app.css" />
          <script src="dist/app.js" defer></script>
      </head>

      <body>
          <template id="project-input">
              <form>
                  <div class="form-control">
                      <label for="title">Title</label>
                      <input type="text" id="title" />
                  </div>
                  <div class="form-control">
                      <label for="description">Description</label>
                      <textarea id="description" rows="3"></textarea>
                  </div>
                  <div class="form-control">
                      <label for="people">People</label>
                      <input type="number" id="people" step="1" min="0" max="10" />
                  </div>
                  <button type="submit">ADD PROJECT</button>
              </form>
          </template>
          <template id="single-project">
              <li></li>
          </template>
          <template id="project-list">
              <section class="projects">
                  <header>
                      <h2></h2>
                  </header>
                  <ul></ul>
              </section>
          </template>
          <div id="app"></div>
      </body>

      </html>
    ```

-   We can have access to the form template and render inside the `<div id="app">`, to do that, we have to first target our `template` to have access to the form information
-   We first create a class
    -   Define all the dom elements that we need to have access, and assign their respective `type`
    -   In the constructor, then we create and connect the properties to the DOM
    -   Then after we immediately instantiate an object of this class, we want to render our form, and to do so, we can use `importNode()` from our DOM methods, and then we pass a pointer to our template content, and the second argument is the lvl (how deep we want to have access - `true` to have access to the nested elements)

```TypeScript
  class ProjectInput {
      templateElement: HTMLTemplateElement;
      hostElement: HTMLDivElement;
      element: HTMLFormElement;
      titleInputElement: HTMLInputElement;
      descriptionInputElement: HTMLInputElement;
      peopleInputElement: HTMLInputElement;

      constructor() {
          this.templateElement = document.getElementById(
              'project-input'
          )! as HTMLTemplateElement;
          this.hostElement = document.getElementById('app')! as HTMLDivElement;

          const importedNode = document.importNode(
              this.templateElement.content,
              true
          );

          this.element = importedNode.firstElementChild as HTMLFormElement;
          this.element.id = 'user-input';
          this.titleInputElement = this.element.querySelector(
              '#title'
          )! as HTMLInputElement;
          this.descriptionInputElement = this.element.querySelector(
              '#description'
          )! as HTMLInputElement;
          this.peopleInputElement = this.element.querySelector(
              '#people'
          )! as HTMLInputElement;
          this.configure();
          this.attach();
      }

      private submitHandler(event: Event) {
          event.preventDefault();
          console.log(this.titleInputElement.value);
      }

      // create an eventListener to to submit
      private configure() {
          this.element.addEventListener('submit', () => this.submitHandler);
      }

      // to have insert a new form to afterbegin of {}
      private attach() {
          this.hostElement.insertAdjacentElement('afterbegin', this.element);
      }
  }

  const projectInput = new ProjectInput();
```

<h2 id='autobind'>Auto Bind Decorator</h2>

[Go Back to Summary](#summary)

-   Notice that to our `submitHandler` to have access to `this.titleInputElement.value` we had to bind the `this` keyword, otherwise, the `submitHandler` won't be able to access to the properties of the class

    ```JavaScript
      private configure() {
          this.element.addEventListener('submit', () => this.submitHandler);
      }
    ```

-   Another elegant way to bind the `this` is using **function/method decorators**, then we could create a decorator to auto bind the `this`, using the function decorator properties available to TypeScript

    -   target
    -   method name
    -   descriptor (the property of this function)

    -   We first create our `function/method decorator`
        -   Where we save the original method
        -   and then we configure our descriptor
            -   and using the `getter`, to execute when we access the function, we can now override / set new properties to this method

    ```TypeScript
      function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
          const originalMethod = descriptor.value; // store our original method
          const adjustedDescriptor: PropertyDescriptor = {
              configurable: true,
              get() {
                  const boundFn = originalMethod.bind(this);
                  return boundFn;
              },
          };

          return adjustedDescriptor;
      }
    ```

    -   And then in our `submitHandler` and `configure` method, we can now use the decorator to auto bind the `this`

        ```TypeScript
          @AutoBind
          private submitHandler(event: Event) {
              event.preventDefault();
              console.log(this.titleInputElement.value);
          }

          // create an eventListener to to submit
          private configure() {
              // this.element.addEventListener('submit', this.submitHandler.bind(this));
              // this.element.addEventListener('submit', () => this.submitHandler);
              this.element.addEventListener('submit', this.submitHandler);
          }
        ```

<h2 id='validation1'>Validation</h2>

[Go Back to Summary](#summary)

-   We can create a new function (a private one) to validate the user input

    -   To do so, we could create a function that returns a `tuple` or `void (undefined)` for functions.
    -   And once the user `submit` the form, it will check if the `userInput` is an array (tuple) before doing anything else.

    ```TypeScript
      private gatherUserInput(): [string, string, number] | void {
          const enteredTitle = this.titleInputElement.value;
          const enteredDescription = this.titleInputElement.value;
          const enteredPeople = this.peopleInputElement.value;

          if (
              enteredTitle.trim().length === 0 ||
              enteredDescription.trim().length === 0 ||
              enteredPeople.trim().length === 0
          ) {
              alert('Invalid input, please try again');
              return;
          }

          return [enteredTitle, enteredDescription, +enteredPeople];
      }

      @AutoBind
      private submitHandler(event: Event) {
          event.preventDefault();
          const userInput = this.gatherUserInput();

          if (Array.isArray(userInput)) {
              const [title, description, people] = userInput;
              console.log(title, description, people);
              this.clearInputs();
          }
      }
    ```

<h2 id='singletonpattern'>Singleton Pattern</h2>

[Go Back to Summary](#summary)

-   To build a storage like Redux, we can use the singleton pattern to create a single source of truth.

1. Create private variables with their respective type and initial value.
2. Single instance of an object

    - To create a private constructor, we just need to assign private in front of the constructor
    - But with that, we no longer can create a new instance of the class (`new className()`)
    - To have access to the private constructor we have to create a **static** method, this way we don't need to invoke the class, but just the method

        - **ATTENTION**: With static methods / properties in our class, we cannot be accessed directly inside other methods in our Class. This static method / property is only available outside of the class
        - Static methods/properties are detached from the class, that's why wen can't access using **this** keyword
        - To access the static method/property inside of a class method, we have to call the class itself to access the method/property

    - Then we need to create a private static instance, type **class**, so we can check if there is already an existing **class**, if yes, we use that one, otherwise, create one

    ```TypeScript
      class ProjectState {
          private listeners: any[] = [];
          private projects: any[] = [];
          private static instance: ProjectState;

          private constructor() {}

          static getInstance() {
              if (this.instance) {
                  return this.instance;
              }

              this.instance = new ProjectState();
              return this.instance;
          }

          addListener(listenerFn: Function) {
              this.listeners.push(listenerFn);
          }

          addProject(title: string, description: string, numOfPeople: number) {
              const newProject = {
                  id: Math.random().toString(),
                  title,
                  description,
                  people: numOfPeople,
              };

              this.projects.push(newProject);
              for (const listenerFn of this.listeners) {
                  listenerFn(this.projects.slice());
              }
          }
      }

      const projectState = ProjectState.getInstance();
    ```

<h1 id='splitproject'>Importing/Exporting - Split Project</h1>

[Go Back to Summary](#summary)

<h2 id='enablebundle'>Bundle</h2>

[Go Back to Summary](#summary)

-   To split the project into several little files,
-   We first have to enable this feature in our `tsconfig.json`
    -   `"outFile": "./dist/bundle.js" /* Concatenate and emit output to single file. */,`
    -   where we specify the name and directory of the output file.
    -   in our case we are outputting as `bundle.js`, so in our `index.html` we have to change the `app.js` to `bundle.js`
        -   with `outFile` enabled, TypeScript will combine all `.ts` files into a single file `bundle.js`

<h3 id='namespace'>TypeScript namespace</h3>

[Go Back to Summary](#summary)

-   After creating a new `.ts` file, we then can use the `namespace` functionality (**only** available to TypeScript, not to JavaScript/browser)
-   Though this is a very dangerous way to import/export files, because if we delete something from a file, this could break our app, because we are not implicit importing the properties.

<h4 id='exporting'>Exporting</h4>

-   We can export any type of `class`, `methods`, `interfaces`..., we just need add `export` in front of the property

-   for example, our `AutoBind` function

    -   in `decorators/AutoBind.ts` (our end file)
    -   We can create namespace and export the `AutoBind` function like this:

    ```TypeScript
      namespace App {
          export function AutoBind(
              _: any,
              _2: string,
              descriptor: PropertyDescriptor
          ) {
              const originalMethod = descriptor.value; // store our original method
              const adjustedDescriptor: PropertyDescriptor = {
                  configurable: true,
                  get() {
                      const boundFn = originalMethod.bind(this);
                      return boundFn;
                  },
              };

              return adjustedDescriptor;
          }
      }
    ```

<h4 id='importing'>Importing</h4>

-   And to import our `.ts` files
-   we can do so, using

    -   `///<reference parth="path/name-of-file.ts" />`

-   for example in our `project-list.ts`

    ```TypeScript
      /// <reference path="base-component.ts"/>
      /// <reference path="../decorators/autobind.ts"/>
      /// <reference path="../state/project-state.ts"/>
      /// <reference path="../models/project.ts"/>
      /// <reference path="../models/drag-drop.ts"/>

      namespace App {
          export class ProjectList extends Component<HTMLDivElement, HTMLElement>
              implements DragTarget {
              assignedProjects: Project[];

              constructor(private type: 'active' | 'finished') {
                  super('project-list', 'app', false, `${type}-projects`);
                  this.assignedProjects = [];

                  this.configure();
                  this.renderContent();
              }

              @AutoBind
              dragOverHandler(event: DragEvent) {
                  if (
                      event.dataTransfer &&
                      event.dataTransfer.types[0] === 'text/plain'
                  ) {
                      event.preventDefault();
                      const listEl = this.element.querySelector('ul')!;
                      listEl.classList.add('droppable');
                  }
              }

              @AutoBind
              dropHandler(event: DragEvent) {
                  const projectId = event.dataTransfer!.getData('text/plain');
                  projectState.moveProject(
                      projectId,
                      this.type === 'active'
                          ? ProjectStatus.Active
                          : ProjectStatus.Finished
                  );
              }

              @AutoBind
              dragLeaveHandler(_: DragEvent) {
                  const listEl = this.element.querySelector('ul')!;
                  listEl.classList.remove('droppable');
              }

              configure() {
                  this.element.addEventListener('dragover', this.dragOverHandler);
                  this.element.addEventListener('dragleave', this.dragLeaveHandler);
                  this.element.addEventListener('drop', this.dropHandler);

                  projectState.addListener((projects: Project[]) => {
                      const relevantProjects = projects.filter((prj) => {
                          if (this.type === 'active') {
                              return prj.status === ProjectStatus.Active;
                          }

                          return prj.status === ProjectStatus.Finished;
                      });
                      this.assignedProjects = relevantProjects;
                      this.renderProjects();
                  });
              }

              renderContent() {
                  const listId = `${this.type}-projects-list`;
                  this.element.querySelector('ul')!.id = listId;
                  this.element.querySelector(
                      'h2'
                  )!.textContent = `${this.type.toLocaleUpperCase()} PROJECTS`;
              }

              private renderProjects() {
                  const listEl = document.getElementById(
                      `${this.type}-projects-list`
                  )! as HTMLUListElement;

                  listEl.innerHTML = '';

                  for (const projectItem of this.assignedProjects) {
                      new ProjectItem(
                          this.element.querySelector('ul')!.id,
                          projectItem
                      );
                  }
              }
          }
      }
    ```

<h2 id='es6modules'>ES6 Modules</h2>

[Go Back to Summary](#summary)

-   we first have to change our `tsconfig.json`
-   we have to change the `"module": "amd"` to `"module": "ES2015"` (when they introduced ES Modules)
-   And then we have to comment it out the `"outFile": "./dist/bundle.js"` because is not support with ES Modules
-   After all the modifications, in our `index.html`
    -   We have to change back to `app.js`
    -   remove the `defer`
    -   add `type="module"`
        -   `<script type="module" src="dist/app.js"></script>`

<h3 id='exportinges6'>Exporting ES6 Modules</h3>

[Go Back to Summary](#summary)

-   Another and better option is to use the `ES6` modules, supported by all modern browsers. Where we simply `export` the the thing that we want to use in another file.

-   for example, in our `decorators/AutoBind.ts`

    ```TypeScript
      export function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
          const originalMethod = descriptor.value; // store our original method
          const adjustedDescriptor: PropertyDescriptor = {
              configurable: true,
              get() {
                  const boundFn = originalMethod.bind(this);
                  return boundFn;
              },
          };

          return adjustedDescriptor;
      }
    ```

<h3 id='importinges6'>Importing ES6 Modules</h3>

[Go Back to Summary](#summary)

-   to import we import like we normally do using ES6

    -   `import { ... } from 'path/name-of-the-file.js'`
    -   **Important** we have to define like the file has been already compiled `.js`

-   in our `project-list.ts`

    ```TypeScript
      import { AutoBind } from '../decorators/autobind.js';
      import { DragTarget } from '../models/drag-drop.js';
      import { Project, ProjectStatus } from '../models/project.js';
      import { projectState } from '../state/project-state.js';
      import { Component } from './base-component.js';
      import { ProjectItem } from './project-item.js';

      export class ProjectList extends Component<HTMLDivElement, HTMLElement>
          implements DragTarget {
          assignedProjects: Project[];

          constructor(private type: 'active' | 'finished') {
              super('project-list', 'app', false, `${type}-projects`);
              this.assignedProjects = [];

              this.configure();
              this.renderContent();
          }

          @AutoBind
          dragOverHandler(event: DragEvent) {
              if (
                  event.dataTransfer &&
                  event.dataTransfer.types[0] === 'text/plain'
              ) {
                  event.preventDefault();
                  const listEl = this.element.querySelector('ul')!;
                  listEl.classList.add('droppable');
              }
          }

          @AutoBind
          dropHandler(event: DragEvent) {
              const projectId = event.dataTransfer!.getData('text/plain');
              projectState.moveProject(
                  projectId,
                  this.type === 'active'
                      ? ProjectStatus.Active
                      : ProjectStatus.Finished
              );
          }

          @AutoBind
          dragLeaveHandler(_: DragEvent) {
              const listEl = this.element.querySelector('ul')!;
              listEl.classList.remove('droppable');
          }

          configure() {
              this.element.addEventListener('dragover', this.dragOverHandler);
              this.element.addEventListener('dragleave', this.dragLeaveHandler);
              this.element.addEventListener('drop', this.dropHandler);

              projectState.addListener((projects: Project[]) => {
                  const relevantProjects = projects.filter((prj) => {
                      if (this.type === 'active') {
                          return prj.status === ProjectStatus.Active;
                      }

                      return prj.status === ProjectStatus.Finished;
                  });
                  this.assignedProjects = relevantProjects;
                  this.renderProjects();
              });
          }

          renderContent() {
              const listId = `${this.type}-projects-list`;
              this.element.querySelector('ul')!.id = listId;
              this.element.querySelector(
                  'h2'
              )!.textContent = `${this.type.toLocaleUpperCase()} PROJECTS`;
          }

          private renderProjects() {
              const listEl = document.getElementById(
                  `${this.type}-projects-list`
              )! as HTMLUListElement;

              listEl.innerHTML = '';

              for (const projectItem of this.assignedProjects) {
                  new ProjectItem(this.element.querySelector('ul')!.id, projectItem);
              }
          }
      }
    ```

<h1 id='webpack'>Webpack With TypeScript</h1>

[Go Back to Summary](#summary)

-   [Webpack Official Docs](https://webpack.js.org/concepts/)

<h2 id='whatis'>What is a Webpack?</h2>

[Go Back to Summary](#summary)

-   It's a bundling and "Build Orchestration" tool, that reduces the amount of HTTP requests by bundling code together so we can write code, split across multiple files, but then **webpack** takes all these files and bundles together, and also optimize our code (minified).
-   At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a **dependency graph** which maps every module your project needs and generates one or more bundles.

    -   **Dependency Graph**

        -   Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application.

        > When webpack processes your application, it starts from a list of modules defined on the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then bundles all of those modules into a small number of bundles - often, just one - to be loaded by the browser.

<h2 id='thirdparty'>Third Party Libraries</h2>

[Go Back to Summary](#summary)

-   Install webpack as a developer tool

    ```Bash
      npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
    ```

-   webpack
    -   It's the heart of webpack, this is responsible for bundling our code, plugin certain functionalities and to transform our code.
        -   Transform means, that webpack will take all of `.ts` files, generate the `.js` and bundle all `.js` into a single `.js` file
-   webpack-cli
    -   To run commands in our project
-   webpack-dev-server
    -   To have a builtin development server, to starts webpack under the hood which watches our files changes
-   ts-loader
    -   Works together with `webpack`, ts-loader tells `webpack` how to convert the TypeScript code to JavaScript
-   typescript
    -   It's a good practice to install a specific version of TypeScript per project, just in case the latest version breaks something in our project

<h2 id='configwebpack'>Config Webpack</h2>

<h3 id='tsconfig'>tsconfig.json</h3>

[Go Back to Summary](#summary)

-   Set the :

    -   `target` to `es5` or `es6`
    -   `module` to `ES2015` or `ES6`
    -   `outDir` to our destination folder (`./dist`)
    -   comment it out - `rootDir` since we don't need to specify the root directory anymore, because webpack will take over for us

    ```JavaSCript
      {
        "compilerOptions": {
          /* Basic Options */
          "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
          "module": "ES2015" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
          "lib": [
            "DOM",
            "ES6",
            "DOM.Iterable",
            "ScriptHost"
          ] /* Specify library files to be included in the compilation. */,
          "sourceMap": true /* Generates corresponding '.map' file. */,
          "outDir": "./dist" /* Redirect output structure to the directory. */,
          // "rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
          "removeComments": true /* Do not emit comments to output. */,
          "noEmitOnError": true,

          /* Strict Type-Checking Options */
          "strict": true /* Enable all strict type-checking options. */,
          /* Additional Checks */
          "noUnusedLocals": true /* Report errors on unused locals. */,
          "noUnusedParameters": true /* Report errors on unused parameters. */,
          "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
          "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,

          /* Module Resolution Options */
          "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

          /* Experimental Options */
          "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,

          /* Advanced Options */
          "skipLibCheck": true /* Skip type checking of declaration files. */,
          "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
        }
      }
    ```

<h3 id='webpackconfig'>webpack.config.js - Development</h3>

[Go Back to Summary](#summary)

-   Create a new file `webpack.config.js` in the root of our project (next to `tsconfig.json`)
-   basically webpack uses the `node.js` features, so we can export like in `node.js`

    -   `export.modules = {}`
    -   The idea is to export a JavaScript object with our webpack configuration

-   **ATTENTION** with webpack we don't need to specify the extension of our imports, because webpack will automatically look for files and their extensions. We had to that before because we were using the native builtin browser **es module** functionality

-   Define our entry point file of our project, in our `app.ts` (we use the relative path)
-   the `output` property is an object, where we define the `filename` and the `path` (**the path in this case is the absolute path**)
    -   to build one absolute path we can use `path` module that comes with `node.js`
    -   set our `publicPath` to `dist`
        -   We have to specify the `dist` folder, otherwise, webpack will try to look for our `bundle.js` where is called (`package.json`)
-   the `devtool` property works with our `sourceMap` in `tsconfig.json` to help us debug our code
    -   `devtool: 'inline-source-map'`
-   By default webpack doesn't know what to do with `.ts` files, it only knows that has to bundle them, for that we have to tell webpack
    -   to do that, we add the `module` property, it's an object that tells webpack how to handle our `.ts` files
    -   We define the `test` property, webpack will check the file for errors, and we define using a regular expression
    -   then we define the `use` property, we specify what webpack should do with these files, we specify the the loader, in our case `ts-loader`
    -   and for last (not necessary), `exclude: /node_modules/`
-   our last configuration `resolve` property, there we can specify webpack to look for certain types of files, by default webpack will look for '.js` files
-   At the top of our configuration, add `mode: 'development',` this tells webpack that here we are build for development, and here it will do fewer optimization, to improve our debugging experience (more easier), and give more meaningful error messages

    ```JavaScript
      const path = require('path');

      module.exports = {
          mode: 'development',
          entry: './src/app.ts',
          output: {
              filename: 'bundle.js',
              path: path.resolve(__dirname, 'dist'),
              publicPath: 'dist'
          },
          devtool: 'inline-source-map',
          module: {
              rules: [
                  {
                      test: /\.ts$/,
                      use: 'ts-loader',
                      exclude: /node_modules/,
                  },
              ],
          },
          resolve: {
              extensions: ['.js', '.ts'],
          },
      };
    ```

<h4 id='developmentbuild'>Build Webpack - Development</h4>

-   To run our build, we can add a new script inn our `package.json`

    ```JSON
      "scripts": {
        "start": "lite-server",
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
      },
    ```

<h3 id='productionwebpack'>webpack.config.prod.js - Production</h3>

[Go Back to Summary](#summary)

-   Create a new file `webpack.config.prod.js`
-   For production we have to tweak a little bit our webpack dev config

    -   Change `mode` to `production`
    -   Remove `publicPath` (that was necessary for `development`)
    -   Change `devetool` to `none` since we don't want to debug our production project
    -   Adde an extra property, the `plugins`, it's an array, where we can define certain plugins to help us manage our webpack
        -   For that we can install `npm i --save-dev clean-webpack-plugin`, that helps us clean up the `dist` folder, it'll delete all the files in the `dist` folder and build a new version of it (more updated version) whenever we rebuild our project
        -   In the plugins array, we instantiate the `CleanPlugin`

    ```JavaScript
      const path = require('path');
      const CleanPlugin = require('clean-webpack-plugin');

      module.exports = {
          mode: 'production',
          entry: './src/app.ts',
          output: {
              filename: 'bundle.js',
              path: path.resolve(__dirname, 'dist'),
          },
          devtool: 'none',
          module: {
              rules: [
                  {
                      test: /\.ts$/,
                      use: 'ts-loader',
                      exclude: /node_modules/,
                  },
              ],
          },
          resolve: {
              extensions: ['.js', '.ts'],
          },
          plugins: [
              new CleanPlugin.CleanWebpackPlugin()
          ]
      };
    ```

<h4 id='productionbuild'>Build Webpack - Production</h4>

-   To run our production build we have to add `--config <name_of_the_file>` in our `scripts` in `package.json`

    ```JSON
      "scripts": {
        "start": "webpack-dev-server",
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --config webpack.config.prod.js"
      },
    ```

<h1 id='thirdparty'>Third Party Libraries and TypeScript</h1>

[Go Back to Summary](#summary)

<h2 id='projectbase'>Project Base</h2>

[Go Back to Summary](#summary)

-   Create a new folder `5_3rd_Party_Libraries_and_TypeScript`

    -   `cd 5_3rd_Party_Libraries_and_TypeScript`
    -   `npm init`
    -   `npm i`
    -   `tsc --init`

-   Install **webpack** dev dependencies
    -   `npm i --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server`

<h2 id='folderfiles'>Create Folder and Files</h2>

[Go Back to Summary](#summary)

-   Create the following folder and files

    ```Bash
      touch src/app.ts index.html webpack.config.js
    ```

-   Project structure

    ```Bash
      .
      ├── src
      │   └── app.ts
      ├── index.html
      ├── package-lock.json
      ├── package.json
      ├── tsconfig.json
      └── webpack.config.js
    ```

<h2 id='configwebpackts'>Config Webpack and TypeScript</h2>

<h3 id='indexbase'>Index.html</h3>

[Go Back to Summary](#summary)

-   Add a html boilerplate

    ```HTML
      <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Understanding TypeScript</title>
          <script src="dist/bundle.js" defer></script>
      </head>

      <body>
          <h1>Project Base</h1>
      </body>

      </html>
    ```

<h3 id='packagejson'>package.json</h3>

[Go Back to Summary](#summary)

-   After installing all dev dependencies
-   `webpack-dev-server` as our `start` script

    ```JSON
      {
        "name": "5_3rd_party_libraries_and_typescript",
        "version": "1.0.0",
        "description": "3rd Party Libraries and TypeScript",
        "main": "app.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "webpack-dev-server"
        },
        "author": "Roger Takeshita",
        "license": "ISC",
        "devDependencies": {
          "ts-loader": "^8.0.0",
          "typescript": "^3.9.6",
          "webpack": "^4.43.0",
          "webpack-cli": "^3.3.12",
          "webpack-dev-server": "^3.11.0"
        }
      }
    ```

<h3 id='tsconfigbase'>tsconfig.json</h3>

[Go Back to Summary](#summary)

-   Config our `tsconfig.json` base

    ```JavaScript
      {
        "compilerOptions": {
          /* Basic Options */
          "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
          "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
          "lib": [
            "DOM",
            "ES6",
            "DOM.Iterable",
            "ScriptHost"
          ] /* Specify library files to be included in the compilation. */,
          "sourceMap": true /* Generates corresponding '.map' file. */,
          "outDir": "./dist" /* Redirect output structure to the directory. */,
          "removeComments": true /* Do not emit comments to output. */,
          "noEmitOnError": true,

          /* Strict Type-Checking Options */
          "strict": true /* Enable all strict type-checking options. */,

          /* Additional Checks */
          "noUnusedLocals": true /* Report errors on unused locals. */,
          "noUnusedParameters": true /* Report errors on unused parameters. */,
          "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,

          /* Module Resolution Options */
          "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

          /* Advanced Options */
          "skipLibCheck": true /* Skip type checking of declaration files. */,
          "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
        },
        "exclude": ["node_modules"]
      }
    ```

<h3 id='webpackbase'>webpack.config.js</h3>

[Go Back to Summary](#summary)

-   Config our webpack development environment

    ```JavaScript
      const path = require('path');

      module.exports = {
          mode: 'development',
          entry: './src/app.ts',
          output: {
              filename: 'bundle.js',
              path: path.resolve(__dirname, 'dist'),
              publicPath: 'dist',
          },
          module: {
              rules: [
                  {
                      test: /\.ts$/,
                      use: 'ts-loader',
                      exclude: /node_modules/,
                  },
              ],
          },
          resolve: {
              extensions: ['.js', '.ts'],
          },
      };
    ```

<h2 id='installingjavascrip'>Installing JavaScript Libraries</h2>

[Go Back to Summary](#summary)

-   Installing a JavaScript library (only available to JavaScript, not to TypeScript), during the compilation TypeScript will get an error. Even though during the run time we don't, since TypeScript will be transformed into JavaScript. (For that we have to comment it out the `"noEmitOnError": true,`)
-   Another option would be, installing a translation ([types](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash)), for example `lodash`, we could install `@types/lodash` and save as a dev dependencies (since we are only using during the development mode)
    -   Basically the `@types/lodash` is a translation from plain JavaScript to TypeScript, they contain instructions to TypeScript, how this thing works and what is included in this package
    -   `[file_name].d.ts`, the `d` means **declaration**
    -   They don't contain any logic that runs, but they define the `types` that we get back when we call a method, and so on...

<h2 id='declare'>declare - as a Last Resort</h2>

[Go Back to Summary](#summary)

-   One way to utilize global variables for example from our `index.html`

    -   Even though we know JavaScript will defer the `bundle.js` until our page is loaded
    -   This means that `var GLOBAL` will be available to global window object
        -   But TypeScript doesn't like it
    -   One option is to `declare` type to inform TypeScript to not to worry about this variable.

    ```HTML
      <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Understanding TypeScript</title>
          <script src="dist/bundle.js" defer></script>
      </head>

      <body>
          <h1>Project Base</h1>
          <script>
              var GLOBAL = "THIS IS A GLOBAL VARIABLE FROM INDEX.HTML"
          </script>
      </body>

      </html>
    ```

-   in `app.ts`

    ```TypeScript
      import _ from 'lodash';

      console.log(_.shuffle([1, 2, 3]));

      declare var GLOBAL: any;

      console.log(GLOBAL);
    ```

<h2 id='calsstransforme'>npm i class-transform</h2>

[Go Back to Summary](#summary)

-   Creating a class using TypeScript
-   We can create and export a class on a separate file
-   in `products.model.ts`

    ```TypeScript
      export class Product {
          title: string;
          price: number;
          constructor(t: string, p: number) {
              this.title = t;
              this.price = p;
          }

          getInformation() {
              return [this.title, `${this.price}`];
          }
      }
    ```

-   in `app.ts`

    -   then we can import `Product` from `./product.model`
    -   now we can create new product using our imported class
    -   With our new product `p1` we have available `getInformation()` method from our class

    ```TypeScript
      import { Product } from './product.model';

      const p1 = new Product('A Book', 12.99);
      console.log(p1.getInformation());
    ```

    -   But the real problem is when we are getting information from a server
        -   Getting the products from the server, it has the same object structure, but it doesn't have the the method getInformation()
        -   For that, we have to loop through the entire list to create an instance of a Product (class)

    ```TypeScript
      const products = [
          { title: 'A Carpet', price: 29.99 },
          { title: 'A Book', price: 10.99 },
      ];

      const loadedProducts = products.map((product) => {
          return new Product(product.title, product.price);
      });

      for (const product of loadedProducts) {
          console.log(product.getInformation());
      }
    ```

-   One option is to install two packages

    ```Bash
      npm i class-transformer reflect-metadata
    ```

    -   `reflect-metadata` is a dependency of `class-transform`
    -   [Class-Transform Official Docs](https://github.com/typestack/class-transformer)
    -   To use we just, have to import `plainToClass` the most important method from `class-transformer` and its dependency `reflect-metadata`
        -   We just need to create call the method `plainToClass`
            -   The first argument is the class that we want to convert to
            -   the second argument is the data that we want to transform

    ```TypeScript
      const loadedProducts2 = plainToClass(Product, products);
      for (const product of loadedProducts2) {
          console.log(product.getInformation());
      }
    ```

<h2 id='calssvalidator'>npm i class-validator</h2>

[Go Back to Summary](#summary)

```Bash
  npm i class-validator
```

-   we first have to enable `experimentalDecorators`
-   in our `tsconfig.json`

    ```JavaScript
      {
        "compilerOptions": {
          ...
          /* Experimental Options */
          "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
        },
        "exclude": ["node_modules"]
      }
    ```

-   to use this package, we have to add as a declarator factory (we always have to execute them, adding `()`) to our class
-   in `product.model.ts`

    -   We import all the methods that we need from `class-transform`

    ```TypeScript
      import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

      export class Product {
          @IsNotEmpty()
          title: string;
          @IsNumber()
          @IsPositive()
          price: number;

          constructor(t: string, p: number) {
              this.title = t;
              this.price = p;
          }

          getInformation() {
              return [this.title, `${this.price}`];
          }
      }
    ```

-   in `app.ts`

    -   Just by adding the decorators to our class doesn't do the job
    -   We have to import `validate` from `class-validator`
        -   Then we create a new product, and then we call the method `validate`
        -   `validate` returns a promise and always the `errors` the only difference is if the length of `errors` is equal to **0**, this means there is no error.

    ```TypeScript
      import { plainToClass } from 'class-transformer';
      import { validate } from 'class-validator';
      import 'reflect-metadata';
      import { Product } from './product.model';

      const newProduct = new Product('', -5.99);
      validate(newProduct).then((errors) => {
          if (errors.length > 0) {
              console.log('VALIDATION ERRORS');
              console.log(errors);
          } else {
              console.log(newProduct.getInformation());
          }
      });
    ```

<h1 id='reactapp'>React App + TypeScript</h1>

<h2 id='install'>Installation</h2>

[Go Back to Summary](#summary)

-   To initialize our project with type script we can run the follow command to create a new project with TypeScript

    ```Bash
    npx create-react-app . --typescript
    ```

    -   the `.` means that we want to create a new react project inside of the current folder (and not create a new folder)

-   But this command not always work, one work around is to install `create-react-app` globally

    ```Bash
      npm i -g create-react-app
    ```

-   Now to create a new react project we don't need the `npx` in the beginning of the command

    ```Bash
      create-react-app . --typescript
    ```

-   The initial structure will be:

    ```Bash
      .
      ├── public
      │   ├── favicon.ico
      │   ├── index.html
      │   ├── logo192.png       <--- Remove
      │   ├── logo512.png       <--- Remove
      │   ├── manifest.json
      │   └── robots.txt
      ├── src
      │   ├── App.css           <--- Remove
      │   ├── App.test.tsx      <--- Remove
      │   ├── App.tsx
      │   ├── index.css
      │   ├── index.tsx
      │   ├── logo.svg          <--- Remove
      │   ├── react-app-env.d.ts
      │   ├── serviceWorker.ts  <--- Remove
      │   └── setupTests.ts     <--- Remove
      ├── .gitignore
      ├── package-lock.json
      ├── package.json
      ├── README.md
      └── tsconfig.json
    ```

<h2 id='configbase'>Config Base Project</h2>

<h3 id='apptsx'>App.tsx</h3>

[Go Back to Summary](#summary)

-   Clean our initial class component using typescript
    -   Remove the `logo` import from `./logo.svg` that we previously deleted it
    -   Remove the `./App.css` import
-   Where our class component has a type `React.FC` (React Function Component)

    ```TypeScript
      import React from 'react';

      const App: React.FC = () => {
          return (
              <div>
                  <h1>App</h1>
              </div>
          );
      }

      export default App;
    ```

<h3 id='indextsx'>Index.tsx</h3>

[Go Back to Summary](#summary)

-   Remove the `serviceWorker` import
-   Remove the `serviceWorker.unregister()`
-   [What is service worker in react.js](https://stackoverflow.com/questions/49314386/what-is-service-worker-in-react-js#:~:text=In%20simple%20and%20plain%20words,offline%20or%20on%20slow%20network.)

    ```TypeScript
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App';
      import './index.css';

      ReactDOM.render(
          <React.StrictMode>
              <App />
          </React.StrictMode>,
          document.getElementById('root')
      );
    ```

<h3 id='indexcss'>Index.css</h3>

[Go Back to Summary](#summary)

-   Clean our `index.css` and use only the basic style

    ```CSS
      html {
          font-family: sans-serif;
      }

      body {
          margin: 0;
      }
    ```

<h2 id='structuringproject'>Structuring Project</h2>

<h3 id='folderfiles'>Folder and Files</h3>

[Go Back to Summary](#summary)

-   Create the following folder and files

    ```Bash
      touch -n src/components/NewTodo.css + NewTodo.tsx + TodoList.css + TodoList.tsx src/todo.model.ts
    ```

    ```Bash
      7_React_with_TypeScript
      ├─ package-lock.json
      ├─ package.json
      ├─ public
      │  ├─ favicon.ico
      │  ├─ index.html
      │  ├─ manifest.json
      │  └─ robots.txt
      ├─ src
      │  ├─ App.tsx
      │  ├─ components
      │  │  ├─ NewTodo.css
      │  │  ├─ NewTodo.tsx
      │  │  ├─ TodoList.css
      │  │  └─ TodoList.tsx
      │  ├─ index.css
      │  ├─ index.tsx
      │  ├─ react-app-env.d.ts
      │  └─ todo.model.ts
      └─ tsconfig.json
    ```

<h3 id='todolist'>TodoList.jsx</h3>

[Go Back to Summary](#summary)

-   In our `TodoList` we created a custom **interface** `TodoListProps`

    -   We created an item `items` and assigned an `array of object` as a type
    -   the object will have the following structure an `id` type `string` and a `text` type `string`
    -   and also will have another item `onDeleteTodo` that is a function that received an `id` type `string` and will in the end return `void`

    ```TypeScript
      import React from 'react';
      import './TodoList.css';

      interface TodoListProps {
          items: { id: string; text: string }[];
          onDeleteTodo: (id: string) => void;
      }

      const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
          return (
              <ul>
                  {items.map((todo) => (
                      <li key={todo.id}>
                          <span>{todo.text}</span>
                          <button onClick={() => onDeleteTodo(todo.id)}>
                              DELETE
                          </button>
                      </li>
                  ))}
              </ul>
          );
      };

      export default TodoList;
    ```

-   We also imported a separate css file (`TodoList.css`)

    ```CSS
      ul {
        list-style: none;
        width: 90%;
        max-width: 40rem;
        margin: 2rem auto;
        padding: 0;
      }

      li {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    ```

<h3 id='newtodo'>NewTodo.jsx</h3>

[Go Back to Summary](#summary)

-   for our `NewTodo` we created a new `type` **NewTodoProps**, it could also be created as an **interface**

    -   With **interface** we can only use to describe the structure of an object. While a **type**, it can be used to store other things like `union types` (multiple types into one type)
        let text: string | string[];
    -   When we define as an **interface**, it's clear that `we want to define only the structure of the object`, while type is not always true `type`

    ```TypeScript
      import React, { useRef } from 'react';
      import './NewTodo.css';

      type NewTodoProps = {
          onAddTodo: (todoText: string) => void;
      };

      const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
          const textInputRef = useRef<HTMLInputElement>(null);

          const todoSubmitHandler = (event: React.FormEvent) => {
              event.preventDefault();
              const enteredText = textInputRef.current!.value;
              onAddTodo(enteredText);
          };

          return (
              <form onSubmit={todoSubmitHandler}>
                  <div className="form-control">
                      <label htmlFor="todo-text">Todo Text</label>
                      <input type="text" id="todo-text" ref={textInputRef} />
                  </div>
                  <button type="submit">ADD TODO</button>
              </form>
          );
      };

      export default NewTodo;
    ```

-   in our `NewTodo.css`

    ```CSS
      form {
        width: 90%;
        max-width: 40rem;
        margin: 2rem auto;
      }

      .form-control {
        margin-bottom: 1rem;
      }

      label,
      input {
        display: block;
        width: 100%;
      }

      label {
        font-weight: bold;
      }

      input {
        font: inherit;
        border: 1px solid #ccc;
        padding: 0.25rem;
      }

      input:focus {
        outline: none;
        border-color: #50005a;
      }

      button {
        background: #50005a;
        border: 1px solid #50005a;
        color: white;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
      }

      button:focus {
        outline: none;
      }

      button:hover,
      button:active {
        background: #6a0a77;
        border-color: #6a0a77;
      }
    ```

<h3 id='todomodel'>Todo Model</h3>

[Go Back to Summary](#summary)

-   Create an interface to use as model of structure for our todo item

    ```TypeScript
      export interface Todo {
          id: string;
          text: string;
      }
    ```

<h3 id='app1'>App.tsx</h3>

[Go Back to Summary](#summary)

-   in our `App.tsx` we import all the component and model tha we created
-   import `useState` from `react` to manage our state

    -   By default TypeScript doesn't know the `type` of `useState` (by default it's a generic type)
    -   That's why we created our interface (`Todo`), so we can assign/indicate to TypeScript that our `[todos, setTodos]` is an array of type `Todo` (an array of objects ({id, text}))

        ```TypeScript
          import React, { useState } from 'react';
          import NewTodo from './components/NewTodo';
          import TodoList from './components/TodoList';
          import { Todo } from './todo.model';

          const App: React.FC = () => {
              const [todos, setTodos] = useState<Todo[]>([]);

              const todoAddHandler = (text: string) => {
                  setTodos((prevTodos) => [
                      ...prevTodos,
                      { id: Math.random().toString(), text },
                  ]);
              };

              const todoDeleteHandler = (todoId: string) => {
                  setTodos((prevTodos) => {
                      return prevTodos.filter((todo) => todo.id !== todoId);
                  });
              };

              return (
                  <div>
                      <NewTodo onAddTodo={todoAddHandler} />
                      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
                  </div>
              );
          };

          export default App;
        ```

<h1 id='nodeproject'>Node + Express with TypeScript</h1>

<h2 id='newproject'>Base Project</h2>

<h3 id='createproject'>Create New Project</h3>

[Go Back to Summary](#summary)

-   To start a new project, first we initialize a new node environment and then initialize TypeScript

    ```Bash
      npm init
      tsc --init
      npm i express body-parser morgan
      npm i --save-dev @types/node @types/express @types/morgan
    ```

    -   [Express](http://expressjs.com/)

        -   Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

    -   [body-parser](https://www.npmjs.com/package/body-parser)
        -   Node.js body parsing middleware.
        -   Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
        -   Note As req.body's shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, req.body.foo.toString() may fail in multiple ways, for example the foo property may not be there or may not be a string, and toString may not be a function and instead a string or other user input.

<h3 id='configtsconfig'>Config tsconfig.json</h3>

[Go Back to Summary](#summary)

-   Set up the base TypeScript configuration
-   Add a some extra configuration

    -   `"modeResolution": "node"`
        -   This simple tells TypeScript how different files and imports work together
    -   `"noEmitOnError": true`
        -   To not compile if any errors
    -   `"exclude": ["node_modules"]`
        -   To implicit indicate to exclude `node_modules` from TypeScript compilation

    ```JSON
      {
        "compilerOptions": {
          "target": "es2018" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
          "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
          "moduleResolution": "node",
          "outDir": "./dist" /* Redirect output structure to the directory. */,
          "rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
          "removeComments": true /* Do not emit comments to output. */,
          "noEmitOnError": true,
          "strict": true /* Enable all strict type-checking options. */,
          // "noUnusedLocals": true /* Report errors on unused locals. */,
          "noUnusedParameters": true /* Report errors on unused parameters. */,
          "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
          "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,
          "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
          "skipLibCheck": true /* Skip type checking of declaration files. */,
          "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
        },
        "exclude": ["node_modules"]
      }
    ```

<h3 id='configpackage'>Cong package.json</h3>

[Go Back to Summary](#summary)

-   In our `package.json` we need to configure our **start** script

    ```JSON
      {
        "name": "8_node_express_typescript",
        "version": "1.0.0",
        "description": "Node Express with TypeScript",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "nodemon dist/index.js"
        },
        "author": "Roger Takeshita",
        "license": "ISC",
        "dependencies": {
          "body-parser": "^1.19.0",
          "express": "^4.17.1"
        },
        "devDependencies": {
          "@types/express": "^4.17.7",
          "@types/morgan": "^1.9.1",
          "@types/node": "^14.0.24",
          "morgan": "^1.10.0"
        }
      }
    ```

<h3 id='folderfiles'>Folder and Files</h3>

[Go Back to Summary](#summary)

-   Create the the following structure

    ```Bash
      touch src/app.ts + index.ts
    ```

-   Basic server structure

    ```Bash
      8_Node_Express_TypeScript
      ├─ dist
      │  ├─ app.js
      │  └─ index.js
      ├─ package-lock.json
      ├─ package.json
      ├─ src
      │  ├─ app.ts
      │  └─ index.ts
      └─ tsconfig.json
    ```

<h3 id='appts'>App.ts</h3>

[Go Back to Summary](#summary)

-   In app ts we are going to:

    -   Import `express` from `express`
    -   Import `logger` from `morgan`
    -   Create an instance of `express()` (our server)
    -   Use logger in `dev` mode, so we can see the incoming requests on our terminal
    -   Use `express.json()` for parsing application/json
    -   Create a default route if route not found
    -   export the **app**

    ```TypeScript
      import express from 'express';
      import logger from 'morgan';

      const app = express();

      app.use(logger('dev'));
      app.use(express.json());

      app.get('/*', (req, res) => {
          res.status(404).json({ message: "Path doesn't exist" });
      });

      export default app;
    ```

<h3 id='indexts'>index.ts</h3>

[Go Back to Summary](#summary)

-   In `index.ts` we need to:

    -   Import `app` from `./app`
    -   Create a new port constant
    -   Create a listener to our **app**

    ```TypeScript
      import app from './app';
      const port = process.env.PORT || 3001;

      app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
      });
    ```

<h2 id='todo'>CRUD Todo List</h2>

<h3 id='folderfiles1'>Folders and Files</h3>

[Go Back to Summary](#summary)

-   Create the following folders and files

    ```Bash
      touch src/controllers/todos.ts src/models/todo.ts src/routes/todos.ts
    ```

    ```Bash
      8_Node_Express_TypeScript
      ├─ package-lock.json
      ├─ package.json
      ├─ src
      │  ├─ app.ts
      │  ├─ controllers
      │  │  └─ todos.ts
      │  ├─ index.ts
      │  ├─ models
      │  │  └─ todo.ts
      │  └─ routes
      │     └─ todos.ts
      └─ tsconfig.json
    ```

<h3 id='appts1'>App.ts</h3>

[Go Back to Summary](#summary)

-   In `src/app.ts`

    -   Import the request types (`NextFunction, Request, Response`) from `express` so we can indicate to TypeScript more precise type, instead of the generic type
    -   Import the `todos` routes, so we can assign a specific route to them
    -   Create an error handler

    ```TypeScript
      import express, { NextFunction, Request, Response } from 'express';
      import logger from 'morgan';
      import todoRoutes from './routes/todos';

      const app = express();

      app.use(logger('dev'));
      app.use(express.json());

      app.use('/todos', todoRoutes);

      app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
          res.status(500).json({ message: error.message });
      });
      app.get('/*', (req, res) => {
          res.status(404).json({ message: "Path doesn't exist" });
      });

      export default app;
    ```

<h3 id='models'>Models</h3>

[Go Back to Summary](#summary)

-   in `src/models/todo.ts`

    -   Let's create a structure of our todo (type class)

    ```TypeScript
      export class Todo {
          constructor(public id: string, public text: string) {}
      }
    ```

<h3 id='controllers'>Controllers</h3>

[Go Back to Summary](#summary)

-   in `controllers/todos.ts`

    -   Import `RequestHandler` from `express`
        -   It's the same of importing `Request, Response, NextFunction` the only difference it's all in one type
    -   Import `Todo` structure from our `models`
    -   Create all CRUD Operations
    -   For incoming data, TypeScript doesn't know the type, if we know the type, we could create a `type casting` like so:
        -   `const text = (req.body as { text: string }).text;`
        -   Where the incoming data has a body with `text` field type `string`

    ```TypeScript
      import { RequestHandler } from 'express';
      import { Todo } from '../models/todo';

      //! Fake Database
      const LIST_TODOS: Todo[] = [];

      const createTodo: RequestHandler = (req, res, next) => {
          const text = (req.body as { text: string }).text; //+ Add type casting
          const newTodo = new Todo(Math.random().toString(), text);

          LIST_TODOS.push(newTodo);
          res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
      };

      const getTodos: RequestHandler = (req, res, next) => {
          res.json({ todos: LIST_TODOS });
      };

      const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
          const updatedText = (req.body as { text: string }).text;
          const todoIndex = LIST_TODOS.findIndex((todo) => todo.id === req.params.id);

          if (todoIndex < 0) throw new Error('Could not find todo.');

          LIST_TODOS[todoIndex] = new Todo(LIST_TODOS[todoIndex].id, updatedText);
          res.json({
              message: 'Updated Successfully!',
              updatedTodo: LIST_TODOS[todoIndex],
          });
      };

      const deleteTodo: RequestHandler = (req, res, next) => {
          const todoIndex = LIST_TODOS.findIndex((todo) => todo.id === req.params.id);

          if (todoIndex < 0) throw new Error('Could not find todo.');

          LIST_TODOS.splice(todoIndex, 1);
          res.json({ message: 'Todo has been deleted!' });
      };

      export { createTodo, getTodos, updateTodo, deleteTodo };
    ```

<h3 id='routes'>Routes</h3>

[Go Back to Summary](#summary)

-   In `routes/todos.ts`

    -   Different from a normal node/express server (without TypeScript), the way we use express `Router` is:

    ```JavaScript
      const express = require('express');
      const router = express.Router();
    ```

    -   With TypeScript, we no longer have to import `express`, we just import `Router` directly from `express`;

    ```TypeScript
      import { Router } from 'express';
      import {
          createTodo,
          deleteTodo,
          getTodos,
          updateTodo,
      } from '../controllers/todos';

      const router = Router();

      router.post('/', createTodo);
      router.get('/', getTodos);
      router.patch('/:id', updateTodo);
      router.delete('/:id', deleteTodo);

      export default router;
    ```
