const melodyArray = [
    ['D4', 'E4', 'G4', 'E4', 'B4', 'B4', 'A4'],   // Jazz Melody
    ['D4', 'E4', 'G4', 'E4', 'A4', 'A4', 'G4'],   // Minor 7th chord
    ['E4', 'F#4', 'G4', 'G4', 'A4', 'F#4', 'F#4'],   // Dominant 7th chord
    ['F4', 'A4', 'C5', 'E5'],   // Minor 7th chord
    ['G4', 'B4', 'D5', 'F5'],   // Dominant 7th chord
    ['A4', 'C#5', 'E5', 'G#5'], // Dominant 7th chord
    ['B4', 'D#5', 'F#5', 'A#5'],// Dominant 7th chord
    ['C#4', 'E#4', 'G#4', 'B#4'],// Major 7th chord
    ['D#4', 'F#4', 'A#4', 'C#5'],// Dominant 7th chord
    ['F#4', 'A#4', 'C#5', 'E#5'],// Dominant 7th chord
    ['G#4', 'B#4', 'D#5', 'F#5'],// Dominant 7th chord
    ['A#4', 'C#5', 'E#5', 'G#5'],// Major 7th chord
    ['C5', 'E5', 'G5', 'B5'],   // Dominant 7th chord
    ['D5', 'F5', 'A5', 'C6'],   // Minor 7th chord
    ['E5', 'G5', 'B5', 'D6'],   // Dominant 7th chord
    ['F5', 'A5', 'C6', 'E6'],   // Dominant 7th chord
];

const synth = new Tone.Synth().toDestination();

const cells = document.querySelectorAll('.cell');
let melodyQueue = []; // Queue to store the clicked cells

// Add event listeners to each cell
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        toggleCellActiveState(cell);
        addToMelodyQueue(index);
    });
});

// Toggle the active state of a cell
function toggleCellActiveState(cell) {
    cell.classList.toggle('active');
}

// Add cell index to the melody queue
function addToMelodyQueue(index) {
    melodyQueue.push(index);
    if (melodyQueue.length === 1) {
        playNextMelody();
    }
}

// Play the next melody in the queue
function playNextMelody() {
    const index = melodyQueue[0];
    const cell = cells[index];
    const melody = melodyArray[index];

    // Play the notes in the melody
    melody.forEach((note, i) => {
        if (note) {
            const time = Tone.now() + i * 0.25;
            synth.triggerAttackRelease(note, '8n', time);
        }
    });

    // Clear the active state of the cell after the melody duration
    setTimeout(() => {
        cell.classList.remove('active');
        melodyQueue.shift(); // Remove the finished melody from the queue
        if (melodyQueue.length > 0) {
            playNextMelody(); // Play the next melody in the queue
        }
    }, melody.length * 0.25 * 1000); // Delay the clearing of active state based on the melody duration
}
