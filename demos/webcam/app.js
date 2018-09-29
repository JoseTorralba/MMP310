const webcam = document.getElementById('webcam');
const canvas = document.getElementById('video');
const context = canvas.getContext('2d');

// checks for user media in different browsers
navigator.getUserMedia = navigator.getUserMedia || 
navigator.webkitGetUserMedia || 
navigator.mozGetUserMedia || 
navigator.msGetUserMedia ||
navigator.oGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true},
    videoHandler, videoError);
}

//stream is encoding all the color data it gets with whatever is in front of it
function videoHandler(stream) {
    webcam.src = window.URL.createObjectURL(stream);
}

function videoError(error) {
    console.log(error); 
}


function mirrorImage() {
    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1,1); // Flips the Image
    context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
    context.restore();
}

webcam.addEventListener("loadedmetadata", 
function() {

    canvas.width = webcam.videoWidth;
    canvas.height = webcam.videoHeight;
    //canvas.addEventListener('click', mirrorImage);
    setInterval(mirrorImage, 1000 / 30);
});