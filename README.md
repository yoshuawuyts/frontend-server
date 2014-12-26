# frontend-server
Simple frontend server example.

## Installation
```bash
$ hub clone yoshuawuyts/frontend-server
```

## Usage
```sh
# start server
$ npm start

# get css
$ curl -p http://localhost:1337/styles.css

# get js
$ curl -p http://localhost:1337/bundle.js
```

## Why?
This is a simple example of a [koa](https://github.com/koajs/koa) server. Sets
up `myth` and `browserify` and exposes them over http. Has some basic
boilerplate for Vagrant + Docker in there, but still needs some work.

## See Also
- [koa-watchify](https://github.com/yoshuawuyts/koa-watchify)
- [koa-myth](https://github.com/yoshuawuyts/koa-myth)

## License
[MIT](https://tldrlegal.com/license/mit-license)
