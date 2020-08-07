# csb-hex [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/csb-hex/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/csb-hex)

Convert a Scratch CSB colour to HEX.

[![NPM Badge](https://nodei.co/npm/csb-hex.png)](https://npmjs.com/package/csb-hex)

## Install

```sh
npm install csb-hex
```

## Usage

```js
const csbHex = require("csb-hex");

csbHex([0, 0, 100]);
//=> "FFFFFF"

csbHex([0, 0, 0]);
//=> "000000"

csbHex([14, 100, 100]);
//=> "FFD500"
```

## API

### csbHex(input)

#### input

Type: `array of 3 numbers`

The CSB to convert.

## Related

- [hex-csb](https://github.com/Richienb/hex-csb) - Convert a HEX colour to Scratch CSB
