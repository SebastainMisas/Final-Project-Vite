// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("ready", function (){
  	$(".log_in").on("click", function () {
  		$(".log_in_modal").modal("show");
  	});
  	$(".sign_up").on("click", function () {
  		$(".sign_up_modal").modal("show");
  	});

  	$(".btn-circle.green").on("click", function () {
  		$(".post.active").hide()
  		var nextpost = $(".post.active").next()
  		$(".post.active").removeClass("active");
  		nextpost.addClass("active");
  		$(".post.active").show();
  	});
  	
});