function preloaderInit() {
    showPreloader();
    $(window).load(function() {
        hidePreloader();
    });
}