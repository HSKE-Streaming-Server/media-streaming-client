# media-streaming-client

## local testing

for local testing, it might be neccessary to add tis line to the `.htaccess` inside the apache's webroot.

```
Header set Access-Control-Allow-Origin "*"
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### JSON Server setup
```
npm i json-server
```

### JSON Server run
```
json-server --watch json-api-server.json
```

### run JSON server and Vue.js dev server
```
npm start
```
