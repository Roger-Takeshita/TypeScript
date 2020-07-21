<h1 id='summary'>Summary</h1>

-   [Node + Express with TypeScript](#nodeproject)
    -   [Base Project](#newproject)
        -   [Create New Project](#createproject)
        -   [Config tsconfig.json](#configtsconfig)
        -   [Cong package.json](#configpackage)
        -   [Folder and Files](#folderfiles)
        -   [App.ts](#appts)
        -   [index.ts](#appts)
    -   [xxxxxxxxxxx](#xxxxxxxxx)

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
          "noUnusedLocals": true /* Report errors on unused locals. */,
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

      app.get('/*', (_, res) => {
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
