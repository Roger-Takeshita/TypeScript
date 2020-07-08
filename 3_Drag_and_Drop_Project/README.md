<h1 id='summary'>Summary</h1>

-   [Drag and Drop Project](#draganddrop)

    -   [Interacting with DOM Elements](#interacting)
    -   [Auto Bind Decorator](#autobind)
    -   [Validation](#validation1)

-   [Drag and Drop Project](#dragandrop)
    -   [Interacting with DOM Elements](#interacting)

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
