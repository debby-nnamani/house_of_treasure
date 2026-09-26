/* ============================================================
   HOUSE OF TREASURE — Wardrobe of Wealth
   Interactive scripts
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- MOBILE MENU ---------- */
  const menuButton = document.getElementById("menuButton");
  const navLinks   = document.getElementById("navLinks");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      const open = navLinks.classList.toggle("show");
      menuButton.setAttribute("aria-expanded", open);
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- PRODUCT FILTER ---------- */
  const filterButtons = document.querySelectorAll(".filter");
  const cards         = document.querySelectorAll(".product-card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      filterButtons.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      const cat = button.getAttribute("data-filter");

      cards.forEach(function (card) {
        const match = cat === "all" || card.getAttribute("data-category") === cat;

        if (match) {
          card.classList.remove("is-hidden");
          // restart animation
          card.style.animation = "none";
          void card.offsetWidth;
          card.style.animation = "";
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  /* ---------- FOOTER YEAR ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- WELCOME ---------- */
  console.log("Welcome to House of Treasure — Wardrobe of Wealth.");
});