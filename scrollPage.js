(function () {
	var display = $('.main_content');
	var sections = $('.section');
	var inscroll = false;
var performTransition = function(sectionEq){

	if(inscroll) return;
	inscroll = true;

	var position = (sectionEq * -100) + '%';
	sections.eq(sectionEq).addClass('active').siblings().removeClass('active');
	display.css({'transform' : 'translate(0,' + position + ')'});
	setTimeout(function(){
		inscroll = false;
		$('fixed_menu_item').eq(sectionEq).addClass('active')
		.siblings().removeClass('active');
	}, 1300);
}

$('.wrapper').on('wheel', function(e){
	var activeSection = sections.filter('.active');
	var nextSection = activeSection.next();
	var prevSection = activeSection.prev();
	if(e.originalEvent.deltaY < 0 && prevSection.length){
		performTransition(prevSection.index());
	}
	if (e.originalEvent.deltaY > 0 && nextSection.length) {
		performTransition(nextSection.index());
	}
});
$('.main_nav_link').on('click', function(e){
	e.preventDefault();
	var href = parseInt($(this).attr('href'));
	performTransition(href);
});
}());