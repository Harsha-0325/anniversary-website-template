const petals = [
  "only_petals/vecteezy_rose-petal-isolated-background_14320916.png",
  "only_petals/vecteezy_watercolor-flower-petals_9657344.png",
  "only_petals/vecteezy_stunning-rose-petal-for-wedding-decorations_55531110.png",
  "only_petals/vecteezy_single-red-rose-petal-isolated-closeup-macro-romance_54714644.png",
  "only_petals/vecteezy_single-red-rose-petal-delicate-romance-valentine-love_54714671.png"
];

// 🔄 Preload petal images
const preloadedPetals = [];
for (const src of petals) {
  const img = new Image();
  img.src = src;
  preloadedPetals.push(img);
}

function createPetal() {
  const el = document.createElement('div');
  el.classList.add('petal');
  
  // Random image from preloaded list
  const index = Math.floor(Math.random() * petals.length);
  el.style.backgroundImage = `url('${petals[index]}')`;

  // Random position & animation properties
  el.style.left = Math.random() * window.innerWidth + "px";
  const drift = (Math.random() - 0.5) * 200;
  el.style.setProperty('--drift', `${drift}px`);
  
  const duration = 5 + Math.random() * 8;
  el.style.animationDuration = duration + "s";
  el.style.setProperty('--duration', `${duration}s`);

  const size = 25 + Math.random() * 30;
  el.style.width = el.style.height = size + "px";

  el.addEventListener('animationend', () => el.remove());
  document.getElementById('petal-container').appendChild(el);
}

let effectInterval = null;
let stopTimeout = null;

function startEffect() {
  if (effectInterval) return; // Prevent double start
  
  // Start petals
  for (let i = 0; i < 20; i++) createPetal();
  effectInterval = setInterval(createPetal, 80);

  const btn = document.getElementById('start-effect');
  btn.disabled = true;
  btn.innerText = 'ALL FOR YOU ONLY 🥰';

  // Stop effect after 4 seconds
  stopTimeout = setTimeout(() => {
    clearInterval(effectInterval);
    effectInterval = null;

    btn.disabled = false;
    btn.innerText = 'chick again for flowers 😁😁';
  }, 4000);
}

document.getElementById('start-effect').addEventListener('click', startEffect);
