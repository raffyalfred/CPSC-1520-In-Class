// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function

function handleFeatureClick() {

    console.log('img.feature was clicked...');
    // Grab the HTMLElement with a .feature and a .description class
    var desc = document.querySelector('.feature.description');
    // All HTMLElement objects have .classList property that is a collection of class names
    // Example if you were to remove a class for an effect
    desc.classList.remove('hidden');


}
// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);