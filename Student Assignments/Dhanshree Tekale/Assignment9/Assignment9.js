class AnimalImage {
    constructor(imageSrc, imageName, imageAlt) {
        this.imageSrc = imageSrc;
        this.imageName = imageName;
        this.imageAlt = imageAlt;
    }
}

let images = [
    new AnimalImage('./images/whiteflower.jfif', 'WHITEFLOWER', 'Flower Image'),
    new AnimalImage('./images/pinkflower.jfif', 'PINKFLOWER', 'Flower Image'),
    new AnimalImage('./images/yellowflower.jfif', 'YELLOWFLOWER', 'Flower Image'),
    new AnimalImage('./images/orangeflower.jfif', 'ORANGEFLOWER', 'Flower Image'),
    new AnimalImage('./images/purpleflower.jfif', 'PURPLEFLOWER', 'Flower Image'),
    new AnimalImage('./images/redflower.jfif', 'REDFLOWER', 'Flower Image')
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
