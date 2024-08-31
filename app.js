const flashcard = document.getElementById('flashcard');
const chordElement = document.getElementById('chord');
const scaleNameElement = document.getElementById('scale-name');
const scaleKeysElement = document.getElementById('scale-keys');

let isFlipped = false;

const flashcards = [
    { chord: "C Major 7th", scaleName: "Major Hexatonic", scaleKeys: "C - D - E - G - A - B" },
    { chord: "C Minor 7th", scaleName: "Melodic Minor Hexatonic", scaleKeys: "C - D - E♭ - F - G - B" },
    { chord: "C Dominant 7th", scaleName: "Half-Whole Diminished", scaleKeys: "C - D♭ - E♭ - E - F♯ - G - A - B♭" },
    { chord: "C Altered Dominant", scaleName: "Melodic Minor (flat 2nd)", scaleKeys: "D♭ - E♭ - F♭ - G♭ - A♭ - B♭ - C" },
    { chord: "C Half-Diminished (ø7)", scaleName: "Melodic Minor (3rd degree)", scaleKeys: "E♭ - F - G♭ - A♭ - B♭ - C - D" },
    { chord: "C Diminished 7th", scaleName: "Whole-Half Diminished", scaleKeys: "C - D - E♭ - F - G♭ - A♭ - A - B" },
    // Add more chord-scale relationships for other notes...
];

function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);
}

function randomCard() {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    const card = flashcards[randomIndex];
    chordElement.textContent = card.chord;
    scaleNameElement.textContent = card.scaleName;
    scaleKeysElement.textContent = card.scaleKeys;

    if (isFlipped) {
        flipCard(); // Reset to the front if needed
    }
}

// Attach the flipCard function to the flashcard element for click and touch events
flashcard.addEventListener('click', flipCard);
flashcard.addEventListener('touchend', flipCard); // For iOS and touch devices

// Initialize Hammer.js on the flashcard element for swipe/drag gestures
const hammer = new Hammer(flashcard);

hammer.on('swipeleft swiperight', function() {
    randomCard(); // Trigger next card on swipe
});

hammer.on('dragleft dragright', function() {
    randomCard(); // Trigger next card on drag
});
