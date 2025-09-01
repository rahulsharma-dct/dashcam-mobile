const icons = {
  direction: `<svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_127_888)">
                  <path
                    d="M0.98999 7.18393C0.676235 6.8698 0.5 6.44398 0.5 6C0.5 5.55602 0.676235 5.1302 0.98999 4.81607L4.81607 0.98999C5.1302 0.676235 5.55602 0.5 6 0.5C6.44398 0.5 6.8698 0.676235 7.18393 0.98999L11.01 4.81607C11.3238 5.1302 11.5 5.55602 11.5 6C11.5 6.44398 11.3238 6.8698 11.01 7.18393L7.18393 11.01C6.8698 11.3238 6.44398 11.5 6 11.5C5.55602 11.5 5.1302 11.3238 4.81607 11.01L0.98999 7.18393Z"
                    stroke="#27B9CD"
                    stroke-width="0.884848"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.45114 4.24219L8.27346 5.0651C8.38409 5.1757 8.44626 5.32572 8.4463 5.48215C8.44626 5.63859 8.38409 5.78861 8.27346 5.89921L7.45055 6.72212M4.04565 7.86004V6.36759C4.04565 6.13292 4.13888 5.90785 4.30482 5.74191C4.47076 5.57597 4.69583 5.48274 4.9305 5.48274H8.4463"
                    stroke="#27B9CD"
                    stroke-width="0.884848"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_127_888">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>`,
};
let currentView = "grid";

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    if (this.textContent.trim().includes("With Map")) {
      document.getElementById("map-container").style.display = "block";
      document.getElementById("map-container").innerHTML = `
        <div style="height:200px; background:#ddd; display:flex; align-items:center; justify-content:center;">
          Map Placeholder
        </div>
        <button id="maximize-btn" style="position:absolute; bottom:10px; right:10px; padding:6px 10px; cursor:pointer;">⛶</button>
      `;

      document.getElementById("maximize-btn").addEventListener("click", () => {
        document.getElementById("map-overlay").style.display = "block";
      });
    } else {
      document.getElementById("map-container").style.display = "none";
    }
  });
});

document.getElementById("close-map").addEventListener("click", () => {
  document.getElementById("map-overlay").style.display = "none";
});

function renderDrivers(drivers) {
  const driversList = document.querySelector(".drivers-list");
  driversList.innerHTML = "";

  drivers.forEach((driver) => {
    const driverItem = document.createElement("div");
    driverItem.className = "driver-item";

    if (currentView === "grid") {
      driverItem.innerHTML = `
                    <div class="driver-main">
                        <div class="driver-info">
                        <div class="driver-name">
                        ${driver.icon}
                            ${driver.status}
                        </div>
                        <div class="driver-time">${driver.date} • ${driver.time}</div>
                        </div>
                        <div class="driver-details">
                        <div class="driver-location">
                            ${driver.location}
                        </div>
                        ${icons.direction}
                    </div>`;
    } else {
      driverItem.innerHTML = `
                    <div class="driver-main">
                        <div class="driver-info">
                            <div class="driver-name">
                                ${driver.icon}
                                ${driver.status}
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px">
                                <div class="driver-time">
                                    ${driver.date} • ${driver.time}
                                </div>
                                <svg
                                    class="dropdown-arrow"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#27B9CD"
                                    stroke-width="2"
                                    >
                                    <path d="M18 15l-6-6-6 6" />
                                </svg>
                            </div>
                        </div>
                         <div class="driver-expanded-content">
                            <div class="driver-details">
                                <div class="driver-location">
                                    ${driver.location}
                                </div>
                                ${icons.direction}
                            </div>
                         </div>
                    </div>`;
    }

    driversList.appendChild(driverItem);

    if (currentView === "list") {
      const arrow = driverItem.querySelector(".dropdown-arrow");
      if (arrow) {
        arrow.addEventListener("click", () => {
          driverItem.classList.toggle("expanded");
        });
      }
    }
  });
}

fetch("Travel Log.json")
  .then((res) => res.json())
  .then((data) => {
    renderDrivers(data.drivers);

    document.getElementById("gridViewToggle").addEventListener("click", () => {
      currentView = "grid";
      renderDrivers(data.drivers);
      setActiveToggle("gridViewToggle");
    });

    document.getElementById("listViewToggle").addEventListener("click", () => {
      currentView = "list";
      renderDrivers(data.drivers);
      setActiveToggle("listViewToggle");
    });
  });

function setActiveToggle(id) {
  document
    .querySelectorAll(".view-toggle")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
