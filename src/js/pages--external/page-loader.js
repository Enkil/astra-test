//$('.flip, .card__list-link').on('click', function(e){
//    e.preventDefault();
//    var href;
//    if ($(this).hasClass('flip')) {
//        href = $(this).data("page") + ".html";
//    } else if ($(this).hasClass('card__list-link')) {
//        href = $(this).attr('href');
//    }
//
//
//    getContent(href, true);
//
//});

$('.card__list-link').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');

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
