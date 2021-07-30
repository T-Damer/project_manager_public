![logo512](https://user-images.githubusercontent.com/49658988/126784946-4661618d-41bb-41da-a1dd-ca00c54e8fcf.png)

# Demo

![syUazWqbVP](https://user-images.githubusercontent.com/49658988/127620537-8642dff7-3a44-4868-ab8e-0bcdd0fa68f7.gif)

# Getting Started

First clone into repo — `git clone https://github.com/T-Damer/project_manager`

Run `yarn` to install dependencies

## Create .env

Look at the `.env.example`, to get this fields, go to [firebase.google.com](firebase.google.com)

Remember, you can find all field and values at the firebase config, after creating _web-app_ in firebase

| Var               | Value                   |
| ----------------- | ----------------------- |
| apiKey            | string                  |
| authDomain        | smthing.firebaseapp.com |
| projectId         | stmthing                |
| storageBucket     | smthing.appspot.com     |
| messagingSenderId | number                  |
| appId             | string                  |

Then just paste values from config into your local `.env`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Publishing

`firebase.json` is configured for publish. Go to _console.firebase.com_ -> _hosting_, start hosting, and follow the steps. REMEMBER: do not change `public/index.html` when you `firebase init` locally.

For (public) folder specify `build`

Then run `yarn build` and `firebase deploy`, this must upload your data to firebase. Check hosting, there will be addresses of your web-site

---

<a href="https://www.buymeacoffee.com/tdamer"><img src="https://img.buymeacoffee.com/button-api/?text=Support me with a coffee&emoji=☕️&slug=tdamer&button_colour=ffcc33&font_colour=000&font_family=Lato&outline_colour=000&coffee_colour=000"></a>
