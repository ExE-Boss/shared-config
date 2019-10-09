/* Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/ */
"use strict";

const extend = require("extend");

module.exports = extend(true, require("@exe-boss/eslint-config"), {
	env: {
		node: true,
	},
	root: true,
	rules: {
		"sort-keys": [
			"error",
			"asc",
		],
	},
});
