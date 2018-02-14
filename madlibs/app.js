// HTML Elements References
const submitButton = document.getElementById("submit");
const exclamationInput = document.getElementById("exclamation");
const adverbInput = document.getElementById("adverb");
const nouneInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");

// Listen for Button Press
submitButton.onclick = function() {
    // Gets all of the Words to Generate Our Story
    const message = document.createElement("p");
    message.textContent = exclamationInput.value
                            + " he said "
                            + adjectiveInput.value
                            + " as he jumped into his convertible"
                            + nouneInput.value
                            + " and drove off with his "
                            + adjectiveInput.value
                            + " wife."
    document.body.appendChild(message);
};