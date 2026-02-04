const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

// Toggle theme
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
