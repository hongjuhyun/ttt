$(function(){
    $('.gnb>li:nth-child(1)').on('click', function(e){
		var offset = $("#about").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
        
    });
    $('.gnb>li:nth-child(2)').on('click', function(e){
        var offset = $("#skill").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
    $('.gnb>li:nth-child(3)').on('click', function(e){
        var offset = $("#work").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
    $('.gnb>li:nth-child(4)').on('click', function(e){
        var offset = $("#contact").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
    
    
     $('.indicator>li:nth-child(1)').on('click', function(e){
        var offset = $("#top").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
    $('.indicator>li:nth-child(2)').on('click', function(e){
        var offset = $("#about").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
    $('.indicator>li:nth-child(3)').on('click', function(e){
        var offset = $("#skill").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
    $('.indicator>li:nth-child(4)').on('click', function(e){
        var offset = $("#work").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
    $('.indicator>li:nth-child(5)').on('click', function(e){
        var offset = $("#contact").offset();
		$("html, body").animate({scrollTop : offset.top},1400);
        e.preventDefault();
    });
   
   

})

