(function(){
  "use strict";


$(function ($) {
    preloaderInit();

    function preloaderInit() {
        showPreloader();
        $(window).load(function() {
            hidePreloader();
        });
    }

    function showPreloader() {
        $('#ajax-content').css('opacity', '0');
        $('.sub-nav-wrap').hide();
        $('body').addClass('preloader-running');
    }

    function hidePreloader() {
        $("#status").fadeOut();
        $("#preloader").delay(1000).fadeOut(1000);
        $('body').removeClass('preloader-running');
        $('body').addClass('preloader-done');
        $("#ajax-content").delay(1000).css('opacity', '1');
    }

});

})();
