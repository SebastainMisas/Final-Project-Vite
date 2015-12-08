
$(document).on("ready", function (){
//on click of the senders profile pic show a modal with all the senders info.
	$(".senders_img").on("click", function (event) {
      var target = $(event.currentTarget)
      var id = target.data("sender-id")

      $.ajax ({
        url: "/api/user/" + id + ".json",
        success: function (response) {
          console.log(response);
          $(".js_name").text(response.name);
          $(".js_age").text(" " + response.age);
          $(".js_bio").text(response.bio);
          $(".js_pic_one").attr("src", response.avatar_url);
          $(".js_pic_two").attr("src", response.pic_one_url);
          $(".js_pic_three").attr("src", response.pic_two_url);
          $(".js_pic_four").attr("src", response.pic_three_url);
        },

      });
      
      $(".senders_profile_modal").modal("show");
    });
//when user click on nexttime button make ajax to the nexttime(destroy) meathod specified in requests controller
	$(".btn-circle.next_time").on("click", function (event) {
		var target = $(event.currentTarget)
		var id = target.data("request-id")
		var current_user = target.data("current-user")
		$.ajax ({
			url: "/api/request/" + id + "/nexttime",
			success: function () {
				target.parent().fadeOut();
				console.log(target.parent());
			},
		});
	});
// when user clicks on vite make ajax to change that request status to invited. 
	$(".btn-circle.vite").on("click", function (event) {
		var target = $(event.currentTarget)
		var id = target.data("request-id")
		var current_user = target.data("current-user")
		$.ajax ({
			url: "/api/request/" + id + "/invited",
			success: function (response) {
				console.log(response);
				target.parent().find('.next_time').fadeOut();
				target.closest(".btn-circle.vite").fadeOut();
				$(".btn-circle.vite").parent().find('.senders_name').fadeOut();
				target.parent().find('.message').show();
			},
		});
	});
 });