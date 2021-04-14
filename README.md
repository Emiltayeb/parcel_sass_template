# Parcel bundler template, integrated with Sass and Babel polyfill plugin

![pacrel image](./src/assets/images/parcelBg.gif)

### based and inspired by [Brad Traversy Video](https://www.youtube.com/watch?v=8rD9amRSOQY&list=PLLDPbs5wkrIJ-L4VXSwKjd19Zq0ZoT53u&index=31) and CSS files structure by [Elad Shechter](https://www.youtube.com/watch?v=HjJEcZDmHM4)

<br>

--

## How to Get started:

- download the zip or clone the repo
- cd into `parcel_sass_template`
- install the node modules by running `npm install` or `npm i ` from your terminal

<br>

## Folders & files

- public : contains the `index.html` file.

- src :
  - assets : contains every asset in your project. images,fronts,videos ect..
  - sass : all the sass files goes in here. we're importing them into the main sass file under `project-name.scss` . change the `project-name` to your project name.
  - `app.js` contains the main app javascript file. you can create components and divide your app event further. for more information i suggest watching [Brad Traversy Video](https://www.youtube.com/watch?v=8rD9amRSOQY&list=PLLDPbs5wkrIJ-L4VXSwKjd19Zq0ZoT53u&index=31)

## scripts

### Dev script:

- Will start a local server in port 3000 and  ensure the deletion of the previous dev & cache folders .
- You can change the deault port by setting different port number instead of 3000 just change the `-p 3000` to your desire port.

```json

 "dev": "rm -rf ./development && rm -rf ./.cache && parcel public/index.html --out-dir development -p 3000"

```

### Build script:

- Will build your project files & assets into one bundle, again by removing cache folders and the previous build version.

- You can customized the output directory by chaing the `--out-dir` command

- The `--public-url` is crucial for making sure that in the build command we get a relative path to our assets.

```json
"build": "rm -rf ./dist && rm -rf ./.cache && parcel build public/index.html --out-dir dist --public-url ./"
```

## Babel polyfill:

To polyfill new javascript featuers

```javascript
import "babel-polyfill/";
import "core-js/stable";
```
 
this will make parcel polyfill features such as `promise` and `Array.prototype.filter, Array.prototype.map ect..`  back to es5.

## Gsap

This template comes with gsap installed for the intro animation.

if you wish to remove to library, simply run

```
npm uninstall gsap
```
