// Get answer to the first button
// Get the user submit button

const leftButton = document.getElementById('leftBtn');
const rightButton = document.getElementById('rightBtn');

const leftButton2 = document.getElementById('leftBtn2');
const rightButton2 = document.getElementById('rightBtn2');

const leftButton3 = document.getElementById('leftBtn3');
const rightButton3 = document.getElementById('rightBtn3');

// Question 1
leftButton.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('questionTwo').style.display = "block";
	document.getElementById('questionOne').style.display = "none";
};

rightButton.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('youreDead').style.display = "block";
	document.getElementById('questionOne').style.display = "none";
};



// Question 2
leftButton2.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('questionThree').style.display = "block";
	document.getElementById('questionTwo').style.display = "none";
};

rightButton2.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('youreDead').style.display = "block";
	document.getElementById('questionTwo').style.display = "none";
};



// Question 3
leftButton3.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('questionFour').style.display = "block";
	document.getElementById('questionThree').style.display = "none";
};

rightButton3.onclick = function () {

    const answer = document.getElementById('buttons').value;

    document.getElementById('youreDead').style.display = "block";
	document.getElementById('questionThree').style.display = "none";
};

















// Question 2
// Get User Response When They Click Submit

const qTwoBtn = document.getElementById('qTwoBtn');

qTwoBtn.onclick = function () {

    const answer = document.getElementById('actor').value;
    const message = document.createElement('p');
    document.body.appendChild(message);

    // If it's Correct Give Them a Correct Message
    if (answer == "Chadwick Boseman") {

        message.textContent = "Correct!";
        qTwoBtn.disabled = true;

    } else {

        message.textContent = "Wrong!";
        qTwoBtn.disabled = true;

    }
};






















































