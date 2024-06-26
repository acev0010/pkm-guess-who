function flipSmallCharacter(element) {
    // Get all character-small elements
    let allSmallCharacters = document.querySelectorAll('.character-small');

    // Remove flipped class from all character-small elements
    allSmallCharacters.forEach(char => {
        char.classList.remove('flipped');
    });

    // Toggle the flipped class on the clicked character
    element.classList.toggle('flipped');
}

function flipLargeCharacter(element) {
    // Toggle the flipped class on the clicked character
    element.classList.toggle('flipped');
}

function randomizeCharacter() {
    // Get all character-small elements
    let allSmallCharacters = document.querySelectorAll('.character-small');

    // Remove flipped class from all character-small elements
    allSmallCharacters.forEach(char => {
        char.classList.remove('flipped');
    });

    // Get a random index
    let randomIndex;
    let iterations = 10; // Number of iterations before final selection
    let delay = 100; // Initial delay in milliseconds

    for (let i = 0; i <= iterations; i++) {
        setTimeout(() => {
            randomIndex = Math.floor(Math.random() * allSmallCharacters.length);

            // Remove flipped class from all character-small elements before adding it to the new one
            allSmallCharacters.forEach(char => {
                char.classList.remove('flipped');
            });

            // Add flipped class to the randomly selected character-small element
            allSmallCharacters[randomIndex].classList.add('flipped');

            // Increase delay to slow down the animation
            delay += 50;
        }, i * delay);
    }
}

function unflipAll() {
    let allLargeCharacters = document.querySelectorAll('.board#board1 .character');
    allLargeCharacters.forEach(char => {
        char.classList.remove('flipped');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleNotesButton = document.getElementById('toggleNotes');
    const notesContainer = document.querySelector('.notes-container');

    toggleNotesButton.addEventListener('click', function() {
        notesContainer.classList.toggle('open');
    });
});
