// --- DOM Elements ---
const startBtn = document.getElementById('start-counter-btn');
const levelBar = document.getElementById('audio-level-bar');
const sensSlider = document.getElementById('sensitivity-slider');
const durSlider = document.getElementById('duration-slider');
const sensVal = document.getElementById('sens-val');
const durVal = document.getElementById('dur-val');
const resetBtn = document.getElementById('reset-counter-btn');

const metricStrokes = document.getElementById('metric-strokes');
const metricTime = document.getElementById('metric-time');
const metricSps = document.getElementById('metric-sps');
const metricBpm = document.getElementById('metric-bpm');

// --- Audio & State Variables ---
let audioCtx = null;
let analyser = null;
let microphone = null;
let dataArray = null;

let isCounting = false;
let sessionDuration = 15; 
let threshold = 0.5; // Calculated from sensitivity (0.0 to 1.0)
let strokes = 0;
let startTime = 0;
let lastStrokeTime = 0;
let animationId = null;

// Lockout window to prevent double-triggering a single stroke (in milliseconds)
const LOCKOUT_MS = 60; 

// --- Setup UI Listeners ---
sensSlider.addEventListener('input', (e) => {
  sensVal.textContent = e.target.value;
  // Convert 1-100 scale to 0.1-0.95 threshold (inverted so higher sensitivity = lower threshold)
  threshold = 1.0 - (e.target.value / 100); 
});

durSlider.addEventListener('input', (e) => {
  durVal.textContent = e.target.value;
  sessionDuration = parseInt(e.target.value);
});

// --- Core Audio Processing ---
async function startSession() {
  if (isCounting) return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, autoGainControl: false, noiseSuppression: false } });
    
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    
    // Fast Fourier Transform size - smaller means faster response time
    analyser.fftSize = 512; 
    microphone = audioCtx.createMediaStreamSource(stream);
    microphone.connect(analyser);
    
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Float32Array(bufferLength);
    
    // Reset state
    strokes = 0;
    isCounting = true;
    startTime = audioCtx.currentTime;
    lastStrokeTime = 0;
    
    startBtn.textContent = "Session Running...";
    startBtn.style.backgroundColor = "#d32f2f";
    
    updateCounter();
  } catch (err) {
    console.error("Microphone access denied or error:", err);
    alert("Please allow microphone access to use the stroke counter.");
  }
}

function stopSession() {
  isCounting = false;
  cancelAnimationFrame(animationId);
  
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
  
  startBtn.textContent = "Start Session";
  startBtn.style.backgroundColor = "var(--accent-color)";
  levelBar.style.width = "0%";
}

function updateCounter() {
  if (!isCounting) return;

  const currentTime = audioCtx.currentTime;
  const elapsed = currentTime - startTime;
  const timeLeft = Math.max(0, sessionDuration - elapsed);
  
  // 1. Get raw waveform data
  analyser.getFloatTimeDomainData(dataArray);
  
  // 2. Find the peak volume in this tiny slice of time
  let maxVolume = 0;
  for (let i = 0; i < dataArray.length; i++) {
    const absValue = Math.abs(dataArray[i]);
    if (absValue > maxVolume) {
      maxVolume = absValue;
    }
  }
  
  // Update visual meter (convert to percentage)
  levelBar.style.width = `${Math.min(maxVolume * 100, 100)}%`;
  
  // 3. Detect Transient (Stroke)
  if (maxVolume > threshold) {
    // Check if we are past the lockout window
    if ((currentTime - lastStrokeTime) * 1000 > LOCKOUT_MS) {
      strokes++;
      lastStrokeTime = currentTime;
      metricStrokes.textContent = strokes;
      
      // Visual flash on the meter
      levelBar.style.backgroundColor = "var(--cat-flam)";
      setTimeout(() => levelBar.style.backgroundColor = "var(--accent-color)", 50);
    }
  }

  // 4. Update Metrics
  metricTime.textContent = timeLeft.toFixed(1);
  
  if (elapsed > 0) {
    const sps = strokes / elapsed;
    metricSps.textContent = sps.toFixed(1);
    
    // Calculate 16th Note BPM Equivalent (4 strokes per beat)
    // 60 seconds / (4 strokes) = 15. So BPM = SPS * 15
    const bpm = Math.round(sps * 15);
    metricBpm.textContent = bpm;
  }

  // 5. Loop or End
  if (timeLeft > 0) {
    animationId = requestAnimationFrame(updateCounter);
  } else {
    stopSession();
  }
}

startBtn.addEventListener('click', () => {
  if (isCounting) stopSession();
  else startSession();
});

function resetCounter() {
  if (isCounting) stopSession();
  strokes = 0;
  metricStrokes.textContent = "0";
  metricTime.textContent = sessionDuration.toFixed(1);
  metricSps.textContent = "0.0";
  metricBpm.textContent = "0";
  levelBar.style.width = "0%";
}

resetBtn.addEventListener('click', resetCounter);
