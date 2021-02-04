// Nivo Slider Js //
$(window).load(function() {
         $('#munna').nivoSlider();     
});


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});




// One Page Navigation

$('a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		var target = $(id).offset().top;
		$('html, body').animate({scrollTop:target}, 500);
		event.preventDefault();
	});

function getTargetTop(elem){
	var id = elem.attr("href");
	var offset = 60;
	return $(id).offset().top - offset;
}


	$(window).scroll(function(e){
		isSelected($(window).scrollTop())
	});

var sections = $('a[href^="#"]');

function isSelected(scrolledTo){
   
	var threshold = 100;
	var i;

	for (i = 0; i < sections.length; i++) {
		var section = $(sections[i]);
		var target = getTargetTop(section);
	   
		if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
			sections.removeClass("active");
			section.addClass("active");
		}

	};
}