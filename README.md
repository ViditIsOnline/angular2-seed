# Angular2Seed

This project makes use of [Angular CLI](https://github.com/angular/angular-cli).

Apart from Angular CLI, it also makes use of [Google SW-Precache](https://github.com/GoogleChrome/sw-precache) for easily getting PWA ready apps. 
The prod build can also be served on a local server.

To audit the app on different parameters, it uses [Google Lighthouse](https://github.com/GoogleChrome/lighthouse). 


It also includes [Compodoc](https://github.com/compodoc/compodoc) to create beautiful Angular 2 speicific documentation.

## Dev server

Run `npm run start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Prod server

Run `npm run serve:prod` for a prod server. Navigate to `http://localhost:1234/`. It builds the app using AOT & other goodies and then serves the dist folder on port 1234.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Prod Build

Run `npm run build:prod` to build the project for production with AOT and SW-Precache. It also makes some tweaks to make app more PWA friendly. The build artifacts will be stored in the `dist/` directory.

## Lighthouse Report

Run `npm run report` to analyze the app with Google Lighthouse. The report is genrated in reports folder. Checkout [Google Lighthouse](https://github.com/GoogleChrome/lighthouse) for more options.

## Documentation Generation

Run `npm run doc` for creating documentation using [Compodoc](https://github.com/compodoc/compodoc). Checkout the [website](https://github.com/compodoc/compodoc) for more themes and configurations.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
