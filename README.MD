## Angular 1.x ES6 Webpack2 Service Template



#### Getting started

For local development use 

```
npm start
```

This will start the webpack dev server with live-reload on file save. Gobal packages e.g. angular will be included in the. webpack `bundle.js`



For creating a minified version, use

```
npm run build
```

This will bundle all imports from `src/index.js` in one file with the name `build.min.js` and puts this into the `dist` folder.

**Global imports (from node_modules) will not get bundled inside the build file!**

The bundle filename can be changed in `webpack/webpack.build.js`



You can run unit tests with karma and jasmine with

```
npm test
```



