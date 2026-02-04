/* ======================
   FADE-IN ON SCROLL
====================== */
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.25
  }
);

faders.forEach(el => observer.observe(el));

/* ======================
   DARK / LIGHT MODE
====================== */
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});


/* ======================
   ABOUT SLIDE PANEL
====================== */
const closeAbout = document.getElementById("closeAbout");
const readMore = document.getElementById("readMore");

aboutBtn?.addEventListener("click", () => {
  aboutPanel?.classList.add("open");
});

readMore?.addEventListener("click", () => {
  aboutPanel?.classList.add("open");
});

closeAbout?.addEventListener("click", () => {
  aboutPanel?.classList.remove("open");
});
