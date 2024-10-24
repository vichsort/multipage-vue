# Complete walkthrough of MPA with VUE 3
## Creating a project
```bash
    npm install -g @vue/cli
    vue create multi-page
```
After the app has been created, preferebly open the package.json file on your IDE to change the parser configuration.
```json
    "parserOptions": {
      [...],
      "requireConfigFile": false, // add this
      [...],
    },
```
Since this is done, you can proceed to the next step.

## Files and folders
You should add folders to better understand the way the files are alocaded, mostly because you are making a multi-page application. So for this, use single-worded and auto-explanatory names. In this example, we are using 'index' and 'second'. <br>
Also, by creating the template file, you might need to change the paths of some config files. But dont worry, we will do that in the next step.
- Remember! If the folders are created with different names, you can call any inside file the same name as the others, even if it gets not so well with the idea with organizing.

## Configuring the project
In the next step, you will configure the project by altering the paths of the 'vue.config.js' file. You can read the docs for more explanation, but we will keep it simple here.

```javascript
    const { defineConfig } = require('@vue/cli-service')
        module.exports = defineConfig({
            transpileDependencies: true
    })
```
By creating the template, you should be with this first configuration, but we will add the 'pages' object that changes the path of the files for the input and output. 

```javascript
    module.exports = {
    pages: {
        index: {
        entry: 'src/index/main.js',
        }}
    }
```

This is the only mandatory part for the first file to be located, but, you can add many more properties and pages. 
```javascript
    module.exports = {
    pages: {
        index: {
        entry: 'src/index/main.js',
        template: 'public/index.html', // html file output
        filename: 'index.html', 
        title: 'Index Page', // name that appears in the tab
        chunks: ['chunk-vendors', 'chunk-common', 'index'] 
        },
        second: { // next page
        entry: 'src/second/main.js',
        template: 'public/second.html',
        filename: 'second.html',
        title: 'Second Page',
        chunks: ['chunk-vendors', 'chunk-common', 'second']
        } // you can keep adding pages here
    }
    }
```

This takes care of the configuration of the 'pages' object. You should add more html pages in the 'public' folder.
- Remember! To link you only need to call it by the 'second.html' (or so) filename! the path is deconsiderated by the public folder.

# Running the application
When running for the first time, dont forget to do:
```bash
    npm run install
```
To run the development server, run:

```bash
    npm run build # to create a production build
    npm run serve # to do a development server
```

A other important command may be:

```bash
    vue inspect 
```