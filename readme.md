# observ-mobile [![Build Status](https://travis-ci.org/bendrucker/observ-mobile.svg?branch=master)](https://travis-ci.org/bendrucker/observ-mobile)

> Observable mobile viewport state


## Install

```
$ npm install --save observ-mobile
```


## Usage

```js
var device = require('observ-mobile')

device(function onChange () {
  // ...
})

device.mobile()
//=> true/false

device.orientation()
//=> landscape/portrait
```

## API

#### `device([callback])` -> `function`

##### callback

Type: `function`

A callback to call whenever mobile state or orientation changes.

## License

MIT © [Ben Drucker](http://bendrucker.me)
