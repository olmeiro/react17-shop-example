# Proyecto de React 17 con Webpack
https://github.com/platzi/react-practico

https://platzi.com/clases/2484-react-practico/42075-navegacion-entre-rutas/

https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=5%3A2808&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A998&amp%3Bstarting-point-node-id=5%3A2808

https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A719&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A1&amp%3Bstarting-point-node-id=0%3A719

https://v5.reactrouter.com/web/guides/quick-start

## Configuración de Webpack:

npm install @babel/core @babel/preset-env @babel/preset-react

npm install webpack webpack-cli webpack-dev-server

## Plugin y loaders:
npm install babel-loader html-loader html-webpack-plugin

### Creamos los archivos para configurar webpack:

Creamos el archivo .babelrc aquí se reconocen los presets agregados.

Creamos un nuevo archivo en la raiz del proyecto .webpack.config.js

Agregamos scripts en package.json para el proyecto:
    "start": "webpack serve --open",
    "build": "webpack --mode production",

### Para ejecutar el proyecto : npm run start

## Agregamos sass al proyecto:
npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D

## Ahora configuramos en webpack.config.js:
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
     {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    configuración de devServer en el archivo de webpack.config.js por la siguiente:

devServer: {
  static: {
    directory: path.join(__dirname, 'public'),
    },
  compress: true,
  port: 3005,
}


### agregamos plugin de babel para async await:
npm install @babel/plugin-transform-runtime

en .babelrc agregamos:
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]

## API Fake:
https://fakeapi.platzi.com/
[GET] https://api.escuelajs.co/api/v1/products
https://fakeapi.platzi.com/doc/products

[GET] https://api.escuelajs.co/api/v1/categories
[GET] https://api.escuelajs.co/api/v1/users

### Deploy en GitHub Pages:
https://github.com/marketplace/actions/deploy-to-github-pages


## Issues:
https://github.com/platzi/react-practico/issues

