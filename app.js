// --- 1. DATA MODEL ---
const categories = {
  roll: { name: 'Roll', color: 'var(--cat-roll)' },
  diddle: { name: 'Paradiddle', color: 'var(--cat-diddle)' },
  flam: { name: 'Flam', color: 'var(--cat-flam)' },
  drag: { name: 'Drag', color: 'var(--cat-drag)' },
  hybrid: { name: 'Hybrid', color: 'var(--cat-hybrid)' }
};

const rudiments = [
  // Level 1
  { id: 1, level: 1, name: 'Single Stroke Roll', cat: 'roll' },
  { id: 2, level: 1, name: 'Single Stroke Four', cat: 'roll' },
  { id: 3, level: 1, name: 'Single Paradiddle', cat: 'diddle' },
  { id: 4, level: 1, name: 'Multiple Bounce Roll', cat: 'roll' },
  { id: 5, level: 1, name: 'Double Paradiddle', cat: 'diddle' },
  { id: 6, level: 1, name: 'Flam', cat: 'flam' },
  { id: 7, level: 1, name: 'Flam Tap', cat: 'flam' },
  { id: 8, level: 1, name: 'Ruff / Drag', cat: 'drag' },
  // Level 2
  { id: 9, level: 2, name: 'Five Stroke Roll', cat: 'roll' },
  { id: 10, level: 2, name: 'Double Stroke Roll', cat: 'roll' },
  { id: 11, level: 2, name: 'Single Stroke Seven', cat: 'roll' },
  { id: 12, level: 2, name: 'Paradiddle-Diddle', cat: 'diddle' },
  { id: 13, level: 2, name: 'Flam Accent', cat: 'flam' },
  { id: 14, level: 2, name: 'Swiss Army Triplet', cat: 'flam' },
  { id: 15, level: 2, name: 'Flamacue', cat: 'flam' },
  { id: 16, level: 2, name: 'Nine Stroke Roll', cat: 'roll' },
  // Level 3
  { id: 17, level: 3, name: '13 Stroke Roll', cat: 'roll' },
  { id: 18, level: 3, name: '17 Stroke Roll', cat: 'roll' },
  { id: 19, level: 3, name: 'Lesson 25', cat: 'drag' },
  { id: 20, level: 3, name: 'Dragadiddle', cat: 'drag' },
  { id: 21, level: 3, name: 'Triple Paradiddle', cat: 'diddle' },
  { id: 22, level: 3, name: 'Seven Stroke Roll', cat: 'roll' },
  { id: 23, level: 3, name: 'Six Stroke Roll', cat: 'roll' },
  { id: 24, level: 3, name: '15 Stroke Roll', cat: 'roll' },
  // Level 4
  { id: 25, level: 4, name: 'Flam Paradiddle', cat: 'flam' },
  { id: 26, level: 4, name: 'Flammed Mill', cat: 'flam' },
  { id: 27, level: 4, name: 'Pata-fla-fla', cat: 'flam' },
  { id: 28, level: 4, name: 'Single Drag Tap', cat: 'drag' },
  { id: 29, level: 4, name: 'Double Drag Tap', cat: 'drag' },
  { id: 30, level: 4, name: 'Single Ratamacue', cat: 'drag' },
  { id: 31, level: 4, name: 'Triple Stroke Roll', cat: 'roll' },
  { id: 32, level: 4, name: 'Ten Stroke Roll', cat: 'roll' },
  // Level 5
  { id: 33, level: 5, name: '11 Stroke Roll', cat: 'roll' },
  { id: 34, level: 5, name: 'Inverted Flam Tap', cat: 'flam' },
  { id: 35, level: 5, name: 'Flam Drag', cat: 'flam' },
  { id: 36, level: 5, name: 'Flam Paradiddle-Diddle', cat: 'flam' },
  { id: 37, level: 5, name: 'Drag Paradiddle #1', cat: 'drag' },
  { id: 38, level: 5, name: 'Drag Paradiddle #2', cat: 'drag' },
  { id: 39, level: 5, name: 'Double Ratamacue', cat: 'drag' },
  { id: 40, level: 5, name: 'Triple Ratamacue', cat: 'drag' },
  // Level 6 (Hybrids)
  { id: 41, name: "Cheese", level: 6, cat: "hybrid" },
  { id: 42, name: "Egg Beaters", level: 6, cat: "hybrid" },
  { id: 43, name: "Book Report", level: 6, cat: "hybrid" },
  { id: 44, name: "Flam Five", level: 6, cat: "hybrid" },
  { id: 45, name: "Choo Choo", level: 6, cat: "hybrid" },
  { id: 46, name: "Grandmas", level: 6, cat: "hybrid" },
  { id: 47, name: "Chut Cheese", level: 6, cat: "hybrid" },
  { id: 48, name: "Inverted Inverts", level: 6, cat: "hybrid" }
];

const exercises = [
  { id: "l1_1", name: "Accent Tap", level: 1, cat: "accent_tap", pages: 1 },
  // ...
  { id: "l1_4", name: "The Witch is Dead!", level: 1, cat: "solo", pages: 2 } 
];

// Map special cases where rudiments have duple (d) and triple (t) variants
const variantMap = {
  // Rudiment 22 only has a base, but two applications
  22: { base: ['rud_22.png'], app: ['rud_22ad.png', 'rud_22at.png'] },
  // Rudiment 28 has duple and triple for both base and app
  28: { base: ['rud_28d.png', 'rud_28t.png'], app: ['rud_28ad.png', 'rud_28at.png'] }
  // You can add more here if you have others (e.g., 29, 30) using the same format!
};

// --- 2. UI INITIALIZATION & NAVIGATION ---
const grid = document.getElementById('rudiment-grid');
const levelBtns = document.querySelectorAll('.filter-btn');
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

function renderGrid(level = 'all') {
  grid.innerHTML = '';
  const filtered = level === 'all' ? rudiments : rudiments.filter(r => r.level == level);
  
  filtered.forEach(rudiment => {
    const catData = categories[rudiment.cat];
    const card = document.createElement('div');
    card.className = 'rudiment-card';
    card.style.borderLeftColor = catData.color;
    
    // Calculate the Assignment Number (1 through 8) based on its absolute ID
    const assignmentNum = ((rudiment.id - 1) % 8) + 1;

    // If viewing 'All', show absolute ID. If viewing a specific level, show Assignment #
    const titleText = level === 'all' 
      ? `${rudiment.id}. ${rudiment.name}` 
      : `#${assignmentNum} - ${rudiment.name}`;

    card.innerHTML = `
      <h3>${titleText}</h3>
      <span class="badge" style="color: ${catData.color}">${catData.name}</span>
    `;
    card.addEventListener('click', () => openPracticeModal(rudiment));
    grid.appendChild(card);
  });
}

levelBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    levelBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderGrid(e.target.dataset.level);
  });
});

navItems.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const targetId = e.currentTarget.dataset.target;
    navItems.forEach(b => b.classList.remove('active'));
    views.forEach(v => v.classList.remove('active', 'hidden'));
    
    e.currentTarget.classList.add('active');
    views.forEach(v => {
      if(v.id === targetId) v.classList.add('active');
      else v.classList.add('hidden');
    });
  });
});

// --- 3. PRACTICE MODAL & LOCAL STORAGE ---
const modal = document.getElementById('practice-modal');
const modalTitle = document.getElementById('modal-title');
const modalCat = document.getElementById('modal-category');
const imgBase = document.getElementById('img-base');
const imgApp = document.getElementById('img-app');
const pbInput = document.getElementById('pb-input');
const savePbBtn = document.getElementById('save-pb-btn');
let currentRudimentId = null;

function openPracticeModal(rudiment) {
  currentRudimentId = rudiment.id;
  const catData = categories[rudiment.cat];
  
  modalTitle.textContent = rudiment.name;
  modalCat.textContent = catData.name;
  modalCat.style.color = catData.color;
  
  const panelBase = document.getElementById('panel-base');
  const panelApp = document.getElementById('panel-app');
  panelBase.innerHTML = ''; // Clear previous images
  panelApp.innerHTML = '';

  // 1. Determine which filenames to look for
  let baseImages = [`rud_${rudiment.id}.png`];
  let appImages = [`rud_${rudiment.id}a.png`];

  // If this rudiment is in our special map, override with the duple/triple files
  if (variantMap[rudiment.id]) {
    baseImages = variantMap[rudiment.id].base;
    appImages = variantMap[rudiment.id].app;
  }

  // 2. Inject Base Images
  baseImages.forEach(imgName => {
    const img = document.createElement('img');
    img.src = `assets/images/${imgName}`;
    // If an image is missing, hide it cleanly
    img.onerror = () => { img.style.display = 'none'; };
    panelBase.appendChild(img);
  });

  // 3. Inject Application Images
  appImages.forEach(imgName => {
    const img = document.createElement('img');
    img.src = `assets/images/${imgName}`;
    img.onerror = () => { img.style.display = 'none'; };
    panelApp.appendChild(img);
  });

  // Load Personal Best
  const savedPB = localStorage.getItem(`pb_rudiment_${rudiment.id}`);
  pbInput.value = savedPB ? savedPB : '';
  
  // Reset Swipe
  setPanel('base');
  
  modal.classList.remove('hidden');
}

document.getElementById('close-modal-btn').addEventListener('click', () => {
  modal.classList.add('hidden');
  stopMetronome();
});

savePbBtn.addEventListener('click', () => {
  if(pbInput.value) {
    localStorage.setItem(`pb_rudiment_${currentRudimentId}`, pbInput.value);
    savePbBtn.textContent = "Saved!";
    setTimeout(() => savePbBtn.textContent = "Save", 2000);
  }
});

// --- 4. SWIPE LOGIC ---
const swipeTrack = document.getElementById('swipe-track');
const swipeContainer = document.getElementById('swipe-container');
const toggleBtns = document.querySelectorAll('.toggle-btn');
let startX = 0;
let isSwiping = false;

function setPanel(panel) {
  if(panel === 'base') {
    swipeTrack.style.transform = 'translateX(0%)';
    toggleBtns[0].classList.add('active');
    toggleBtns[1].classList.remove('active');
  } else {
    swipeTrack.style.transform = 'translateX(-50%)';
    toggleBtns[1].classList.add('active');
    toggleBtns[0].classList.remove('active');
  }
}

toggleBtns.forEach(btn => {
  btn.addEventListener('click', (e) => setPanel(e.target.dataset.panel));
});

swipeContainer.addEventListener('touchstart', e => {
  startX = e.changedTouches[0].screenX;
  isSwiping = true;
}, {passive: true});

swipeContainer.addEventListener('touchend', e => {
  if(!isSwiping) return;
  const endX = e.changedTouches[0].screenX;
  const diff = startX - endX;
  if(diff > 50) setPanel('app'); // Swiped left
  if(diff < -50) setPanel('base'); // Swiped right
  isSwiping = false;
}, {passive: true});

swipeContainer.addEventListener('click', () => {
  modal.classList.toggle('immersive');
});

// --- 5. WEB AUDIO METRONOME ---
const bpmDisplay = document.getElementById('bpm-display');
const bpmSlider = document.getElementById('bpm-slider');
const playBtn = document.getElementById('play-metronome-btn');
const visualFlash = document.getElementById('visual-flash');

let audioContext = null;
let isPlaying = false;
let nextNoteTime = 0;
let current16thNote = 0;
let timerID = null;
let tempo = 120;

function nextNote() {
  const secondsPerBeat = 60.0 / tempo;
  nextNoteTime += secondsPerBeat;
}

function scheduleNote(time) {
  // Flash UI
  setTimeout(() => {
    visualFlash.classList.add('flash');
    setTimeout(() => visualFlash.classList.remove('flash'), 50);
  }, (time - audioContext.currentTime) * 1000);

  // Synthesize Click
  const osc = audioContext.createOscillator();
  const envelope = audioContext.createGain();
  osc.connect(envelope);
  envelope.connect(audioContext.destination);
  
  osc.frequency.value = 800; // Pitch
  envelope.gain.value = 1;
  envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
  
  osc.start(time);
  osc.stop(time + 0.1);
}

function scheduler() {
  while (nextNoteTime < audioContext.currentTime + 0.1) {
    scheduleNote(nextNoteTime);
    nextNote();
  }
  timerID = requestAnimationFrame(scheduler);
}

function stopMetronome() {
  isPlaying = false;
  cancelAnimationFrame(timerID);
  playBtn.innerHTML = '▶ Play Metronome';
  playBtn.style.background = 'var(--accent-color)';
}

playBtn.addEventListener('click', () => {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  if (isPlaying) {
    stopMetronome();
  } else {
    isPlaying = true;
    if (audioContext.state === 'suspended') audioContext.resume();
    nextNoteTime = audioContext.currentTime + 0.05;
    scheduler();
    playBtn.innerHTML = '⏸ Stop';
    playBtn.style.background = '#d32f2f';
  }
});

function updateTempo(val) {
  tempo = Math.min(Math.max(val, 40), 220);
  bpmDisplay.textContent = tempo;
  bpmSlider.value = tempo;
}

bpmSlider.addEventListener('input', e => updateTempo(e.target.value));
document.getElementById('bpm-down').addEventListener('click', () => updateTempo(tempo - 1));
document.getElementById('bpm-up').addEventListener('click', () => updateTempo(tempo + 1));

// Initialize App
renderGrid();
