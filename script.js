// Constants - Data that does not change



// Variables - Data that changes



// Cached elements - DOM elements



// Event listeners



// Functions


// Using jQuery's $.ajax() method
// We use it to request information from a resource using AJAX
// This method when called returns a JavaScript promise object

// const promise = $.ajax("https://www.omdbapi.com/?apikey=18275115&t=joker");

// inspecting our JS Promise
// console.log(promise);

// the .then() method is how we assign intructions to
// the promise object so we can tell it what to do
// when the promise is fulfilled
$.ajax("https://www.omdbapi.com/?apikey=18275115&t=joker")
.then(function(data) {
    // success callback function
    console.log("promise fulfilled!");
    console.log(data);
}, function(error) {
    // failure callback function
    console.log("promise failed");
    console.log(error);
});
