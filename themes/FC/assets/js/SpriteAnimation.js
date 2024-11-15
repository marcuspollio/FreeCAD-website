document.addEventListener('DOMContentLoaded', function () {
    const animatedSpriteElements = document.querySelectorAll('.animated-sprite');

    // Global variables to avoid repetition
    let viewportHeight = window.innerHeight;

    animatedSpriteElements.forEach(function (element) {
        setAspectRatio(element);
        setBackgroundSize(element);

        // Handle scrolling events
        window.addEventListener('scroll', function () {
            handleScroll(element, viewportHeight);
        });

        // Initial scroll handling
        handleScroll(element, viewportHeight);
    });
});

function setAspectRatio(element) {
    const frameWidth = parseInt(element.getAttribute('data-frame-width'), 10) || 1600;
    const frameHeight = parseInt(element.getAttribute('data-frame-height'), 10) || 900;

    if (frameWidth && frameHeight) {
        const aspectRatioPercentage = (frameHeight / frameWidth) * 100;
        element.style.setProperty('--aspect-ratio', aspectRatioPercentage + '%');
    }
}

function setBackgroundSize(element) {
    const frameCount = parseInt(element.getAttribute('data-frame-count'), 10) || 72;

    // All frames are assumed to be in a single row for simplicity
    const backgroundSizePercentage = frameCount * 100;
    element.style.backgroundSize = `${backgroundSizePercentage}% auto`;
}

function handleScroll(element, viewportHeight) {
    const frameCount = parseInt(element.getAttribute('data-frame-count'), 10) || 72;
    const elementRect = element.getBoundingClientRect();
    const elementTopPosition = elementRect.top;

    const scrollProgress = (elementTopPosition - viewportHeight * 0.2) / (viewportHeight * 0.5);
    const normalizedProgress = 1 - Math.max(0, Math.min(1, scrollProgress));
    const currentFrame = Math.floor(normalizedProgress * (frameCount - 1));

    updateBackgroundPosition(element, currentFrame);
}

function updateBackgroundPosition(element, frame) {
    const frameCount = parseInt(element.getAttribute('data-frame-count'), 10) || 72;

    // Single row assumed for all frames
    const backgroundPositionX = -(frame % frameCount) * 100;
    element.style.backgroundPosition = `${backgroundPositionX}% 0%`;
}
