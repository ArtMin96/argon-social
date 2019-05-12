// Real time detect browser screen size
(function (window) {
    window.watchResize = function (callback) {
        var resizing;
        callback.size = 0;

        function done() {
            var curr_size = window.innerWidth;
            clearTimeout(resizing);
            resizing = null;
            // Only run on a true resize
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

// Watch browser width on resize
var browser_width = 0;
window.watchResize(function () {
    browser_width = window.innerWidth || document.body.offsetWidth;
});

// Do stuff after breakpoint
window.watchResize(function () {
    var threshold = 992;
    if (browser_width < threshold) {
        // Do stuff when window is ≥ 992px wide
        $('.message-drop-li').hide();
        $('#hide-in-mobile').hide();
        $('.notification').removeClass('show');
        $(".rm-drop-mobile").removeAttr("data-toggle");
        $(".notification a.nav-link").attr("href", "notification.html");
    } else {
        $('.message-drop-li').show();
        $('#hide-in-mobile').show();
        $('.notification').addClass('show');
        $(".rm-drop-mobile").attr("data-toggle", "dropdown");
    }
});

// Create dropdown and tooltip together
$('.drop-w-tooltip').tooltip();

// Chatbox

// Minimize chat box
$('#minimize-chat-window').on('click', function () {
    $('#messagebody').slideToggle();
    $('#messagebody').animate({
        scrollTop: $('#messagebody').offset().top
    }, 500);
});

// Close chatbox
$('#close-chatbox').on('click', function () {
    $('.chat-popup').hide();
});

// Chat body always keep to bottom
$('#messagebody').animate({
    scrollTop: $('#messagebody').prop('scrollHeight')
});

// Send message with Enter key
$('.type-message').on("keydown", function (event) {
    var keycode = event.keyCode || event.which;
    var chat = $(".type-message").val();
    if (keycode == '13') {
        var body = '<div class="row msg_container base_sent">' +
            '<div class="col-md-10 col-xs-10 ">' +
            '<div class="messages message-reply bg-primary shadow-sm">' +
            '<p>' + chat + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
        $(".type-message").val("");
        $(body).appendTo("#messagebody");
        $("#messagebody").animate({
            scrollTop: $("#messagebody")[0].scrollHeight
        }, 'slow');
    }
});
