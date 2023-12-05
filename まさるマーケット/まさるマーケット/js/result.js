$(document).ready(function() {
    // Retrieve the search term from the query parameter
    var searchTerm = decodeURIComponent(window.location.search.replace("?q=", ""));
    // Display the search result on the result.html page
    $("#result-container").empty().append(`<h1>${searchTerm}の検索結果:</h1>`);
});
