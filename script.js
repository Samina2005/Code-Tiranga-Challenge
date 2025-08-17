// ===============================
// Patriotic Quotes Collection
// ===============================
const quotes = [
    { text: "Freedom is never dear at any price. It is the breath of life. What would a man not pay for living?", author: "Mahatma Gandhi" },
    { text: "Give me blood, and I shall give you freedom!", author: "Netaji Subhas Chandra Bose" },
    { text: "Swaraj is my birthright and I shall have it!", author: "Bal Gangadhar Tilak" },
    { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { text: "Freedom is not given, it is taken.", author: "Netaji Subhas Chandra Bose" },
    { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi" },
    { text: "Citizenship consists in the service of the country.", author: "Jawaharlal Nehru" },
    { text: "Let new India arise out of peasants' cottage, grasping the plough, out of huts, cobbler and sweeper.", author: "Swami Vivekananda" }
];

let currentQuoteIndex = 0;   // Tracks which quote is currently shown
let musicPlaying = false;    // Anthem toggle state

// ===============================
// Background Particles
// ===============================
// Creates floating saffron, white, green particles in background
function initBackgroundParticles() {
    const container = document.getElementById('bgParticles');
    const colors = ['#ff9933', '#ffffff', '#138808'];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'bg-particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.width = particle.style.height = (Math.random() * 6 + 2) + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// ===============================
// Countdown Timer
// ===============================
// Calculates time since 15 Aug 2025
function updateCountdown() {
    const independenceDay = new Date('2025-08-15T00:00:00');
    const now = new Date();
    const timeDiff = now - independenceDay;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Update DOM values
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// ===============================
// Fireworks Animation
// ===============================
// Launches fireworks in waves with random colors
function launchFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#ff9933', '#ffffff', '#138808', '#000080', '#ffb366', '#2db84d'];

    for (let wave = 0; wave < 3; wave++) {
        setTimeout(() => {
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    createAdvancedFirework(container, colors);
                }, i * 150);
            }
        }, wave * 1000);
    }
}

// Creates a single firework burst
function createAdvancedFirework(container, colors) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.5);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particleCount = Math.floor(Math.random() * 20 + 25);

    for (let i = 0; i < particleCount; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.width = firework.style.height = (Math.random() * 6 + 3) + 'px';
        firework.style.backgroundColor = color;
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';

        // Spread particles radially
        const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.5 - 0.25);
        const distance = 60 + Math.random() * 80;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        // Pass movement values to CSS
        firework.style.setProperty('--dx', dx + 'px');
        firework.style.setProperty('--dy', dy + 'px');

        container.appendChild(firework);
        setTimeout(() => firework.remove(), 2000); // remove after animation
    }
}

// ===============================
// Quote Changer
// ===============================
// Cycles through quotes automatically & on click
function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    const q = document.querySelector('.quote');
    const a = document.querySelector('.author');
    if (q) q.textContent = `"${quotes[currentQuoteIndex].text}"`;
    if (a) a.textContent = `- ${quotes[currentQuoteIndex].author}`;
}

// ===============================
// Anthem Player + Visualization
// ===============================
// Toggles play/pause for national anthem
function playAnthem() {
    const anthem = document.getElementById("anthem");
    const bars = document.getElementById("musicBars");

    if (anthem.paused) {
        anthem.play();
        bars.style.display = "flex"; // show bars when music plays
    } else {
        anthem.pause();
        anthem.currentTime = 0;
        bars.style.display = "none"; // hide bars when stopped
    }
}

// ===============================
// Particle Storm
// ===============================
// Creates a burst of tricolor particles
function createParticleStorm() {
    const container = document.getElementById('bgParticles');
    const colors = ['#ff9933', '#ffffff', '#138808'];
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'bg-particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.width = p.style.height = (Math.random() * 8 + 4) + 'px';
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDelay = '0s';
        p.style.animationDuration = (Math.random() * 5 + 5) + 's';
        container.appendChild(p);
        setTimeout(() => p.remove(), 6000);
    }
}

// ===============================
// Freedom Fighters Modal Functions
// ===============================
function showFreedomFighters() {
    const modal = document.getElementById('fighterModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeFreedomFighters() {
    const modal = document.getElementById('fighterModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}


// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('fighterModal');
    if (event.target === modal) {
        closeFreedomFighters();
    }
}


// ===============================
// Helper Functions
// ===============================
function flagClick() { alert("You clicked the flag! Jai Hind!"); }
function chakraClick(event) { event.stopPropagation(); alert("Ashoka Chakra clicked!"); }
function animateUnit(el) { el.style.transform = "scale(1.2)"; setTimeout(() => el.style.transform = "", 500); }
function surpriseEffect() { launchFireworks(); createParticleStorm(); changeQuote(); playAnthem(); }


// ===============================
// Boot Sequence
// ===============================
initBackgroundParticles();   // Start background particles
updateCountdown();           // Show countdown immediately
setInterval(updateCountdown, 1000); // Update countdown every second
setInterval(changeQuote, 6000);     // Auto-change quote every 6s


// ===============================
// Dark Mode Toggle
// ===============================
function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.getElementById("darkToggle");

    body.classList.toggle("dark"); // add/remove dark mode class

    // Change icon accordingly
    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";   
    } else {
        toggleBtn.textContent = "🌙";   
    }
}