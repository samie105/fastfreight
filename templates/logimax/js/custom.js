jQuery(function ($) {
	
// POINTER CHANGE

$(document).on('mousemove', function(e) {
  $('#circle-big').css({
    left: e.pageX,
    top: e.pageY
  });
  $('#circle').css({
    left: e.pageX,
    top: e.pageY
  });
});
$('a').mouseover(function() {
  $('#cursor').addClass('on-link');
})
$('a').mouseout(function() {
  $('#cursor').removeClass('on-link');
})	

// END POINTER CHANGE


	// Offcanvs Custom
	$('#offcanvas-toggler-custom').on('click', function (event) {
		event.preventDefault();
		$('.offcanvas-init').addClass('offcanvas-active');
	});
	
      //>>Image Class Add Start <<//
      $(document).on("mouseenter", ".changeImage2", function () {
          let newImage = $(this).data("image");
          let fadeDuration = 200;

          $(".case-study-image img").fadeOut(fadeDuration, function () {
              $(".case-study-image img").attr("src", newImage);
              $(".case-study-image img").fadeIn(fadeDuration);
          });

          $(this).addClass("clicked");
          $(".changeImage2").not(this).removeClass("clicked");
      });

});