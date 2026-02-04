const body = document.body;
const toggle = document.getElementById("themeToggle");

// ================= THEME =================
if (toggle) {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ================= JOURNEY FADE-IN =================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});
