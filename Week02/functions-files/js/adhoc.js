// 1. Create a function called wrapInBlockquote that will take in a single value and return a string that wraps the text in a HTML blockqoute tag.

// 2. Write the JavaScript code to get the element with the ID of "leadQuote" and, using the function in step 1, wrap the contents of that element in a blockqoute.


function wrapInBlockquote(value) {
    return '<blockquote>' + value + '</blockquote>';

}

var wrap = document.getElementById('leadQuote');


wrap.innerHTML = wrapInBlockquote(wrap.innerHTML)