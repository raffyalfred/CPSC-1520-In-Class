// 1. select the target element
// var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
// function handleFeatureClick() {
// 	var desc = document.querySelector('p.feature.description');

	// remove the hidden class IF it is present,
	// otherwise, add it back!
	
	// if(desc.classList.contains('hidden')) {
	// 	desc.classList.remove('hidden');
	// } else {
	// 	desc.classList.add('hidden');
	// }

	
	
	// achieve the same result using using string functions
	
	// if(desc.className.indexOf('hidden') >= 0) {
	// 	desc.classList.remove('hidden');
	// } else {
	// 	desc.classList.add('hidden');
	// }

	
// }

// 3. add event listener
// featureImage.addEventListener('click', handleFeatureClick);





// An anoymous function is a function that does not have a className
// anoymous function are often used when you want to create a "one-of"
// function that is being passed into another method/function.

// 1. select the target element
document.querySelector('img.feature')
	.addEventListener('click', function () {
	var desc = document.querySelector('p.feature.description');	
	if (desc.classList.contains('hidden')) {
		desc.classList.remove('hidden');
	} else {
		desc.classList.add('hidden');
	}
	});



