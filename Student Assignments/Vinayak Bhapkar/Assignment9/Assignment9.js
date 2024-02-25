class AnimalImage {
    constructor(imageSrc, imageName, imageAlt) {
        this.imageSrc = imageSrc;
        this.imageName = imageName;
        this.imageAlt = imageAlt;
    }
}

let images = [
    new AnimalImage('./images/dog.jpg', 'Baby Dogs', 'Dogs Image'),
    new AnimalImage('./images/lion.jpg', 'Lion the King', 'Lion Image'),
    new AnimalImage('./images/peacock.jpg', 'Classic Peacock', 'Peacock Image'),
    new AnimalImage('./images/penguin.jpg', 'Water Lover Penguin', 'Penguin Image'),
    new AnimalImage('./images/tiger.jpg', 'Tiger the Roar', 'Tiger Image'),
    new AnimalImage('./images/tiger.jp', 'Tiger the Roar', 'Tiger Image')
];

let index = 0;


function changeImage() {
    const imageElement = document.getElementById('image');
    const captionElement = document.getElementById('caption');

    imageElement.src = images[index].imageSrc;
    imageElement.alt = images[index].imageAlt;
    captionElement.textContent = images[index].imageName;

    index++;
    if (index >= images.length) {
        index = 0; 
    }
}

changeImage();

setInterval(changeImage, 3000);
