<h1 id='summary'>Summary</h1>

-   [Webpack With TypeScript](#webpack)
    -   [What is a Webpack?](#whatis)
    -   [Third Party Libraries](#thirdparty)
    -   [Config Webpack](#configwebpack)
        -   [tsconfig.json](#tsconfig)
        -   [webpack.config.js - Development](#webpackconfig)
            -   [Build Webpack - Development](#developmentbuild)
        -   [webpack.config.prod.js - Production](#xxxxxxx)
            -   [Build Webpack - Production](#xxxxxxx)

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
