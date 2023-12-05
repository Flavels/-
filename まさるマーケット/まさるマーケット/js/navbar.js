$("#searching").on('click', function() {
    var searchTerm = $("#search-items").val();

    // Check if the search term is not empty
    if (searchTerm.trim() !== "") {
        // Redirect to the search result page with the search term as a query parameter
        window.location.href = '../products/result.html?q=' + encodeURIComponent(searchTerm);
    } else {
        // Display a message or handle the case when the search term is empty
        alert("Please enter a search term.");
    }
});