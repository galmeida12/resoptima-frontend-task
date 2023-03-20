# Resoptima Frontend test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I decided on creating it from scratch using create-react-app instead of forking from the original repo because it was farily simpler to mimic the implemented features.

Name: Gonçalo Almeida
Email: g.piriquito@gmail.com 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm start-json-server`

Original script to start the service API.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## TODO list

* Correctly implement `indes.ts` files for all components and pages;
* Finish all CSS features and replace common placeholders in all `*.styled.ts` files;
* Implement pagination in the API request. Wasn't able to get `_pages` query param to work with the library in question;
* Finish Pagination component:
    * Create file structure like all other components;
    * Create a button component for all digits paginations and after and previous arrows;
    * Create DropDown element to select the number of Movies displayed in any given page;
    * Create apropriate callbacks to tie to the respective states.
