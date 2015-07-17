$('.flip').on('click', function(e){
    e.preventDefault();
    var href = $(this).data("page") + ".html";

    getContent(href, true);

});



window.addEventListener("popstate", function(e) {

    // Get State value using e.state
    getContent(location.pathname, false);
});

function getContent(url, addEntry) {
    $.get(url)
        .done(function( data ) {

            // Updating Content on Page
            $('html').html(data);

            if(addEntry == true) {
                // Add History Entry using pushState
                history.pushState(null, null, url);
            }

        });
}
