Weather app
===========

Weather app is the little web app for displaying the weather report from openweathermap.org using Components, Databinding, HTTP, Services, Observables, HTML5, CSS3, Responsiveness features and more!

## App features

1. Display weather forecast of a city for next 5 days


#Quickstart

 git clone https://github.com/IamKritika/weather-app.git my-proj
 cd my-proj
 npm install -g @angular/cli
 npm install
 ng serve

Application would locally run on localhost:4200

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run Production/QA configuration 

#build

 ng build --environment=prod --output-path=build/prod/

#shorthand

 ng b -prod --output-path=build/prod/

#serve

ng serve --environment=prod

ng serve --environment=qa

#shorthand

$ ng s -prod

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Run all the tslint and codelyzer rules

Method A - npm run lint

Method B - Windows based command with backslash

$ .\node_modules\.bin\tslint -c tslint.json  .\src\app\weather\weather.service.ts

$ .\node_modules\.bin\tslint -c tslint.json  .\src\app\*\*.ts


## If there would have been more time

- test suite could have been completed
- styling could have been better
