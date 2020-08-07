const test = require("ava")
const csbHex = require(".")

test("main", t => {
	t.is(csbHex([0, 0, 100]), "FFFFFF")
	t.is(csbHex([0, 0, 0]), "000000")
	t.is(csbHex([14, 100, 100]), "FFD500")
})
