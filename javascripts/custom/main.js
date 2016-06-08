(function(){
  "use strict";


$(function ($) {

    function preloaderInit() {
        showPreloader();
        $(window).load(function() {
            hidePreloader();
        });
    }

});

})();
