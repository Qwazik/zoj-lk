$(function() {
    /*-------------------------------------------------*/
    /*  form - styler
    /*-------------------------------------------------*/
    $('.select--default, [class*="checkbox"]').styler();

    /*-------------------------------------------------*/
    /*  full height
    /*-------------------------------------------------*/
    pageHeight('.page', '.max-width-login');
    $(window).resize(function(){
        pageHeight('.page', '.max-width-login');
    });
    /*-------------------------------------------------*/
    /*  other
    /*-------------------------------------------------*/
    $('.fancybox').each(function(){
        var className = $(this).attr('href').replace('#','');
        $(this).fancybox({
            wrapCSS: 'fancybox-'+className
        });
    });


    /*-------------------------------------------------*/
    /*  Заглушка 
    /*-------------------------------------------------*/
    if($('.plug').length){
        $('.plug').height($(window).outerHeight());
    }
    $(window).resize(function(){
        if($('.plug').length){
            $('.plug').height($(window).outerHeight());
        }   
    })
    


});

function equalHeight(wrap, element){
    $(wrap).each(function(){
        var maxHeight = [],
            className = element;
        $(this).find(className).each(function(){
            $(this).height('auto');
        });
        $(this).find(className).each(function(){
            maxHeight.push($(this).height());
        });
        maxHeight = Math.max.apply(null, maxHeight);
        $(this).find(className).each(function(){
            $(this).height(maxHeight);
        });
    });
}

function pageHeight(container, body){
    if($(container).length && $(body).length){
        if($(window).height() > $(container).height()){
            th = $(body).height();
            while($(container).height() < $(window).height()){
                $(body).height(th);
                th++;
            }
        }
    }
}