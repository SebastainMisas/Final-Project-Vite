


$(document).on("ready", function (){
	if ($(".js-notifications") === 0) {
		$(".js-notifications").hide()
	}

	var chatRef 
	var theirNotifications
	var requestee
	var invitation_sender

	// Loop over the message buttons
	$(".js-message-btn").each(function (i, btn) {
		
		// Grab the IDs from each conversation
		var requestee = $(btn).data('requestee-id');
		var invitation_sender = $(btn).data('invitation-sender-id');

		// Connect to Firebase to get my notifications from each conversation
		var myNotifications = new Firebase('https://viteapp1.firebaseio.com/notifications/' + invitation_sender + "/" + requestee + "/" + requestee);

		// Fetch the notifications from Firebase
		myNotifications.on('value', function (snapshot) {
			console.log("value")
			var currentCount = snapshot.val();

			// If the other person hasn't sent messages yet, currentCount is null
			if (currentCount === null) {
				// So set it to 0
				currentCount = 0;
			}

			// Grab the little notifications count icon
			var $notifications = $(btn).closest('.messages_profile').find('.js-notifications');

		// if no notifications on page load then dont show it
			if (currentCount === 0) {
				$notifications.hide()
			}
		// Update its text with the notifications count from this conversation
			else {
				$notifications.text(currentCount).show();
			};
		});
	});

//button to see your messages with the invitation sender
	$(".js-message-btn").on("click", function (event) {
	// on click of the button hide and show the accordian
		$("#collapseOne").collapse('hide');
		$("#collapseTwo").collapse('show');
	// grab the current target
		var target = $(event.currentTarget)
	//add invitation sender image to messsages screen
		

	// grab both users id's from that button
    	requestee = target.data('requestee-id')
    	invitation_sender = target.data('invitation-sender-id')
    	console.log("",invitation_sender, requestee)
    	$('#messagesDiv').empty()
		chatRef = new Firebase('https://viteapp1.firebaseio.com/messages/' + invitation_sender + "/" + requestee);
	// request a specific database url for notifications and update the value saved
		theirNotifications = new Firebase('https://viteapp1.firebaseio.com/notifications/' + invitation_sender + "/" + requestee + "/" + invitation_sender);	
	
		var myNotifications = new Firebase('https://viteapp1.firebaseio.com/notifications/' + invitation_sender + "/" + requestee + "/" + requestee);
	// setting the value of notification to 0  
		myNotifications.set(0);
	
		myNotifications.on('value', function (snapshot) {
	// if the notification is not 0 show the notification on screen else hide it. 
			var currentCount = snapshot.val();
			if (currentCount !== 0) {
				target.closest('.messages_profile').find('.js-notifications').show();
			} 
			else {
				target.closest('.messages_profile').find('.js-notifications').hide();
			}
		}); 

	// grab the value of the message from firebase and use the (display chat message) funtion to show messages
		chatRef.on('child_added', function(snapshot) {
				var message = snapshot.val();
			displayChatMessage(message.name, message.text);
			
		});
	});

// on keypress if enter key push message into database
	$('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
        	// send message is defined below
			sendMessage();
        }
      });

// on click of the send button push message into database
		$('.glyphicon-send.to_invitor').on("click", function () {
			// send message is defined below
			sendMessage();
		});
// adding messages in a message div      	
	function displayChatMessage(name, text) {
		
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
      };

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

			
  // this functon conatins all code to add message to database and update notification    
	function sendMessage () {
		var name = $('#current_user_name').data("users-name");
		var text = $('#messageInput').val();
		chatRef.push({name: name, text: text});

		// Transaction: Update the table using the previous value
		theirNotifications.transaction(function (currentCount) {
			//                               ^^
			//                               ||
			// currentCount is the previous value


			// The first time we update this person's notifications, currentCount is null
			if (currentCount === null) {
				// So set it to 0
				currentCount = 0;
			}
			
			// Update the currentCount by increasing by 1
			return currentCount + 1;

		});

		$('#messageInput').val('');
	}
});

