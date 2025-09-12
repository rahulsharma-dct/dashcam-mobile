const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const sidebarState = params.get("sidebar");
  const menu = params.get("menu");

  // Sidebar visibility
  const sidebar = document.getElementById("sidebar");
  if (sidebarState === "open" && sidebar) {
    sidebar.classList.add("active");
  }
  
const accountSettingTab = document.querySelector(".account-settings");
if (menu === "account-settings" && accountSettingTab) {
  accountSettingTab.classList.add("expanded");
  const menuList = accountSettingTab.querySelector(".menu-list");
  if (menuList) {
    menuList.style.display = "block";
  } 
}

const alertSectioTab = document.querySelector(".alert-section");
if (menu === "alert-section" && alertSectioTab) {
  alertSectioTab.classList.add("expanded");
  const menuList = alertSectioTab.querySelector(".menu-list");
  if (menuList) {
    menuList.style.display = "block";
  } 
}


const geofencingSectioTab = document.querySelector(".geofencing-section");
if (menu === "geofencing-section" && geofencingSectioTab) {
  geofencingSectioTab.classList.add("expanded");
  const menuList = geofencingSectioTab.querySelector(".menu-list");
  if (menuList) {
    menuList.style.display = "block";
  } 
}

const dashcamSectioTab = document.querySelector(".dashcam-section");
if (menu === "dashcam-section" && dashcamSectioTab) {
  dashcamSectioTab.classList.add("expanded");
  const menuList = dashcamSectioTab.querySelector(".menu-list");
  if (menuList) {
    menuList.style.display = "block";
  } 
}

const trackHistorySectioTab = document.querySelector(".track-history");
if (menu === "track-history" && trackHistorySectioTab) {
  trackHistorySectioTab.classList.add("expanded");
  const menuList = trackHistorySectioTab.querySelector(".menu-list");
  if (menuList) {
    menuList.style.display = "block";
  } 
}

const realTimeSectioTab = document.querySelector(".real-time");
if (menu === "real-time" && realTimeSectioTab) {
  realTimeSectioTab.classList.add("expanded");
  const menuList = realTimeSectioTab.querySelector(".menu-list");
  if (menuList) {
    menuList.style.display = "block";
  } 
}

const reportAnalyticsSectioTab = document.querySelector(".report-analytics");
if (menu === "report-analytics" && reportAnalyticsSectioTab) {
  reportAnalyticsSectioTab.classList.add("expanded");
  const menuList = reportAnalyticsSectioTab.querySelector(".menu-list");
  if (menuList) {
    menuList.style.display = "block";
  } 
}


// ✅ Remove query params from URL (keeps state but cleans the bar)
if (sidebarState || menu ) {
  window.history.replaceState({}, document.title, window.location.pathname);
}
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
