
$(document).on("ready", function (){
// log in, sign up modals
  	$(".log_in").on("click", function () {
  		$(".log_in_modal").modal("show");
  	});
  	$(".sign_up").on("click", function () {
  		$(".sign_up_modal").modal("show");
  	});

// on click of these green and red buttons hide and show the next post 
// green button 
  	$(".btn-circle.green").on("click", function (event) {
 // if the active posts id matches the last posts id then add class active to the first post again.     
      if ($(".post.active").data("post-id") === $(".post").last().data("post-id")) {
          $(".post.active").hide();
          $(".post.active").removeClass("active");
          $(".post").first().addClass("active");
          $(".post.active").fadeIn();
      }
      else {
        $(".post.active").hide()
  		  var nextpost = $(".post.active").next()
        $(".post.active").removeClass("active");
        nextpost.addClass("active");
        $(".post.active").fadeIn();
      }
    });

// red button
    $(".btn-circle.red").on("click", function (event) {
// if the active posts id matches the last posts id then add class active to the first post again.     
      if ($(".post.active").data("post-id") === $(".post").last().data("post-id")) {
          $(".post.active").hide();
          $(".post.active").removeClass("active");
          $(".post").first().addClass("active");
          $(".post.active").fadeIn();
      }
      else {
        $(".post.active").hide()
        var nextpost = $(".post.active").next()
        $(".post.active").removeClass("active");
        nextpost.addClass("active").fadeIn();
      }
    });


// when you click on the image of the event a modal will pop up
// with the event creators information
    $(".post_img").on("click", function (event) {
      var target = $(event.currentTarget)
      var id = target.data("id")

      $.ajax ({
        url: "/api/user/" + id + ".json",
        success: function (response) {
          $(".js_name").text(response.name);
          $(".js_age").text(" " + response.age);
          $(".js_bio").text(response.bio);
          $(".js_pic_one").attr("src", response.avatar_url);
          $(".js_pic_two").attr("src", response.pic_one_url);
          $(".js_pic_three").attr("src", response.pic_two_url);
          $(".js_pic_four").attr("src", response.pic_three_url);
        },

      });
      
      $(".show_events_profile").modal("show");
    });


// on click of the green button on home screen make a request with that current users id and dat that
// information to the event creators vite list page
    $(".btn-circle.green").on("click", function (event) {
      var user_click = $(event.currentTarget)
      var target = $(".post.active")
      var id = target.data("post-id")
      var current_user_id = user_click.data("sender-id")
  // this ajax call is to retreve that posts requests.
    console.log(current_user_id);
      $.ajax ({
        type: "post",
        url: "/posts/" + id + "/requests",
        success: function (response) {
             // update the UI for sender
        },
        
      });
    
    });

// this will allow the current user to see his updated profile page. 
    $(".show_profile_link").on("click", function () {
      $(".show_profile_modal").modal("show");
    });
  	
});