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
let currentPage = 1;
const pageSize = 4;

function pagination(driver, page, size) {
  const start = (page - 1) * size;
  return driver.slice(start, start + size);
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    if (this.textContent.trim().includes("With Map")) {
      document.getElementById("map-container").style.display = "block";
      document.getElementById("map-container").innerHTML = `
        <div id="show-map" style="height:200px; background:#ddd;">
        </div>
        <button id="maximize-btn" style="position:absolute; bottom:10px; right:10px; padding:6px 10px; cursor:pointer;">⛶</button>
      `;
      showMap("#show-map");

      document.getElementById("maximize-btn").addEventListener("click", () => {
        document.getElementById("map-overlay").style.display = "block";
        document.getElementById("map-overlay").innerHTML = `<button
          id="close-map"
          style="
            position: absolute;
            top: 70px;
            right: 20px;
            z-index:1000;
            padding: 8px 12px;
            font-size: 18px;
            cursor: pointer;
          "
        >
          ✖
        </button>`;

        document.getElementById("close-map").addEventListener("click", () => {
          document.getElementById("map-overlay").style.display = "none";
        });

        showMap("#map-overlay");
      });
    } else {
      document.getElementById("map-container").style.display = "none";
    }
  });
});

function renderDrivers(drivers) {
  const driversList = document.querySelector(".drivers-list");
  driversList.innerHTML = "";

  const paginatedDriver = pagination(drivers, currentPage, pageSize);

  paginatedDriver.forEach((driver) => {
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

  document.querySelector(".pagination-text").textContent = `Showing ${
    (currentPage - 1) * pageSize + 1
  } to ${Math.min(currentPage * pageSize, drivers.length)} of ${
    drivers.length
  } entries`;
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
    document
      .querySelector(".search-input")
      .addEventListener("input", function (e) {
        const query = e.target.value;
        const filterData = data.drivers.filter((item) =>
          item.status.toLowerCase().includes(query)
        );
        currentPage = 1;
        renderDrivers(filterData);
      });

    document
      .querySelectorAll(".pagination-btn")[0]
      .addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          renderDrivers(data.drivers);
        }
      });

    document
      .querySelectorAll(".pagination-btn")[1]
      .addEventListener("click", () => {
        if (currentPage * pageSize < data.drivers.length) {
          currentPage++;
          renderDrivers(data.drivers);
        }
      });
  });

function setActiveToggle(id) {
  document
    .querySelectorAll(".view-toggle")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showMap(className) {
  const platform = new H.service.Platform({
    apikey: "kre4_OutjD9fpCNKHjwXfTrSbGWhVo7cG7id5zP2ULE",
  });

  const defaultLayers = platform.createDefaultLayers();

  const map = new H.Map(
    document.querySelector(className),
    defaultLayers.vector.normal.map,
    {
      center: { lat: 28.6139, lng: 77.209 },
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1,
    }
  );

  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  const ui = H.ui.UI.createDefault(map, defaultLayers);

  const vehicles = [
    { lat: 27.6139, lng: 77.209, color: "#30a71a", label: "Vehicle is Idle" },
    { lat: 27.6041, lng: 77.1025, color: "#e43c35", label: "Engine On" },
    { lat: 27.6355, lng: 77.391, color: "#d4941a", label: "Hard Braking" },
    { lat: 27.6345, lng: 77.281, color: "#3381EC", label: "Idling" },
  ];

  vehicles.forEach((v) => {
    const svgMarkup = `
  <div>
  <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="${v.color}" d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 13 7 13s7-8.03 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="6" fill="#FFFFFF"/>
      <g transform="translate(12,9) scale(0.45) translate(-9,-8)">
    <svg
        width="18"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.435 5.64539L15.238 2.05439C15.0644 1.53156 14.7304 1.07675 14.2835 0.754585C13.8366 0.432417 13.2996 0.259277 12.7486 0.259767H4.7704C4.21949 0.259277 3.68243 0.432417 3.23555 0.754585C2.78866 1.07675 2.45466 1.53156 2.28102 2.05439L1.08402 5.64539C0.765716 5.77858 0.493887 6.00289 0.302705 6.29013C0.111523 6.57737 0.00952106 6.91472 0.00952148 7.25977V11.6348C0.00952148 12.2805 0.363021 12.8388 0.884521 13.1424V15.1348C0.884521 15.3668 0.976709 15.5894 1.1408 15.7535C1.3049 15.9176 1.52746 16.0098 1.75952 16.0098H2.63452C2.86659 16.0098 3.08915 15.9176 3.25324 15.7535C3.41733 15.5894 3.50952 15.3668 3.50952 15.1348V13.3848H14.0095V15.1348C14.0095 15.3668 14.1017 15.5894 14.2658 15.7535C14.4299 15.9176 14.6525 16.0098 14.8845 16.0098H15.7595C15.9916 16.0098 16.2141 15.9176 16.3782 15.7535C16.5423 15.5894 16.6345 15.3668 16.6345 15.1348V13.1424C16.9 12.9901 17.1206 12.7706 17.2743 12.506C17.4279 12.2413 17.509 11.9408 17.5095 11.6348V7.25977C17.5095 6.91472 17.4075 6.57737 17.2163 6.29013C17.0252 6.00289 16.7533 5.77858 16.435 5.64539ZM4.7704 2.00977H12.7478C13.1249 2.00977 13.4591 2.24952 13.5781 2.60827L14.5459 5.50977H2.97315L3.94002 2.60827C3.99808 2.43396 4.10952 2.28235 4.25856 2.17493C4.40761 2.06751 4.58668 2.00972 4.7704 2.00977ZM3.07202 10.7598C2.8996 10.7597 2.72889 10.7257 2.56962 10.6597C2.41034 10.5936 2.26564 10.4969 2.14376 10.3749C2.02189 10.2529 1.92522 10.1082 1.8593 9.94886C1.79337 9.78955 1.75946 9.61881 1.75952 9.44639C1.75958 9.27397 1.7936 9.10326 1.85963 8.94399C1.92566 8.78471 2.02242 8.64001 2.14438 8.51813C2.26634 8.39626 2.41111 8.29959 2.57042 8.23367C2.72974 8.16774 2.90048 8.13383 3.0729 8.13389C3.42111 8.13401 3.75501 8.27245 4.00116 8.51875C4.2473 8.76506 4.38551 9.09905 4.3854 9.44727C4.38528 9.79548 4.24684 10.1294 4.00054 10.3755C3.75423 10.6217 3.42023 10.7599 3.07202 10.7598ZM14.447 10.7598C14.2746 10.7597 14.1039 10.7257 13.9446 10.6597C13.7853 10.5936 13.6406 10.4969 13.5188 10.3749C13.3969 10.2529 13.3002 10.1082 13.2343 9.94886C13.1684 9.78955 13.1345 9.61881 13.1345 9.44639C13.1346 9.27397 13.1686 9.10326 13.2346 8.94399C13.3007 8.78471 13.3974 8.64001 13.5194 8.51813C13.6413 8.39626 13.7861 8.29959 13.9454 8.23367C14.1047 8.16774 14.2755 8.13383 14.4479 8.13389C14.7961 8.13401 15.13 8.27245 15.3762 8.51875C15.6223 8.76506 15.7605 9.09905 15.7604 9.44727C15.7603 9.79548 15.6218 10.1294 15.3755 10.3755C15.1292 10.6217 14.7952 10.7599 14.447 10.7598Z"
          fill="${v.color}"
        />
      </svg>
        </g>
      </svg>
 <vehicle-marker style="
  color:${v.color};
  background: ${v.color};
  color: #FFFFFF;
  font-weight: 400;
  border-radius: 20px;
  margin-top:-1.2rem;
  margin-left:-10px;
  padding:5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  transition: transform 0.2s;"
      >
      ${v.label}</vehicle-marker
    >
    </div>

    `;

    const icon = new H.map.DomIcon(svgMarkup, { size: { w: 18, h: 16 } });
    const marker = new H.map.DomMarker(
      { lat: v.lat, lng: v.lng },
      { icon: icon }
    );

    map.setCenter({ lat: v.lat, lng: v.lng });
    map.addObject(marker);
  });
}
