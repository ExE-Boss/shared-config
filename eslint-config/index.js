/* Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/ */
"use strict";

module.exports = {
	env: {
		es6: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 9,
	},
	rules: {
		"block-scoped-var": "error",
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"consistent-return": "error",
		"consistent-this": "error",
		"dot-location": [
			"error",
			"property",
		],
		"dot-notation": "error",
		"eol-last": "error",
		eqeqeq: "error",
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoreComments: true,
				outerIIFEBody: 0,
			},
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"no-await-in-loop": "warn",
		"no-console": "off",
		"no-constant-condition": "warn",
		"no-empty": "off",
		"no-fallthrough": "warn",
		"no-new-wrappers": "error",
		"no-octal": "warn",
		"no-regex-spaces": "warn",
		"no-return-await": "error",
		"no-unused-vars": "warn",
		"no-var": "error",
		"operator-linebreak": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "warn",
		"prefer-destructuring": "warn",
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "error",
		"prefer-template": "error",
		quotes: [
			"error",
			"double",
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		"require-jsdoc": "off",
		semi: [
			"error",
			"always",
		],
		"sort-imports": "error",
		strict: [
			"error",
			"global",
		],
		"valid-jsdoc": [
			"warn",
			{
				prefer: {
					arg:	"param",
					argument:	"param",
					prop:	"property",
					returns:	"return",
				},
				preferType: {
					Boolean:	"boolean",
					Number:	"number",
					String:	"string",
					bool:	"boolean",
				},
				requireParamDescription: false,
				requireReturn: false,
				requireReturnDescription: false,
				requireReturnType: false,
			},
		],
	},
};
