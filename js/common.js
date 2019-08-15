jQuery(function($) {

	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	});
	$('.menu ul li').on('click', function() {
		$('.mobile-btn, .menu').removeClass('active');
	});


});