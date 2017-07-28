$(function() {
	var allowAudioString = 'allow audio';
	var playAudioString = 'play music';

	// Try to play audio
	var playPromise = $('audio')[0].play();

	if (playPromise !== undefined) {
		// audio promise implemented
		playPromise.then(function() {
			// Success block
		}).catch(function(error) {
			// On mobile you must get permission to play.
			$('#sound-toggle').children()[0].innerHTML = allowAudioString;
		});	

	} else {
		// Promise not implemented
		try {
			var audio = document.querySelector('#song');
			console.log(audio);
			$(audio).on('play', function() {
				// Success block
			});
		} catch (e) {
			$('#sound-toggle').children()[0].innerHTML = 'allow sound';
		}
	}

	$('#sound-toggle').click(function(e) {
		var firstChild = $(this).children()[0];
		//console.log(firstChild);
		if (firstChild.innerHTML === allowAudioString) {
			firstChild.innerHTML = playAudioString;
			return;
		}
		if (firstChild.innerHTML === playAudioString) {
			firstChild.innerHTML = 'sound is on';
			$('audio')[0].play();
			return;
		}
		$('#sound-toggle p').toggle();
		$('audio').prop('muted', function(_, muted) {return !muted;});
	});

	$('.scroll-button').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});

	// $('.feature-item').hover(function() {
	// 	var url = 'url(images/' + $(this).attr('data-screen') + '.png)';
	// 	console.log(url);
	// 	$('.screenshot').css('background-image', url);
	// }, function() {
	// 	var url = 'url(images/iphone7timeline.png)';
     //    $('.screenshot').css('background-image', url);
	// });

	// $("#form").on('keypress', function(e) {
	// 	if (event.keyCode == 13) {
	// 		var url = "https://Ellomix.us15.list-manage.com/subscribe/post-json?u=cfbd431106e0dfdc815808a0d&amp;id=b71aec0881";
	// 		$.ajax({
	// 		  type: "POST",
	// 		  url: url,
	// 		  data: $(this).serialize(),
	// 		  dataType: "json",
	// 		  success: function(result) {
	// 		  	console.log(result);
	// 		  	$('#form-div').html("<p>THANK YOU</p>");
	// 		  },
	// 		  error: function(xhr, status, error) {
	// 		  	console.log(error);
	// 		  	$('#form-div').html("<p>SOMETHING WENT WRONG</p>");
	// 		  }
	// 		});
	// 	}
	// });
});