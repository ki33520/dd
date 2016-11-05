"use strict";

require(["jquery","swiper"],function($,swiper) {
	var cssUrl = require.toUrl("./swiper.min.css");
	var cssTag = $('<link rel="stylesheet" type="text/css" href="'+cssUrl+'">');
	cssTag.appendTo('head');
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
    });
});
