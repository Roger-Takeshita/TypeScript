<h1 id='summary'>Summary</h1>

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
