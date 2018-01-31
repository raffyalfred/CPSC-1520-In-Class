
// Identify elements that you want to listen to
var featureLink = document.querySelector('a.feature.link');
var textLink = document.querySelector('a.feature');

// Create a function that performs the desired action for when the even occurs
function imageHandler(evt) {
    
    var featureImage = document.querySelector('img.feature');
    var captionParagraph = document.querySelector('p.feature.title');
    var textLink = document.querySelector('a.feature');

    if(featureImage.classList.contains('hidden')) {

        featureImage.src = featureLink.href;
        featureImage.alt = featureLink.title;
        captionParagraph.innerHTML = featureLink.title;
        textLink.innerHTML = 'Hide Barcelona'
        featureImage.classList.remove('hidden');
    } else {
        featureImage.src = "";
        captionParagraph.innerHTML = "";
        textLink.innerHTML = 'View Barcelona'
        featureImage.classList.add('hidden');
    }
    
    evt.preventDefault();
}


// Add the function as an event listener for the desired event to the element in question
featureLink.addEventListener('click', imageHandler);