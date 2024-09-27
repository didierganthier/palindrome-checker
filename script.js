document.getElementById("check-btn").addEventListener("click", function() {
    const textInput = document.getElementById("text-input").value.trim();
    const result = document.getElementById("result");

    if (!textInput) {
        alert("Please input a value");
        return;
    }

    const cleanedInput = textInput
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // Removing non-alphanumeric characters

    const isPalindrome = cleanedInput === cleanedInput.split("").reverse().join("");

    // Clear previous result classes
    result.classList.remove("is-palindrome", "is-not-palindrome");

    if (isPalindrome) {
        alert(`${textInput} is a palindrome`)
        result.textContent = `${textInput} is a palindrome`;
        result.classList.add("is-palindrome"); // Apply success styling
    } else {
        alert(`${textInput} is not a palindrome`)
        result.textContent = `${textInput} is not a palindrome`;
        result.classList.add("is-not-palindrome"); // Apply failure styling
    }
});