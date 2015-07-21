function getBgColorHex(elem){
    var color = elem.css('background-color')
    var hex;
    if(color.indexOf('#')>-1){
        //for IE
        hex = color;
    } else {
        var rgb = color.match(/\d+/g);
        hex = '#'+ ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
    }
    return hex;
}

//console.info(colorCookie);

colorCurrent = getBgColorHex($('.card__header, .footer')); // current color

colorCookie = $.cookie('colorCookie');
if (colorCookie != 'undefined') {
    $('.card__header, .footer').css('background-color', colorCookie); // set random color
}

$('.footer__logo').mouseenter(function() {
    colors = ['#1a48a6','#a71b3b','#a6781a','#1ba768']; // colors to set

    colorCurrent = getBgColorHex($('.card__header, .footer')); // current color

    colorsAmt = colors.length;
    randomColor = Math.floor(Math.random() * colorsAmt);
    colorRandom = colors[randomColor]; // get random color

    $('.card__header, .footer').css({
        'background-color' : colorRandom,
        transition : 'all .5s ease-in-out'
    }); // set random color

    $.cookie('colorCookie', colorRandom);
});
