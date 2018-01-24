
// Identify elements that you want to listen to
var featureLink = document.querySelector('a.feature.link');
var featureImage = document.querySelector('img.feature');
var captionParagraph = document.querySelector('p.feature.title');

// Create a function that performs the desired action for when the even occurs
function imageHandler(evt) {
    
    featureImage.src = featureLink.href;
    featureImage.alt = featureLink.title;
    captionParagraph.innerHTML = featureLink.title;
    featureImage.classList.remove('hidden');
    
    evt.preventDefault();
}


// Add the function as an event listener for the desired event to the element in question
featureLink.addEventListener('click', imageHandler);