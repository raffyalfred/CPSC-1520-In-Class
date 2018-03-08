// your js here...
var images = ['mountain1.jpg','mountain2.jpg','mountain3.jpg'];
var currentImg = 0; // variable to track location of image

document.querySelector('.carousel>img').src = 'images/' + images[0];

document.querySelector('.carousel').addEventListener('click', function(evt) {
    var target = evt.target;

    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next array
            currentImg += 1;
           if (currentImg === images.length) {
               currentImg = 0;
           }

        } else if (target.classList.contains('prev')) {
            //move to the prev array
            currentImg -= 1;
            if (currentImg === -1) {
                currentImg = images.length -1;
            }

        }

        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
    }
})