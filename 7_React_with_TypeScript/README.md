<h1 id='summary'>Summary</h1>

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
