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
			$('.about').css({
				'overflow-y': 'scroll',
				'padding-right': '17px'
			});
			$(this).text('Скрыть');
		}else{
			$(this).text('Подробнее');
			$('.about__text--hidden').slideUp(100);
			$('.about').removeAttr('style');
		}
		
	});

	function myResize() {
		if($(window).width() > 768){
			var scrolled;
			window.onscroll = function() {
				scrolled = window.pageYOffset || document.documentElement.scrollTop;
				if(scrolled > 30){
					$(".header").css({"background": "rgba(0,0,0,.8)"})
				}
				if(30 > scrolled){
					$(".header").css({"background": "transparent"});
					$('.menu ul li a').parent().removeClass('active');     
				}
			}
		}
	}myResize();

	$(window).on('resize', function(){myResize();});

	$(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-180;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a').parent().removeClass('active');
			$('a[href="#'+id+'"]').parent().addClass('active');

        }
    })
 });

$("nav, .opu").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top-60;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });

	$('.portfolio__slider').slick({
		adaptiveHeight: 'true',
		prevArrow: '<button class="slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
   		nextArrow: '<button class="slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 477.175 477.175" xml:space="preserve">	<path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>'
	});

});

