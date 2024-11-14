let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');

function updateImageDisplay() {
    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

document.getElementById('prevButton').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImageDisplay();
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImageDisplay();
});

updateImageDisplay();
