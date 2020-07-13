<h1 id='summary'>Summary</h1>

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
