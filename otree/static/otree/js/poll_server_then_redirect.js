/*
Requires an error-notice div
 */

var checkIfReady = function() {
    var args = { type: "GET", url: "{{ view.poll_url }}", complete: redirectToSequenceView};
    $.ajax(args);
}

var redirectToSequenceView = function(res, status) {
    if (status == "success") {
        var response = res.responseText;
        if (response == "1") {
            document.location.href = '{{ view.redirect_url }}';
        }
    } else{
        $(".error-notice").show();
    }
}

var SECOND = 1000;
var intervalId = window.setInterval("checkIfReady()", {{ view.poll_interval_seconds }} * SECOND);
