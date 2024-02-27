class Birds{
    constructor(imageSrc, imageName, imageAlt) {
        this.imageSrc = imageSrc;
        this.imageName = imageName;
        this.imageAlt = imageAlt;
    }
}

let images = [
    new Birds('./Images/ColourfulBird.jpg','Colourful Bird', 'Bird Image'),
    new Birds('./Images/CutBird.jpg', 'Cut Bird', 'Bird Image'),
    new Birds('./Images/peacock.jpg', 'Classic Peacock', 'Peacock Image'),
    new Birds('./Images/flyingbird.jpg', 'Flying Bird', 'Bird Image'),
    new Birds('./Images/GroupofBirds.jpg', 'Group Of Birds', 'Birds Image'),
    new Birds('./Images/bird.jpg', 'Bird', 'Birdr Image')
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