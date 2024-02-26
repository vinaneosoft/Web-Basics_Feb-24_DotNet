class AnimalImage {
    constructor(imageSrc, imageName, imageAlt) {
        this.imageSrc = imageSrc;
        this.imageName = imageName;
        this.imageAlt = imageAlt;
    }
}

let images = [
    new AnimalImage('images/Rabbit.jpg', 'Rabbit', 'Rabbit Image'),
    new AnimalImage('images/..rose 3.jpg', 'Red Rose', 'Rose Image'),
    new AnimalImage('images/rose.jpg', 'Red Rose', 'Rose Image'),
    new AnimalImage('images/Tiger.jpg', 'Tiger', 'Tiger Image'),
    new AnimalImage('images/..Wolf.jpg', 'Wolf Image', 'Wolf Image'),

];

let count = 0;


function changeImage() {
    const imageElement = document.getElementById('image');
    const captionElement = document.getElementById('caption');

    imageElement.src = images[count].imageSrc;
    imageElement.alt = images[count].imageAlt;
    captionElement.textContent = images[count].imageName;

    count++;
    if (count >= images.length) {
        count = 0; 
    }
}

changeImage();

setInterval(changeImage(), 2000);
