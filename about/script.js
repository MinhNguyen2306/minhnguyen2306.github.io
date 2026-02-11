/* ======================
   FADE-IN ON SCROLL
====================== */

const elements = document.querySelectorAll(".fade, .timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.25 }
);

elements.forEach(el => observer.observe(el));


/* ======================
   DARK / LIGHT MODE
====================== */

const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});


/* ======================
   TIMELINE PROGRESS
====================== */

const progress = document.querySelector(".timeline-progress");
const timeline = document.querySelector(".timeline");

if (timeline && progress) {
  window.addEventListener("scroll", () => {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const totalHeight = timeline.offsetHeight;
    const visible = windowHeight - rect.top;
    const progressHeight = Math.min(totalHeight, Math.max(0, visible));

    progress.style.height = progressHeight + "px";
  });
}
