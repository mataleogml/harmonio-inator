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

const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  const melodyGapDuration = 0.25; // Adjust the gap duration between melodies
  const noteGapDuration = 0.25; // Adjust the gap duration between notes within a melody
  
  const cells = document.querySelectorAll('.cell');
  let melodyQueue = [];
  
  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      toggleCellActiveState(cell);
      addToMelodyQueue(index);
    });
  });
  
  function toggleCellActiveState(cell) {
    cell.classList.toggle('active');
  }
  
  function addToMelodyQueue(index) {
    melodyQueue.push(index);
    if (melodyQueue.length === 1) {
      playNextMelody();
    }
  }
  
  function playNextMelody() {
    const index = melodyQueue[0];
    const cell = cells[index];
    const melody = melodyArray[index];
  
    melody.forEach((note, i) => {
      if (note) {
        const time = Tone.now() + (i * noteGapDuration);
        sampler.triggerAttackRelease(note, '8n', time);
      }
    });
  
    setTimeout(() => {
      cell.classList.remove('active');
      melodyQueue.shift();
      if (melodyQueue.length > 0) {
        setTimeout(playNextMelody, melodyGapDuration * 1000); // Introduce gap between melodies
      }
    }, melody.length * noteGapDuration * 1000);
  }