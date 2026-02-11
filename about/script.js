// ================= DARK MODE =================
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ================= SCROLL FADE IN =================
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ================= TIMELINE PROGRESS =================
const progress = document.querySelector(".timeline-progress");
const timeline = document.querySelector(".timeline");

window.addEventListener("scroll", () => {
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const totalHeight = timeline.offsetHeight;
  const visible = windowHeight - rect.top;

  let progressHeight = Math.min(totalHeight, visible);
  if (progressHeight < 0) progressHeight = 0;

  progress.style.height = progressHeight + "px";
});
