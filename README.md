**Technology used: Typescript, Nest.js, MongoDB, Mongoose, Github, Amazon Web Services**

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Linting](#linting)

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Validation**: request data validation using [class-validator](https://github.com/typestack/class-validator) & [class-transform](https://github.com/typestack/class-transformer)
- **Logging**: using [winston](https://github.com/winstonjs/winston).
- **Error handling**: centralized error handling mechanism
- **Dependency management**: with [NPM](https://www.npmjs.com/)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
  <!-- - **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io) -->
  <!-- - **Santizing**: sanitize request data against xss and query injection -->
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Commands

### Install dependencies:

```bash
npm install
```

### Linting:

```bash
# run ESLint
npm run lint

# fix ESLint errors
npm run lint:fix

# code format
npm run format
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured with all recommended rules of `typescript-eslint` and `prettier`.
To modify the ESLint configuration, update the `.eslintrc.js` file. To modify the Prettier configuration, update the `.prettierrc` file.

To maintain a consistent coding style across different IDEs, the project contains `settings.json` inside `.vscode` folder.
