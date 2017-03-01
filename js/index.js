$(function() {
	// On mobile you must get permission to play.
	setTimeout(function() {
		if ($('audio').prop('paused')) {
			console.log($('#sound-toggle').children()[0]);
			$('#sound-toggle').children()[0].innerHTML = 'allow sound';
		}	
	}, 100);

	$('#sound-toggle').click(function(e) {
		var firstChild = $(this).children()[0];
		console.log(firstChild);
		if (firstChild.innerHTML === 'allow sound') {
			firstChild.innerHTML = 'play music';
			return;
		}
		if (firstChild.innerHTML === 'play music') {
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
});