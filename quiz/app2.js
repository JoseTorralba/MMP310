// Get answer to the first button


// Get the user submit button

const q1Button = document.getElementById('qOneBtn');

// When the user clicks, read their answer
q1Button.onclick = function () {

    const answer = document.getElementById('bp').value;

    //Yes open question 2
    if (answer == "Yes") {

        document.getElementById('qTwo').style.display = "block";

    } else {
        //No open question 3
        document.getElementById('qThree').style.display = "block";

    }
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



// Question 3
// Get User Response 

const qThreeBtn = document.getElementById('qThreeBtn');
qThreeBtn.onclick = function () {

    const answer = document.getElementById('whyNot').value;
    document.body
    



}






































