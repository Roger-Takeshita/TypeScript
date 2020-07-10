<h1 id='summary'>Summary</h1>

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
