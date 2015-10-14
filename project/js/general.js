function setEqualHeight(columns){ 
	var tallestcolumn = 0; 
	columns.each( 
		function(){ 
			currentHeight = $(this).height(); 
			if(currentHeight > tallestcolumn){ 
			tallestcolumn = currentHeight; 
		} 
	}); 
	columns.height(tallestcolumn); 
}; 

$(document).ready(function(){
	//$('.scroll_down_link').toggle('bounce', {times: 3}, 'slow');
	// console.log($('.header_btns a').innerWidth());
	// $('.header_btns').css('margin-left', -($('.header_btns').innerWidth()/2));
	
	setEqualHeight($(".get_to_know h4"));

	$('.scroll_down_link').click(function(e) {
		e.preventDefault(e);
		$('.scroll_down_link').parent('li').removeClass('active');
		$(this).parent('li').addClass('active');
		var elem = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(elem).offset().top
	    }, 700);
	});
});

$(window).load(function(){
	setEqualHeight($("footer .display_table"));
});


