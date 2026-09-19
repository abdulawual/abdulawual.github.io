const toggle = document.getElementById("themeToggle");
const menu = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

const saved = localStorage.getItem("theme");

if (saved) {
  document.documentElement.dataset.theme = saved;
}

toggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";

  document.documentElement.dataset.theme = dark ? "light" : "dark";

  localStorage.setItem(
    "theme",
    dark ? "light" : "dark"
  );
});

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
