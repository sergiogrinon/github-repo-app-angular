# GithubRepoAppAngular

GitHub Repo App in Angular.

# Project Structure and Commands Tutorial | Best Practices

## Core Module

In the **Core Module** we commonly place our singleton services and modules that will be used across the app but only need to be imported **once**.
<br>
> To create the **CoreModule** run the following command:
<br><br>
`ng g m core`
<br><br>
> To create singleton services inside the **Core Module** use:
<br><br>
`ng g s core/services/service-name`
<br><br>
> **Note:** Modules like **HttpClientModule** should be imported here, once in the application.

## Project Folder Structure - Sample
```
|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] pages
           |-- home-routing.module.ts
           |-- home.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
          |-- [+] models
     |
     |-- [+] configs
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss
```
## Variable Best Practices

Whenever you declare a variable there is 2 options/scenarios:
- A) Assign a value when the variable is declared.
- B) Give the variable a value during the execution.
<br>
In 'A' case, it's not neccesary to specify the type, because its taking a value inits inizialization.
<br>
In case 'B' its good to specify the data type that will be stored in the declared variable.

# Additional Information

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run unit tests

Use command `ng test` to execute the unit tests via [Karma].

## Run end-to-end tests

Use command `ng e2e` to execute the end-to-end tests via [Protractor].
