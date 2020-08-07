/**
Convert a Scratch CSB colour to HEX.
@param input The CSB to convert.
@example
```
const csbHex = require("csb-hex");

csbHex([0, 0, 100]);
//=> "#FFFFFF"

csbHex([0, 0, 0]);
//=> "#000000"

csbHex([14, 100, 100]);
//=> "#FFD800"
```
*/
declare function csbHex(input: [number, number, number]): string

export = csbHex
