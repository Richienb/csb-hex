"use strict"

const convertColour = require("color-convert")

module.exports = input => {
	if (!Array.isArray(input) || input.length !== 3) {
		throw new TypeError(`Expected an array of 3 integers, got ${typeof input}`)
	}

	const [colour, saturation, brightness] = input

	return convertColour.hsv.hex([Math.round(colour / 100 * 360), saturation, brightness])
}
