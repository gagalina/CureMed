# AccountingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Build for production

1) ng build --prod --base-href="https://gagalina.github.io/CureMed/"
2) in folder /dist change index.html into 
<!doctype html><html lang="en"><head><meta charset="utf-8"><title>CureMed</title><base href="https://gagalina.github.io/CureMed"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/x-icon" href="CureMed/favicon.ico"><link href="CureMed/styles.b00e3e15fa08206c934f.bundle.css" rel="stylesheet"/></head><body><app-root></app-root><script type="text/javascript" src="CureMed/inline.318b50c57b4eba3d437b.bundle.js"></script><script type="text/javascript" src="CureMed/polyfills.194f3db5c95bb635c66b.bundle.js"></script><script type="text/javascript" src="CureMed/main.f1c15a6e3b81609f8078.bundle.js"></script></body></html>
3) in bundle.js change assets for image adding /CureMed in the beginning
5) git add *
6) git commit -m "any commit"
7) git push -u origin master
