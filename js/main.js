$(function(){

	$(".menu a, .go-top, .logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

		$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="arrow-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="arrow-right"></button>',
		responsive: [
			{
			  breakpoint: 769,
			  settings: {
				arrows: false
			  }
			},
		]
	});

	$('.menu__btn, .menu a').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});

	var mixer = mixitup('.portfolio__content');
});