$('.flip').click(function(event) {
    event.preventDefault();

    linkLocation = $(this).data("page") + ".html";

    history.pushState(null, null, linkLocation);
    //$(window).load(linkLocation);
    $.ajax({
        url: linkLocation + '?ajax=1',
        success: function(html){
            $("html").html(html);
        }
    });

    window.onpopstate = function(event) {
        if (event && event.state) {
            location.reload();
        }
    };


    return false;
});

function loadPage(elem) {

}

//window.addEventListener("popstate", function() {
//    loadPage(location.pathname);
//});