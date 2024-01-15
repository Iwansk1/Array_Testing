function filterImages(category) {
    const imageContainers = document.querySelectorAll('.gallery_images');

    imageContainers.forEach(container => {
        if (container.classList.contains(category)) {
            container.style.display = 'flex';
            container.style.opacity = '1';
            enableImages(container);
        } else {
            container.style.display = 'none';
            container.style.opacity = '0';
            disableImages(container);
        }
    });
}

function enableImages(container) {
    const images = container.querySelectorAll('img');
    images.forEach(image => {
        image.removeAttribute('disabled');
    });
}

function disableImages(container) {
    const images = container.querySelectorAll('img');
    images.forEach(image => {
        image.setAttribute('disabled', true);
    });
}