jQuery(function($) {

	$('.mobile-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	});
	$('.menu ul li').on('click', function() {
		$('.mobile-btn, .menu').removeClass('active');
	});

	$('.checkbox input').on('change', function(){
		if($(this).is(':checked')) $('.intro-form form input[type="submit"]').attr('disabled', false);
		else $('.intro-form form input[type="submit"]').attr('disabled', true);
	});

	$('.read-btn').on('click', function() {
		if($(this).is(':contains("Подробнее")')){
			$('.about__text--hidden').slideDown(300);
			$('.about').css('overflow-y', 'scroll');
			$(this).text('Скрыть');
		}else{
			$(this).text('Подробнее');
			$('.about__text--hidden').slideUp(100);
			$('.about').removeAttr('style');
		}
		
	});


});