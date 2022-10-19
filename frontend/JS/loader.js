$(window).on('load', function () {
    setTimeout(function () {
        //your code to be executed after 1 second
        $("#loader").fadeOut("slow");
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, 2000);
});