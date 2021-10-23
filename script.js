// Constants - Data that does not change

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "18275115";

// Variables - Data that changes

let movieData;

// Cached element references - DOM elements

const $form = $("form");
const $input = $("input[type='text']");
const $main = $("main");

// Event listeners

$form.on("submit", handleSubmit);

// Functions

function handleSubmit(evt) {
    evt.preventDefault(); // this turns off the default page refresh behavior in the browser
    // grab the movie title we're submitting in the form
    const movieTitle = $input.val();
    // use that data to request a specific movie
    
    // Using jQuery's $.ajax() method
    // We use it to request information from a resource using AJAX
    // This method when called returns a JavaScript promise object

    // inspecting our JS Promise
    // console.log(promise);

    // the .then() method is how we assign intructions to
    // the promise object so we can tell it what to do
    // when the promise is fulfilled
    $.ajax(`${BASE_URL}?apikey=${API_KEY}&t=${movieTitle}`)
    .then(function(data) {
        // success callback function
        movieData = data;
        render();
    }, function(error) {
        // failure callback function
        console.log("promise failed");
        console.log(error);
    });
};


function render() {
    $main.html(`
        <img src="${movieData.Poster}" alt="${movieData.Title}" />
        <h3>Title</h3>
        <p id="title">${movieData.Title}</p>
        <p>Year</p>
        <p id="year">${movieData.Year}</p>
        <p>Rating</p>
        <p id="rated">${movieData.Rated}</p>
    `);
}
