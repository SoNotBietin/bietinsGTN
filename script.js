document.addEventListener("DOMContentLoaded", function () {
    const guessInput = document.getElementById("guess");
    const checkButton = document.getElementById("checkButton");
    const resultLabel = document.getElementById("resultLabel");
    const newGameButton = document.getElementById("newGameButton");

    let random_number = Math.floor(Math.random() * 1000) + 1;
    let attempts = 0;

    function checkGuess() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 1000) {
            resultLabel.innerText = "Please enter a number between 1 and 1000.";
            return;
        }

        attempts++;

        if (guess < random_number) {
            resultLabel.innerText = "Too low! Try again.";
        } else if (guess > random_number) {
            resultLabel.innerText = "Too high! Try again.";
        } else {
            resultLabel.innerText = `Congratulations! You guessed the number ${random_number} correctly in ${attempts} attempts!`;
            guessInput.disabled = true;
            checkButton.disabled = true;
            newGameButton.style.display = "block";
        }
    }

    function startNewGame() {
        random_number = Math.floor(Math.random() * 1000) + 1;
        attempts = 0;
        resultLabel.innerText = "";
        guessInput.value = "";
        guessInput.disabled = false;
        checkButton.disabled = false;
        newGameButton.style.display = "none";
    }

    checkButton.addEventListener("click", checkGuess);
    newGameButton.addEventListener("click", startNewGame);
});
