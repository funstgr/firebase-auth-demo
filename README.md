## ## React firebase demo
- Displays a React Redux Application
- Has the ability to signup and login a user
- Shows use of React Router
- Has extensive Unit Tests using Jest and [createRenderer] from [react-test-renderer/shallow]
- Has precommit hooks for linting and testing both Jest and Cypress

## Environment dependencies

- Node.js 8+ (with bundled version of npm)
- Reasonably recent version of a modern browser (Chrome, Firefox, Edge, Safari)

## Setup
**Install npm dependencies**
$ npm install

## Starting the servers
$ npm run dev starts the json-server and launches the react app using react-scripts
$ npm run start starts the the react app only - no data
$ npm run cypress:open starts the cypress server and opens a browser for testing (npm run dev must be up and running)
$node server.js starts up the json-server

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run build-css](#npm-run-build-css)
  - [npm run cypress:run](#npm-cypress:run)
  - [npm run cypress:open](#npm-cypress:open)
  - [npm run build](#npm-run-build)
  - [npm run test](#npm-run-test)
  - [npm run dev](#npm-run-dev)
  - [npm run reactest](#npm-run-reactest)
  - [npm run lint](#npm-run-lint)
  - [npm run lint_project_fix](#npm-run-lint_project_fix)
  - [npm start](#npm-start)
  - [npm run watch](#npm-run-watch)
  - [npm run watch-css](#npm-run-watch-css)

- [VSCode Extensions](#vscode-extensions)
  - [Add the following Extensions for maximum coding experience to VSCode](#vscode-extensions)
- [Supported Browsers](#supported-browsers)
- [Eslint](#eslint)
- [pre-commit](#pre-commit)
- [precommit_actions](#pre-Commit-Actions)
- [VSCode Preferences](#VSCode-Preferences)
- [Post-Processing CSS](#Post-Processing-CSS)
- [Adding CSS Preprocessor](#Adding-CSS-Preprocessor)

## Folder Structure

To Be Added

  For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

  ### `npm start`
  ### `npm run start`

  Runs the app in the development mode.<br>
  Open [http://localhost:3000] to view it in the browser.

  The page will reload if you make edits.<br>
  You will also see any lint errors in the console.

  Note: This should automatically open the default browser [run-is-optional]

  ### `npm run dev`

  npm run dev starts the json-server and launches the react app using react-scripts

  ### `npm test`
  run mocha tests
  mocha documentation - https://mochajs.org/api/mocha.js.html

  ### `npm run build`

  Builds the app for production to the `build` folder.<br>
  It correctly bundles React in production mode and optimizes the build for the best performance.

  ### `npm run build-css`

  Builds the css for production to the `build` folder.<br>
  It correctly bundles styles for production mode and optimizes the styles for the best performance.

  ### `npm run cypress:open`

  Runs cypress - launches a cypress application which can launch testing in chrome

  ### `npm run cypress:run`

  Runs cypress - launches a cypress in the command line(used for commit hooks to run cypress tests)

  ### `npm run test`

  Use this script to test the project. This script is utilized in pre-commit as it is not the normal watch mode which comes out of the box from [react-scripts]
  react-scripts uses jest.

  ### `npm run reactest`

  Use this script to test the project in watch mode. This script is the standard out of the box from [react-scripts-and-uses-jest]. This is a great test to run while developing for maximum efficiency when coding.

  ### `npm run build-css`

  Use this script to build scss into webpack

  
  ### `npm run lint`

  Use this script to run project wide eslint report in console or pipe to a file >filename -- in quiet mode

  ### `npm run lint_project_fix`

  Use this script to run project wide eslint with --fix for autofix on project in quiet mode (no warnings)

  ### `npm run watch`

  Runs jest in watch mode with --env=jsdom

  ### `npm run watch-css`

  Use this script to watch scss changes and update webpack

## VSCode Extensions 

Use these Extensions in VSCode for maximum coding experience

- Babel ES6/ES7
- Babel Javascript
- Debuggger for Chrome
- ES7 React/Redux/GraphQL/React-Native snippets
- JavaScript (ES6) code snippets
- Node.js Extension Pack
- npm
- TODO Highlight: example in index.js
- Prettify JSON
- Python
- React Native Tools
- Sublime Babel
- Search Node ModuleTODO Hightlight
- ESLint https://eslint.org/
- HTMLHint https://htmlhint.io/
- Sass
- Sass Lint https://github.com/sasstools/sass-lint


## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Eslint
code quality is included as a devDependency and includes project check scripts for auto fix and precommit hooks
see 
- [npm run lint](#npm-run-lint)
- [npm run lint_project_fix](#npm-run-lint_project_fix)
- [pre-commit](#pre-commit)
local config in .eslintrc.json
extends 'airbnb'


AirBnB Rules see:
- https://www.npmjs.com/package/eslint-config-airbnb

## Pre-Commit

pre-commit is a git hook which will run scripts and only complete if tests and linting passes.
--no-verify overrides the pre-commit(can be enforced in build CI system using hooks in repository tooling)

"pre-commit": [
    "lint",
    "test"
  ]

## Pre-Commit-Actions
- [precommit is set to run tests and lint before committing](#pre-Commit-Actions)

# VSCode Preferences
- use this as a starting point to get the best out of VS Code

VSCode File>Preferences>Settings or CTRL+

{
  "eslint.autoFixOnSave": true,
  "eslint.provideLintTask": true,
  "eslint.alwaysShowStatus": true,
  "css.lint.duplicateProperties": "error",
  "emmet.includeLanguages": {
    "javascript": "react"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "sasslint.enable": true,
}

## Post-Processing CSS

This project setup minifies your CSS and adds vendor prefixes to it automatically through [Autoprefixer](https://github.com/postcss/autoprefixer) so you don’t need to worry about it.


This will allow you to do imports like

```scss
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import 'nprogress/nprogress'; // importing a css file from the nprogress node module
```

## Adding Images, Fonts, and Files

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` a file right in a JavaScript module**. This tells Webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the `src` attribute of an image or the `href` of a link to a PDF.

To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to [#1153](https://github.com/facebookincubator/create-react-app/issues/1153).


