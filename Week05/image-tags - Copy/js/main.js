// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be 
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty 
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden 
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

var form = document.querySelector('.feature.frm');
var error = document.querySelector('p.feature.error');

function submitEvent(evt) {
    console.log('Form submitted');

    var targetForm = evt.target;
    var tag = targetForm.elements.tags;
    var error = document.querySelector('p.feature.error');

    // ensure that there is a value in the tag field before adding tag
    if (tag.value.trim() != '') {
    // insert a '#' before the tag for aesthetics
    document.querySelector('p.feature.tags').innerHTML += '#' + tag.value.trim() + ' ';
    // to remove the text that was typed in the text box
    tag.value = '';
    error.classList.add('hidden');
    } else {
        // No data entered in the input field
        error.classList.remove('hidden');
        console.log('hidden removed');
        error.innerHTML = 'Empty tags cannot be added';
    }
    
    evt.preventDefault();
}

form.addEventListener('submit', submitEvent);