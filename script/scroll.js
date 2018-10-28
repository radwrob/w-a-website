jQuery(function ($)
{
    //scroll reset
    $.scrollTo(0);
    
    $('#link_start').click(function () {
        $.scrollTo($('#start'), 1000);
    });
    
    $('#link_nas').click(function () {
        $.scrollTo($('#o-nas'), 1000);
    });
    
    $('#link_oferta').click(function () {
        $.scrollTo($('#oferta'), 1000);
    });
    
    $('#link_kariera').click(function () {
        $.scrollTo($('#kariera'), 1000);
    });      
    
    $('#link_kontakt').click(function () {
        $.scrollTo($('#kontakt'), 1000);
    });    
    
    $('.scrollup').click(function () {
        $.scrollTo($('body'), 1000);
    });

    //show scrollup button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300)
            $('.scrollup').fadeIn();
        else
            $('.scrollup').fadeOut();
    }
    );
}
);