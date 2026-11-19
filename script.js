// Fruit Heist official landing page interactions.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

// IMPORTANT: Replace this URL with the real Fruit Heist Roblox experience URL
// before publishing. The current link intentionally points to Roblox's homepage.
const ROBLOX_GAME_URL = "https://www.roblox.com/";
document.querySelector("#roblox-link").href = ROBLOX_GAME_URL;
