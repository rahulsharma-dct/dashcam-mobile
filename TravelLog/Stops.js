document.addEventListener("DOMContentLoaded", () => {
  const bottomPanel = document.getElementById("bottomPanel");
  const expandBtn = document.getElementById("expandBtn");
  const expandedContent = document.getElementById("expandedContent");
  const stopsListContainer = document.getElementById("stopsList");

  expandBtn.addEventListener("click", function () {
    bottomPanel.classList.toggle("expanded");

    if (bottomPanel.classList.contains("expanded")) {
      setTimeout(() => {
        expandedContent.classList.add("show");
      }, 10);
      expandBtn.querySelector("svg").style.transform = "rotate(180deg)";
    } else {
      expandedContent.classList.remove("show");
      expandBtn.querySelector("svg").style.transform = "rotate(0deg)";
    }
  });

  // Optional: Add hover functionality
  bottomPanel.addEventListener("mouseenter", function () {
    if (!bottomPanel.classList.contains("expanded")) {
    }
  });

  bottomPanel.addEventListener("mouseleave", function () {
    if (!bottomPanel.classList.contains("expanded")) {
      bottomPanel.style.transform = "translateY(0)";
    }
  });

  fetch("Stops.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load stops data");
      }
      return response.json();
    })
    .then((stopsData) => {
      stopsData.forEach((stop, index) => {
        const stopItem = document.createElement("div");
        stopItem.className = index % 2 === 0 ? "stop-item" : "stop-item-2";

        stopItem.innerHTML = `
          <div class="stop-number">${stop.stopNumber}</div>
          <div class="stop-details">
            <div class="stop-address">
              ${stop.address}
              <span class="stop-date">${stop.date}</span>
            </div>
            <div class="stop-info">
              <span class="stop-duration">Stopped: ${stop.duration}</span>
            </div>
          </div>
        `;

        stopsListContainer.appendChild(stopItem);
      });
    })
    .catch((error) => {
      console.error("Error loading stops:", error);
      stopsListContainer.innerHTML = "<p>Error loading stops data.</p>";
    });
});

const platform = new H.service.Platform({
  apikey: "kre4_OutjD9fpCNKHjwXfTrSbGWhVo7cG7id5zP2ULE",
});

const defaultLayers = platform.createDefaultLayers();

const map = new H.Map(
  document.querySelector(".map-container"),
  defaultLayers.vector.normal.map,
  {
    center: { lat: 28.6139, lng: 77.209 },
    zoom: 10,
    pixelRatio: window.devicePixelRatio || 1,
  }
);

const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
const ui = H.ui.UI.createDefault(map, defaultLayers);

const router = platform.getRoutingService(null, 8);

const origin = "37.8063,-122.2918";
const destination = "37.8113,-122.2727";

let forwardCoords = [];
let backwardCoords = [];
let movingMarker;
let intervalId;
let index = 0;
let currentRoute = "forward";

router.calculateRoute(
  {
    routingMode: "fast",
    transportMode: "car",
    origin,
    destination,
    return: "polyline,summary",
  },
  (result) => handleRoute(result, "forward"),
  onError
);

router.calculateRoute(
  {
    routingMode: "fast",
    transportMode: "car",
    origin: destination,
    destination: origin,
    return: "polyline,summary",
  },
  (result) => handleRoute(result, "backward"),
  onError
);

function handleRoute(result, type) {
  if (result.routes.length) {
    let section = result.routes[0].sections[0];

    let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
    let coords = [];
    linestring.eachLatLngAlt((lat, lng) => {
      coords.push({ lat, lng });
    });

    if (type === "forward") {
      forwardCoords = coords;
    } else {
      backwardCoords = coords;
    }

    let routeLine = new H.map.Polyline(linestring, {
      style: {
        strokeColor: type === "forward" ? "blue" : "green",
        lineWidth: 4,
      },
    });
    map.addObject(routeLine);

    let step = Math.floor(coords.length / 10);
    coords.forEach((c, i) => {
      if (i % step === 0) {
        let dotIcon = new H.map.Icon(
          `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <circle cx="10" cy="10" r="6" fill="#30A71A" stroke="white" stroke-width="2"/>
          </svg>`
        );
        let dotMarker = new H.map.Marker(c, { icon: dotIcon });
        map.addObject(dotMarker);
      }
    });

    if (!map.getObjects().some((obj) => obj.getData?.() === "start")) {
      let startMarker = new H.map.Marker(section.departure.place.location, {
        icon: new H.map.Icon(
          '<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path fill="#30A71A" d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 13 7 13s7-8.03 7-13c0-3.87-3.13-7-7-7z"/>' +
            '<circle cx="12" cy="9" r="4" fill="#FFFFFF"/>' +
            "</svg>"
        ),
      });
      startMarker.setData("start");
      map.addObject(startMarker);
    }

    if (!map.getObjects().some((obj) => obj.getData?.() === "end")) {
      let endMarker = new H.map.Marker(section.arrival.place.location, {
        icon: new H.map.Icon(
          '<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
            '<path fill="#E43C35" d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 13 7 13s7-8.03 7-13c0-3.87-3.13-7-7-7z"/>' +
            '<circle cx="12" cy="9" r="4" fill="#FFFFFF"/>' +
            "</svg>"
        ),
      });
      endMarker.setData("end");
      map.addObject(endMarker);
    }
    map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });

    if (!movingMarker && forwardCoords.length) {
      movingMarker = new H.map.Circle(forwardCoords[0], 50, {
        style: { fillColor: "red", strokeColor: "black", lineWidth: 1 },
      });
      map.addObject(movingMarker);
    }
  }
}

function onError(error) {
  alert("Error fetching route: " + error.message);
}
function moveMarker() {
  let coords = currentRoute === "forward" ? forwardCoords : backwardCoords;
  if (!coords.length) return;

  movingMarker.setCenter(coords[index]);
  index++;

  if (index >= coords.length) {
    if (currentRoute === "forward") {
      currentRoute = "backward";
      index = 0;
    } else {
      clearInterval(intervalId);
    }
  }
}

let speed = 100;
let isPaused = false;
document.querySelector("#playBtn").addEventListener("click", function () {
  if (intervalId) clearInterval(intervalId);
  if (!isPaused) {
    index = 0;
    currentRoute = "forward";
  }

  isPaused = false;
  intervalId = setInterval(moveMarker, speed);
});

document.querySelector("#pauseBtn").addEventListener("click", function () {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    isPaused = true;
  }
});

document.querySelector("#RestartBtn").addEventListener("click", function () {
  if (intervalId) clearInterval(intervalId);
  index = 0;
  currentRoute = "forward";
  movingMarker.setCenter(forwardCoords[0]);
  intervalId = setInterval(moveMarker, speed);
});

document.querySelector("#sppedupBtn").addEventListener("click", function () {
  speed = Math.max(10, speed / 2);
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = setInterval(moveMarker, speed);
  }
});

document.querySelector("#sppeddownBtn").addEventListener("click", function () {
  speed = speed * 2;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = setInterval(moveMarker, speed);
  }
});

document.querySelector("#continueBtn").addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(moveMarker, speed);
  }
});
