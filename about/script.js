// ================= DARK MODE =================
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ================= FADE IN ON SCROLL =================

const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
    });
  },
  { threshold: 0.3 }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// ================= TIMELINE PROGRESS =================

const progress = document.querySelector(".timeline-progress");
const timeline = document.querySelector(".timeline-wrapper");

window.addEventListener("scroll", () => {
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const total = rect.height;
  const visible = windowHeight - rect.top;

  let percent = (visible / total) * 100;
  percent = Math.min(Math.max(percent, 0), 100);

  progress.style.width = percent + "%";
});
/* ================= TIMELINE ANIMATION ================= */

const items = document.querySelectorAll(".timeline-item");
const progress = document.querySelector(".timeline-progress");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

items.forEach(item => observer.observe(item));

/* Progress line scroll effect */
window.addEventListener("scroll", () => {
  const timeline = document.querySelector(".timeline");
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const totalHeight = timeline.offsetHeight;
  const visible = windowHeight - rect.top;
  const progressHeight = Math.min(totalHeight, Math.max(0, visible));

  progress.style.height = progressHeight + "px";
});
