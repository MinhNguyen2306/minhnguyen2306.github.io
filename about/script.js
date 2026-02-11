// ================= DARK MODE =================

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ================= TIMELINE ANIMATION =================

const items = document.querySelectorAll(".timeline-item");
const progress = document.querySelector(".timeline-progress");
const timeline = document.querySelector(".timeline");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

items.forEach(item => observer.observe(item));


// ================= PROGRESS LINE SCROLL =================

window.addEventListener("scroll", () => {

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const totalHeight = timeline.offsetHeight;
  const visible = windowHeight - rect.top;

  const progressHeight = Math.min(totalHeight, Math.max(0, visible));

  progress.style.height = progressHeight + "px";

});
