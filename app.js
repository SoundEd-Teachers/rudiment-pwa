// --- 1. DATA MODEL ---
const categories = {
  roll: { name: 'Roll', color: 'var(--cat-roll)' },
  diddle: { name: 'Paradiddle', color: 'var(--cat-diddle)' },
  flam: { name: 'Flam', color: 'var(--cat-flam)' },
  drag: { name: 'Drag', color: 'var(--cat-drag)' },
  hybrid: { name: 'Hybrid', color: 'var(--cat-hybrid)' }
};

const exerciseCategories = {
  tap_control: { name: "Tap Control", color: "#E65100" },     // Orange
  diddle: { name: "Diddle", color: "#00C853" },               // Green
  stick_control: { name: "Stick Control", color: "#1565C0" }, // Blue
  rudiment_combo: { name: "Rudiment/Combo", color: "#FBC02D" } // Gold
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
  // Level 0: Rookie Packet
  { id: "l0_1", name: "Tap Control 8:7:6", level: 0, cat: "stick_control", pages: 1 },
  { id: "l0_2", name: "Diddle Master", level: 0, cat: "diddle", pages: 1 },
  { id: "l0_3", name: "sTICK cHECK", level: 0, cat: "stick_control", pages: 1 },
  { id: "l0_4", name: "Paradiddle Study", level: 0, cat: "rudiment_combo", pages: 2 },
  { id: "l0_5", name: "Rubank Rhythms", level: 0, cat: "stick_control", pages: 1 },

  // Level 1
  { id: "l1_1", name: "Accent Tap", level: 1, cat: "tap_control", pages: 1 },
  { id: "l1_2", name: "Diddle Grid #1", level: 1, cat: "diddle", pages: 1 },
  { id: "l1_3", name: "Stick Control", level: 1, cat: "stick_control", pages: 1 },
  { id: "l1_4", name: "Flintstones", level: 1, cat: "tap_control", pages: 3 },
  { id: "l1_5", name: "6/8 Subdivision", level: 1, cat: "diddle", pages: 1 },
  { id: "l1_6", name: "Stick Control 2.0", level: 1, cat: "stick_control", pages: 1 },

  // Level 2
  { id: "l2_1", name: "Bananas of Pain", level: 2, cat: "tap_control", pages: 1 },
  { id: "l2_2", name: "DaDa Diddles", level: 2, cat: "diddle", pages: 1 },
  { id: "l2_3", name: "Satalite", level: 2, cat: "rudiment_combo", pages: 1 },
  { id: "l2_4", name: "Accent #2", level: 2, cat: "tap_control", pages: 1 },
  { id: "l2_5", name: "Diddle #3", level: 2, cat: "diddle", pages: 1 },
  { id: "l2_6", name: "Flam Rud. Breakdown", level: 2, cat: "rudiment_combo", pages: 3 },

  // Level 3
  { id: "l3_1", name: "Accented Singles", level: 3, cat: "tap_control", pages: 2 },
  { id: "l3_2", name: "SVC 234", level: 3, cat: "diddle", pages: 1 },
  { id: "l3_3", name: "Cha-Fa-Diddles", level: 3, cat: "rudiment_combo", pages: 1 },
  { id: "l3_4", name: "Hicken Accent/Tap", level: 3, cat: "tap_control", pages: 1 },
  { id: "l3_5", name: "Hicken Rolls", level: 3, cat: "diddle", pages: 1 },
  { id: "l3_6", name: "12/8 Groove", level: 3, cat: "rudiment_combo", pages: 1 },

  // Level 4
  { id: "l4_1", name: "Hicken Campin'", level: 4, cat: "tap_control", pages: 1 },
  { id: "l4_2", name: "Dub/Huk", level: 4, cat: "diddle", pages: 1 },
  { id: "l4_3", name: "Hicken Double Tripple", level: 4, cat: "rudiment_combo", pages: 1 },
  { id: "l4_4", name: "Slurred Ruff", level: 4, cat: "rudiment_combo", pages: 1 },
  { id: "l4_5", name: "Diddle Me Timbers", level: 4, cat: "diddle", pages: 1 },
  { id: "l4_6", name: "6 Flam Exercises", level: 4, cat: "rudiment_combo", pages: 2 },

  // Level 5
  { id: "l5_1", name: "Timing Exercises", level: 5, cat: "stick_control", pages: 1 },
  { id: "l5_2", name: "Seven 8 & 25", level: 5, cat: "diddle", pages: 1 },
  { id: "l5_3", name: "See Spot Flam", level: 5, cat: "rudiment_combo", pages: 1 },
  { id: "l5_4", name: "Ratama-Who?", level: 5, cat: "rudiment_combo", pages: 1 },
  { id: "l5_5", name: "Double Tap", level: 5, cat: "diddle", pages: 1 },
  { id: "l5_6", name: "Kicked in the Grace", level: 5, cat: "rudiment_combo", pages: 1 }
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
let currentMode = 'rudiments'; 
const navRudiments = document.getElementById('nav-rudiments');
const navExercises = document.getElementById('nav-exercises');

const grid = document.getElementById('rudiment-grid');
const levelBtns = document.querySelectorAll('.filter-btn');
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

navRudiments.addEventListener('click', () => {
  currentMode = 'rudiments';
  navRudiments.classList.add('active');
  navExercises.classList.remove('active');
  // Re-render the grid using whatever level filter is currently selected
  const activeLevel = document.querySelector('.filter-btn.active').dataset.level;
  renderGrid(activeLevel); 
});

navExercises.addEventListener('click', () => {
  currentMode = 'exercises';
  navExercises.classList.add('active');
  navRudiments.classList.remove('active');
  const activeLevel = document.querySelector('.filter-btn.active').dataset.level;
  renderGrid(activeLevel);
});

function renderGrid(level = 'all') {
  grid.innerHTML = '';
  
  // Choose the correct database and colors based on the current mode
  const dataSource = currentMode === 'rudiments' ? rudiments : exercises;
  const catSource = currentMode === 'rudiments' ? categories : exerciseCategories;
  
  const filtered = level === 'all' ? dataSource : dataSource.filter(item => item.level == level);
  
  filtered.forEach(item => {
    const catData = catSource[item.cat];
    const card = document.createElement('div');
    card.className = 'rudiment-card';
    card.style.borderLeftColor = catData.color;
    
    let titleText = '';
    if (currentMode === 'rudiments') {
      const assignmentNum = ((item.id - 1) % 8) + 1;
      titleText = level === 'all' ? `${item.id}. ${item.name}` : `#${assignmentNum} - ${item.name}`;
    } else {
      // For exercises, we extract the assignment number from the ID (e.g., "l1_4" -> "4")
      const exNum = item.id.split('_')[1];
      titleText = level === 'all' ? item.name : `#${exNum} - ${item.name}`;
    }

    card.innerHTML = `
      <h3>${titleText}</h3>
      <span class="badge" style="color: ${catData.color}">${catData.name}</span>
    `;
    card.addEventListener('click', () => openPracticeModal(item));
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

function openPracticeModal(item) {
  currentRudimentId = item.id;
  
  // 1. Get correct category colors based on the active mode
  const catData = currentMode === 'rudiments' ? categories[item.cat] : exerciseCategories[item.cat];
  
  modalTitle.textContent = item.name;
  modalCat.textContent = catData.name;
  modalCat.style.color = catData.color;
  
  const panelBase = document.getElementById('panel-base');
  const panelApp = document.getElementById('panel-app');
  panelBase.innerHTML = ''; 
  panelApp.innerHTML = '';
  
  const toggleGroup = document.querySelector('.toggle-group');
  const toggleBtns = toggleGroup.querySelectorAll('.toggle-btn');
  
  // 2. Logic for Rudiments
  if (currentMode === 'rudiments') {
    toggleGroup.style.display = 'flex';
    toggleBtns[0].textContent = "Rudiment";
    toggleBtns[1].textContent = "Application";
    toggleBtns[1].style.display = 'block';
    
    let baseImages = [`rud_${item.id}.png`];
    let appImages = [`rud_${item.id}a.png`];
    
    if (variantMap[item.id]) {
      baseImages = variantMap[item.id].base;
      appImages = variantMap[item.id].app;
    }
    
    baseImages.forEach(imgName => {
      const img = document.createElement('img');
      img.src = `assets/images/${imgName}`;
      img.onerror = () => { img.style.display = 'none'; };
      panelBase.appendChild(img);
    });
    
    appImages.forEach(imgName => {
      const img = document.createElement('img');
      img.src = `assets/images/${imgName}`;
      img.onerror = () => { img.style.display = 'none'; };
      panelApp.appendChild(img);
    });
  } 
  // 3. Logic for Exercises
  else {
    const pages = item.pages || 1;
    
    // Dynamically convert ID "l1_4" into "level1_4" to match your files
    const fileId = item.id.replace('l', 'level'); 
    
    // Helper function to handle .png vs .PNG case-sensitivity
    function injectExerciseImage(suffix, targetPanel) {
      const img = document.createElement('img');
      const basePath = `assets/images/ex_${fileId}${suffix}`;
      img.src = `${basePath}.png`; // Try lowercase first
      
      img.onerror = function() {
        if (this.src.endsWith('.png')) {
          this.src = `${basePath}.PNG`; // If lowercase fails, try uppercase
        } else {
          this.style.display = 'none';
        }
      };
      targetPanel.appendChild(img);
    }

    if (pages === 1) {
      // Single page
      toggleGroup.style.display = 'none';
      injectExerciseImage('', panelBase);
    } else {
      // Multi-page
      toggleGroup.style.display = 'flex';
      toggleBtns[0].textContent = "Page 1";
      toggleBtns[1].textContent = "Page 2+";
      toggleBtns[1].style.display = 'block';
      
      injectExerciseImage('a', panelBase);
      injectExerciseImage('b', panelApp);
      
      if (pages > 2) {
        injectExerciseImage('c', panelApp);
      }
    }
  }

  const savedPB = localStorage.getItem(`pb_rudiment_${item.id}`);
  pbInput.value = savedPB ? savedPB : '';
  
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
