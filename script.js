/* ======================
   FADE-IN ON SCROLL
====================== */
const faders = document.querySelectorAll(".fade");

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

faders.forEach((fade) => {
  appearOnScroll.observe(fade);
});

/* ======================
   DARK / LIGHT MODE
====================== */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

/* ======================
   ABOUT SLIDE PANEL
====================== */
const aboutBtn = document.getElementById("aboutBtn");
const aboutPanel = document.getElementById("aboutPanel");
const closeAbout = document.getElementById("closeAbout");
const readMore = document.getElementById("readMore");

aboutBtn.addEventListener("click", () => {
  aboutPanel.classList.add("open");
});

readMore.addEventListener("click", () => {
  aboutPanel.classList.add("open");
});

closeAbout.addEventListener("click", () => {
  aboutPanel.classList.remove("open");
});
