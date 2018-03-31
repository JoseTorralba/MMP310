var slides = [
    {
        image: "img/cat.jpg",
        caption: "Hello"
    },

    {
        image: "img/dog.jpg",
        caption: "I'm a dog!"
    },

    {
        image: "img/bird.jpg",
        caption: "Tweet"
    }
];




for (let i = 0; i < slides.length; i++) {

    var slide = slides[i];

    var slideElem = document.createElement("div");
    var image = new Image();
    var caption = document.createElement("p");

    image.src = slide.image;
    caption.textContent = slide.caption;

    slideElem.appendChild(image);
    slideElem.appendChild(caption);

    slideElem.classList.add("slide");

    document.body.appendChild(slideElem);

};