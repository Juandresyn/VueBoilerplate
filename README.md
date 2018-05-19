# vue-boilerplate

> A Vue.js version of react-boilerplate

## Build Setup

``` bash
# install dependencies
yarn
npm install

# serve with hot reload at localhost:8080
yarn start
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Generate Components

VueBoilerplate is using plop to generate templates.

To create a component simple run:

### Not specifying the component name:
``` bash
npm run generate component
```

Plop will ask you for the component name:
``` bash
> ? What is your component name?
```

### Specifying the component name:
``` bash
npm run generate component "YourComponentName"
```

> Note: Components are located under app/components



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
