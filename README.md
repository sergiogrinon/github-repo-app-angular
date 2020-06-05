# GithubRepoAppAngular

GitHub Repo App in Angular.

# Project structure and commands tutorial | Best Practices

## Core Module

In the **Core Module** we commonly place our singleton services and modules that will be used across the app but only need to be imported **once**.
<br><br>
> To create the **CoreModule** run the following command:
<br><br>
`ng g m core`
<br><br>
> To create singleton services inside the **Core Module** use:
<br><br>
`ng g s core/services/service-name`
<br><br>
> **Note:** Modules like **HttpClientModule** should be imported here, once in the application.

## Project Folder Structure Example
`
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
`

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
