$(function(){
    $('.panel-heading').click(function(){
        $(this).next().slideToggle(200);
        $(this).toggleClass('open', 200);
        return false;
    });

    $('a[href^="#"]').click(function(){
        var target = $($(this).attr('href')).offset().top;
        target -= 100; 
        $('html, body').animate({scrollTop: target}, 500);
        return false;
    });
    
    $('.pagetop').click(function(){
        $('html, body').animate({scrollTop : 0}, 500);
        return false;
    });
    $('.pagetop').hide();
    $(window).scroll(function(){
        var $topbutton = $('.pagetop');
        var scrollTop = $(this).scrollTop();
        var windowheight = $(this).height();
        if (scrollTop >= windowheight) {
            $topbutton.fadeIn(300);
        } else {
            $topbutton.hide();
        }
    });

});