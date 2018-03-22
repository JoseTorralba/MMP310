// Characters for Password
const alpha = "abcdefghijklmnopqrstuvwxyz";


// User clicks on button
const btn = document.getElementById('generate');
btn.onclick = generatePassword;

const message = document.getElementById('password');

const passwordLengthInput = document.getElementById('length')

// Generates Password
function generatePassword() {

    let password = "";

    let length = passwordLengthInput.value;

    for (let i = 0; i < length; i++) {
        password += alpha[Math.floor(Math.random() * alpha.length)];
    }

    message.textContent = password;


}