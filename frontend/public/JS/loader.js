$(window).on('load', function () {
    setTimeout(function () {
        $("#loader").fadeOut("slow");
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, 1000);
});