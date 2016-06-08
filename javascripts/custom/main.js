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

});

})();
