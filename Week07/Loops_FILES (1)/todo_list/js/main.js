// Enter JavaScript for the exercise here...


document.querySelector('[name=toggle]').addEventListener('change', function(evt) {
    var checks = document.querySelectorAll('[name=message]');
    var index = 0;

    while (index < checks.length) {
            if (evt.target.checked) {
                checks[index].checked = true;
            } else {
                checks[index].checked = false;
            }
        
        index = index + 1;

    }
    
});

document.querySelector('button[type="submit"]').addEventListener('submit', function(evt) {

    evt.preventDefault();

})