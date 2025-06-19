//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

setInterval(() => {
  angle = (angle + 2) % 360; // Keep angle within 0–359 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);

