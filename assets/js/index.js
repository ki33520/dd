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
    
	$('.add-sub').each(function(){
		var sub = $(this).find('.btn-sub'),
			add = $(this).find('.btn-add'),
			number = $(this).find('.number'),
			num = Number(number.text()),
			max = $(this).data('max');
		function count(){
			num = num + this;
			sub.removeClass('disabeld');
			add.removeClass('disabeld');
			if(num<=0){
				num = 0;
				sub.addClass('disabeld');
			}
			if(num>=max){
				num = max;
				add.addClass('disabeld');
			}
			number.text(num);
		}
		sub.on('click',count.bind(-1));
		add.on('click',count.bind(1));
	})

});
