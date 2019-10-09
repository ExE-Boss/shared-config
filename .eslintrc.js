/* Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/ */
"use strict";

const extend = require("extend");

exports.root = true;
exports.extends = "@exe-boss";

extend(true, exports, {
	env: {
		node: true,
	},
	rules: {
		"sort-keys": "error",
	},
});

Object.defineProperty(exports, "__esModule", { value: true });
