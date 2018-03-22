const images = [
    'img/dog.jpg',
    'img/cat.jpeg',
    'img/bird.jpg',
    'img/lizard.jpg'
];

const captions = [
    'Dog',
    'Cat',
    'Bird',
    'Lizard'
];


const container = document.getElementById("container");


for (let i = 0; i < images.length; i++) {

    const imgContainer = document.createElement('div');

    const img = new Image();
    img.src = images[i];
    img.id = "img"+i;
    img.classList.add("slide");
    document.body.appendChild(img);


    const caption = document.createElement('p');
    caption.classList.add("caption");
    caption.textContent = captions[i];
    document.body.appendChild(caption);

    container.appendChild(imgContainer);

}














































