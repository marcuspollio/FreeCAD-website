/*A set of functions that make it possible to create interactive spreadsheet animations.
The animation starts when the interaction appears on the screen, continues as it scrolls upwards, and ends at the end.*/

document.addEventListener('DOMContentLoaded', function() {
    var animatedSpriteElements = document.querySelectorAll('.animated-sprite');

    animatedSpriteElements.forEach(function(animatedSpriteElement) {
        setAspectRatio(animatedSpriteElement);
        setBackgroundSize(animatedSpriteElement);

        window.addEventListener('scroll', function() {
            handleScroll(animatedSpriteElement);
        });
        handleScroll(animatedSpriteElement);
    });
});

/*This function sets the ratio for frames with different aspect ratios if there are any.*/
function setAspectRatio(element) {
    var frameWidth = parseInt(element.getAttribute('data-frame-width'), 10);
    var frameHeight = parseInt(element.getAttribute('data-frame-height'), 10);

    if (frameWidth && frameHeight) {
        var aspectRatioPercentage = (frameHeight / frameWidth) * 100;
        element.style.setProperty('--aspect-ratio', aspectRatioPercentage + '%');
    }
}

/*This function adjusts the background size according to the number of frames in the row or not according to the count of frames.*/
function setBackgroundSize(element) {
    var frameCount = parseInt(element.getAttribute('data-frame-count'), 10);
    var framesPerRow = parseInt(element.getAttribute('data-frames-per-row'), 10) || frameCount;

    var backgroundSizePercentage = framesPerRow * 100;
    element.style.backgroundSize = backgroundSizePercentage + '% auto';
}

/*This function is the function that provides animation input. Interactivity is provided by this function.*/
function handleScroll(element) {
    var frameCount = parseInt(element.getAttribute('data-frame-count'), 10);
    var elementRect = element.getBoundingClientRect();
    var elementTopPosition = elementRect.top;
    var viewportHeight = window.innerHeight;

  /*This variable allows you to adjust the animation behavior.
  The first ratio is related to the starting location of the animation and the second ratio is related to the ending location.*/
    var scrollProgress = (elementTopPosition - viewportHeight * 0.2) / (viewportHeight * 0.5);
    scrollProgress = 1 - Math.max(0, Math.min(1, scrollProgress));
    var currentFrame = Math.floor(scrollProgress * (frameCount - 1));

    updateBackgroundPosition(element, currentFrame);
}

/*This function is the basic function that provides animation.*/
function updateBackgroundPosition(element, frame) {
    var frameCount = parseInt(element.getAttribute('data-frame-count'), 10);
    var framesPerRow = parseInt(element.getAttribute('data-frames-per-row'), 10) || frameCount;

    var backgroundPositionX = -(frame % framesPerRow) * 100;
    var backgroundPositionY = -Math.floor(frame / framesPerRow) * 100;

    element.style.backgroundPosition = backgroundPositionX + '% ' + backgroundPositionY + '%';
}
