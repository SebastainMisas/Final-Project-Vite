// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready", function (){
	var chatRef 
	var requestee
	var invitation_sender
	$(".js-message-invitee-btn").on("click", function (event) {
		var target = $(event.currentTarget);
		//add invitee image to messsages screen
		requestee_img_url = target.data("requestee-img")
		$(".message-sender-img").attr("src", requestee_img_url);

		
    	requestee = target.data('requestee-id');
    	invitation_sender = target.data('invitation-sender-id');
    	console.log("",invitation_sender, requestee);
    	$('#messagesDiv').empty();
		chatRef = new Firebase('https://viteapp1.firebaseio.com/messages/' + invitation_sender + "/" + requestee);	
		chatRef.on('child_added', function(snapshot) {
				var message = snapshot.val();
			displayChatMessage(message.name, message.text);
		});
	});
// on keypress if enter key push message into database
	$('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#current_user_name').data("users-name");
          var text = $('#messageInput').val();
          chatRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });

// on click of the send button push message into database
      $('.glyphicon-send.to_invitee').on("click", function () {
          var name = $('#current_user_name').data("users-name");
          var text = $('#messageInput').val();
          chatRef.push({name: name, text: text});
          $('#messageInput').val('');
      });

// adding messages in a message div      	
	function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
//end 
});