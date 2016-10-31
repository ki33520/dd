"use strict";

require.config({
	baseUrl: "./assets/js",
	paths: {
		"jquery": "jquery.min",
	},
});

require(["jquery"],function($) {
	console.log($)
});