# ReactJS Seed

## Extensions for IDEs

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Features

- ⚛️ React v18.2.0
- ⛑ TypeScript
- 📏 ESLint — Find problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🖌 Renovate — Keep your dependencies up to date
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on all Pull Requests
- ⚙️ EditorConfig - Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

## Documentation

### Requirements

- Node.js >= 14.17.0
- npm 6

### Configuration

Clone `.env.sample` to `.env` in the same directory and update configuration for project.

### Development

To start the project locally, run:

```
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm start

# build for production and launch server
npm run build
```

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as manifest.json, robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles, utils, types.

## Git

#### Branch prefixes

- feature/
- release/
- bugfix/
- hotfix/

> Ex: feature/feature-name
> Ex: release/version
> Ex: bugfix/bug-name-taskID
> Ex: hotfix/bug-name-taskID

#### Conventional commits

- `feat`: a new feature.
- `fix`: fix bugs in the system and patch to the codebase.
- `test`: adding missing tests
- `rearrange`: files moved, added, deleted etc.
- `chore`: miscellaneous changes that do not fall under any of the other types, such as changes to meta information in the repo (owner files, editor config, etc) or licensing.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, css, etc).
- `docs`: documentation only changes.
- `examples`: Additions or changes to the examples provided in the project's examples/ folder.
- `perf`: a code change that improves performance.
- `update`: update code (versions, library compatibility).
- `refactor`: code restructure without changing exterrnal behavior, nor adds a feature.
- `revert`: a change that reverses the change in earlier commit.

#### Gitflow workflow

![](https://i.imgur.com/ePD0ycv.png)

#### CICD pipeline deployment

![](https://i.imgur.com/IGrhaJ5.png)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# REACTJS-SEED-MASTER
