const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const topBtn = document.getElementById("topBtn");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-bs-theme", savedTheme);
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-bs-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-bs-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon();
});

function updateThemeIcon() {
  themeToggle.innerHTML =
    root.getAttribute("data-bs-theme") === "dark"
      ? '<i class="bi bi-moon-stars-fill"></i>'
      : '<i class="bi bi-sun-fill"></i>';
}

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "grid" : "none";
});

topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    if (nav.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});