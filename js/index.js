$(function() {
	const allowAudioString = 'allow audio';
	const playAudioString = 'play music';
	let appDemoImage;

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

	// Toggle sound on/off
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

	// Scroll 100 pixels when scroll down arrow is clicked
	$('.scroll-button').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});

	// Changes app screenshot based on hovered element
	$('.feature-item').hover(function(e) {
		console.log(e.target)
		let url = 'url("images/' + $(this).attr('data-screen') + '.png")';
		console.log(url);
		


		$(this).css('background-color', 'rgba(0, 0, 0, .25')
	}, function() {
		let url = 'url(../images/iPhone 8 White.png)';
        $('.screenshot').css('background-image', url);
        $(this).css('background-color', 'transparent')
	});
});

// Creates and returns an image DOM element with the given URL
function createImageElement(url) {
	let img = document.createElement("img");
	img.src = url;
	img.width = 200;
	img.height = "auto";
	return img;
}
