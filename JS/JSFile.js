// Define selector for selecting
// anchor links with the hash
let anchorSelector = 'a[href^="#"]';

$(anchorSelector).on('click', function (e) {

    // Prevent scrolling if the
    // hash value is blank
    e.preventDefault();

    // Get the destination to scroll to
    // using the hash property
    let destination = $(this.hash);

    // Get the position of the destination
    // using the coordinates returned by
    // offset() method and subtracting 20px
    // from it.
    let scrollPosition
        = destination.offset().top - 200;

    // Specify animation duration
    let animationDuration = 600;

    // Animate the html/body with
    // the scrollTop() method
    $('html, body').animate({
        scrollTop: scrollPosition
    }, animationDuration);
})