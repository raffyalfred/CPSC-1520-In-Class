/* main.js
    This is a comment block, enclosed in a slash + asterisk
    and ending with an asterisk + slash
*/

// Demo of calling a function - console is the javascript editor environment in the browser
// console.log(message) displays the message in the console tab of the browser
console.log('main.js is loaded');

// The updateInnerHTML function has two parameters:
// - parameter list - is a comma-separated list of variable names
// - selector - is a string that identifies which DOM element to selector
// - newValue - is a string that will be the new value for the selectors .innerHTML
function updateInnerHTML(selector, newValue) {
  document.querySelector(selector).innerHTML = newValue;
}

function strong(value) {
    // combining strings to produce a new string is called concetenation
    return '<strong>' + value + '</strong>';
}

function italics(value) {
    return '<i>' + value + '</i>';
}

var italicText = document.querySelector('span.note');
italicText.innerHTML = italics(italicText.innerHTML);


