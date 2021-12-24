//모바일 햄버거버튼
$(document).ready(function () {
	$(".menu-toggle-btn").click(function () {
		$(".gnb").stop().slideToggle("fast");
	});
});

//swiper-모바일 슬라이드
$(document).ready(function () {
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 2000,
			disableOnInteraction: false
		},
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});

});


//skill bar
$(document).ready(function () {
	jQuery('.skillbar').each(function () {
		jQuery(this).find('.skillbar-bar').animate({
			width: jQuery(this).attr('data-percent')
		}, 6000);
	});
});

$('.Count').each(function () {
	var $this = $(this);
	jQuery({
		Counter: 0
	}).animate({
		Counter: $this.text()
	}, {
		duration: 6000,
		easing: 'swing',
		step: function () {
			$this.text(Math.ceil(this.Counter));
		}
	});
});


//top버튼(작동안됨)
$(document).ready(function () {
	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ($(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll(function () {
		if ($(document).scrollTop() < 50) $('.to_top').addClass('hide');
		else $('.to_top').removeClass('hide');
	});
});

//#contact의 [SEND]버튼 클릭하면 동작
$(document).ready(function () {
	$('#contact input[type="submit"]').click(function () {
		if ($('#contact input[type="text"]').val().length == 0) {
			alert("이름을 입력하세요.");
			$('#contact input[type="text"]').focus();
			return false;
		}
		if ($('#contact input[type="email"]').val().length == 0) {
			alert("이메일을 입력하세요.");
			$('#contact input[type="email"]').focus();
			return false;
		}
		if ($('#contact input[type="tel"]').val().length == 0) {
			alert("휴대폰번호를 입력하세요.");
			$('#contact input[type="tel"]').focus();
			return false;
		}
		if ($("#contact textarea").val().length == 0) {
			alert("메세지를 입력하세요.");
			$("#contact textarea").focus();
			return false;
		}
	});
});

