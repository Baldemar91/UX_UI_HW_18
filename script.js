
$(document).ready(function() {
    $(".workbutton").click(function() {
        $("html, body").animate({
            scrollTop: $(
              'html, body').get(0).scrollHeight
        }, 2000);
    });
});