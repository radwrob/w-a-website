jQuery(function ($)
{
    //scroll reset
    $.scrollTo(0);
    
    $('#link_start').click(function () {
        $.scrollTo($('#start'), 1000);
    });
    
    $('#link_aboutus').click(function () {
        $.scrollTo($('#about-us'), 1000);
    });
    
    $('#link_offer').click(function () {
        $.scrollTo($('#offer'), 1000);
    });
    
    $('#link_career').click(function () {
        $.scrollTo($('#career'), 1000);
    });      
    
    $('#link_contact').click(function () {
        $.scrollTo($('#contact'), 1000);
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