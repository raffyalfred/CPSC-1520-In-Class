/*

Create a click event listener on the .image-links element.  The listener function
should set the src attribute of the img.target-image element and prevent the default
behaviour from occurring.

*/

// Target the element
var linksElement = document.querySelector('.image-links');


// Function for the desired action
function showImage(evt) {

    // elementSrc.src = linksElement.href;
    var elementSrc = document.querySelector('img.target-image');
    elementSrc.setAttribute('src', evt.target.href);
    evt.preventDefault();
}

linksElement.addEventListener('click', showImage);