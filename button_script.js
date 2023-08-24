const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submitButton");
const output = document.getElementById("output");

submitButton.addEventListener("click", function() {
    const enteredNumber = numberInput.value;
    output.textContent = "You entered: " + enteredNumber;
});
