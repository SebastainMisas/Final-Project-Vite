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
  		$(".post.active").show("slide", { direction: "left" }, 1000);;
  	});
    $(".btn-circle.red").on("click", function () {
      $(".post.active").hide(2000)
      var nextpost = $(".post.active").next()
      $(".post.active").removeClass("active");
      nextpost.addClass("active");
      $(".post.active").show("slide", { direction: "left" }, 1000);
    });
    $(".show_profile_link").on("click", function () {
      $(".show_profile_modal").modal("show");
    });
    $(".img-responsives").on("click", function (event) {
      var taregt = $(event.currentTarget)
      var id = taregt.data("id")
      $.ajax ({
        url: "/api/user/" + id + ".json",
        success: function (response) {
          console.log(response)
          $(".js_name").text(response.name);
        },

      });
      
      $(".show_events_profile").modal("show");
    });
  	
});