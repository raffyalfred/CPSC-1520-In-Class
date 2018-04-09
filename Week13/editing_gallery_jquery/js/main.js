// assume current is the first one..
var currentThumb = $('.thumbnails>li>img')[0];
//                \ array of img tags /


// handle clicking the thumbs
//  $ = document.querySelector('nal ul).addEventListener('click', 'img', function....)
$('nav ul').on('click', 'img', function (evt) {
	// track the cuurent thumb...
	currentThumb = evt.target;

	// set the title caption of the image of the selected image
	$('.title').text(evt.target.title);
	// display the tags, if any...
	$('p.tags').text($(currentThumb).attr('data-tags'));

	// option 1
	/*
	$('.editor img').attr('src', 
   		evt.target.src.replace('_thumb', ''));
	$('.editor img').attr('alt', 
   		evt.target.alt);
	$('.editor img').attr('title', 
   		evt.target.title);
	*/
	// option 2
	/*
	$('.editor img').attr('src',evt.target.src.replace('_thumb', ''))
		.attr('alt', evt.target.alt)
		.attr('title', evt.target.title);
	*/
	// option 3
	$('.editor img').attr({
		src : evt.target.src.replace('_thumb', ''),
		alt : evt.target.alt,
		title: evt.target.title
	});
});

// handle the submitting of the form
$('.editor form').on('submit', function(evt){
	var value;
	// update the tag for the currently displayed image

	//1. get tag value...
	value = $(evt.target.elements.tag).val();

	if(value.trim().length > 0 && value.indexOf(' ') == -1) {
		// Valid tag value
		//2. update the data p-tags
		$('p.tags').append('#' + value + ' ');
		//3. update the data-tags...
		$(currentThumb).attr('data-tags', $('p.tags').text());
		// clear/reset form
		evt.target.reset();
	} else {
		$('p.error').text('cannot be empty or contain spaces').removeClass('hidden').fadeOut(3000, function() {
			$('p.error').addClass('hidden').removeAttr('style');
		});
	}
	evt.preventDefault();
})