<h1 id='summary'>Summary</h1>

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
