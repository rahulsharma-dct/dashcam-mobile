const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Minimal JS for toggle on arrow click
document.querySelectorAll(".menu-item").forEach((menuItem) => {
  const arrow = menuItem.querySelector(".menu-arrow");
  const menuList = menuItem.querySelector(".menu-list");
  const header = menuItem.querySelector("div:first-child"); // clickable header area

  if (arrow && menuList && header) {
    // Toggle menu list on header click (including arrow, text, icon)
    header.addEventListener("click", () => {
      const isOpen = menuList.style.display === "block";
      menuList.style.display = isOpen ? "none" : "block";

      // rotate arrow together
      arrow.classList.toggle("rotated", !isOpen);
    });

    // Handle active menu-link
    menuList.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent closing when clicking link
        menuList
          .querySelectorAll(".menu-link")
          .forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }
});


document.querySelectorAll(".menu-item").forEach((item) => {
  const arrow = item.querySelector(".menu-arrow");

  if (arrow) {
    // only if arrow exists
    arrow.addEventListener("click", () => {
      item.classList.toggle("expanded"); // rotate arrow & toggle submenu
    });
  }
});
