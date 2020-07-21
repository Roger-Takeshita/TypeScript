<h1 id='summary'>Summary</h1>

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
