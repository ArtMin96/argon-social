//$(document).ready(function () {
//    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
//    var anchors = document.querySelectorAll('link[href*="assets/css/style.css"]');
//
//    if (isMobile) {
//        Array.prototype.forEach.call(anchors, function (element, index) {
//            element.href = "assets/css/media.css";
//        });
//    }
//});

(function (window) {
    window.watchResize = function (callback) {
        var resizing;
        callback.size = 0;

        function done() {
            var curr_size = window.innerWidth;
            clearTimeout(resizing);
            resizing = null;
            // only run on a true resize
            if (callback.size != curr_size) {
                callback();
                callback.size = curr_size;
            }
        }
        window.addEventListener('resize', function () {
            if (resizing) {
                clearTimeout(resizing);
                resizing = null;
            }
            resizing = setTimeout(done, 50);
        });
        // init
        callback();
    };
}(window));

// watch browser width on resize
var browser_width = 0;
window.watchResize(function () {
    browser_width = window.innerWidth || document.body.offsetWidth;
});

// do stuff after breakpoint
window.watchResize(function () {
    var threshold = 992;
    if (browser_width < threshold) {
        // do stuff when window is ≥ 992px wide
        $('.message-drop-li').hide();
        $('.notification').removeClass('show');
        $(".rm-drop-mobile").removeAttr("data-toggle");
        $(".notification a.nav-link").attr("href", "notification.html");
    } else {
        $('.message-drop-li').show();
        $('.notification').addClass('show');
        $(".rm-drop-mobile").attr("data-toggle", "dropdown");
    }
});

$('.drop-w-tooltip').tooltip();
