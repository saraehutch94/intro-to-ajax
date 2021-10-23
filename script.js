// Constants - Data that does not change



// Variables - Data that changes



// Cached elements - DOM elements



// Event listeners



// Functions


// Using jQuery's $.ajax() method
// We use it to request information from a resource using AJAX
// This method when called returns a JavaScript promise object

const promise = $.ajax("https://www.omdbapi.com/?apikey=18275115&t=joker");

// inspecting our JS Promise
console.log(promise);

