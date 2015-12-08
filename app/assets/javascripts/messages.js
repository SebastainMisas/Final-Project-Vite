
$(document).on("ready", function (){
// instant messaging system 	
	var current_user_id = $('#current_user_name').data("current-users-id");
    var inviation_sender = $(".invitation-sender").data("invitation-sender-id")								
	var chatRef = new Firebase('https://viteapp1.firebaseio.com/messages/' + inviation_sender + "/" + current_user_id);

//on keypress of keycode 13 wicth is the enter button. 
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#current_user_name').data("users-name");
          var text = $('#messageInput').val();
          chatRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      	chatRef.on('child_added', function(snapshot) {
  			var message = snapshot.val();
			displayChatMessage(message.name, message.text);
		});
	function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
//end 

// remove the invitation by making a ajax call to a remove api

	$(".js-hide-vite").on("click", function (event) {
		console.log(event);
		var target = $(event.currentTarget)
		var id = target.data("message-id")
		$.ajax ({
			url: "/api/messages/" + id + "/remove",
			success: function () {
				target.closest(".messages_profile").fadeOut()
			},
			error: function(err){
				console.log(err);
			}
		});
	});

// on click of the invitations sender open a modal with senders information

	$(".senders_img").on("click", function (event) {
		var target = $(event.currentTarget)
		var id = target.data("sender-id")
		
		$.ajax ({
			url: "/api/user/" + id + ".json",
			success: function (response) {
				$(".js_bio").text(response.bio);
				$(".js_name").text(response.name);
				$(".js_age").text(" " + response.age);
				$(".js_pic_one").attr("src", response.avatar_url);
				$(".js_pic_two").attr("src", response.pic_one_url);
				$(".js_pic_three").attr("src", response.pic_two_url);
				$(".js_pic_four").attr("src", response.pic_three_url);

			},

		});
			      
		$(".message_profile_modal").modal("show");
	});
			
      
});