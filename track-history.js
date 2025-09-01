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

const dateRange = document.getElementById("dateRange");
dateRange.addEventListener("mouseenter", function () {
  console.log("Date range clicked");
  flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
    onClose: function (selectedDates) {
      if (selectedDates.length === 2) {
        const start = selectedDates[0].toISOString().split("T")[0];
        const end = selectedDates[1].toISOString().split("T")[0];
        console.log("Range selected:", start, "-", end);
      }
    },
  });
});

const playback = document.querySelector(".playback-btn");
playback.addEventListener("click", function () {
  console.log(document.querySelector(".playback-btn"));
  window.location.href = "/segement.html";
});
const iconButton = document.querySelector(".icon-button");
iconButton.addEventListener("click", function () {
  window.location.href = "/Home/Home.html";
});

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

  fetch("/Segment.json")
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
// // Sample data (could come from API later)
// const segments = [
//   {
//     id: 1,
//     address: "7014 E Camelback Rd, Scottsdale, AZ 85251",
//     date: "03/04/2025",
//     duration: "03hr 30min",
//   },
//   {
//     id: 2,
//     address: "9021 W Example St, Scottsdale, AZ 85251",
//     date: "03/04/2025",
//     duration: "02hr 10min",
//   },
//   {
//     id: 3,
//     address: "1200 N Test Dr, Scottsdale, AZ 85251",
//     date: "03/04/2025",
//     duration: "01hr 45min",
//   },
//   {
//     id: 4,
//     address: "7014 E Camelback Rd, Scottsdale, AZ 85251",
//     date: "03/04/2025",
//     duration: "04hr 00min",
//   },
// ];

// let isExpanded = false;
// let sortAsc = true;

// const expandBtn = document.querySelector(".expand-btn");
// const sortBtn = document.querySelector(".sort-btn");
// const segmentsList = document.querySelector(".segments-list");
// const segmentsText = document.querySelector(".segments-text");

// // Render function
// function renderSegments() {
//   // segmentsList.innerHTML = `<h3>${segments.length} Segments</h3>`;
//   segments.forEach((segment, index) => {
//     const div = document.createElement("div");
//     div.className = "segment-item";
//     div.innerHTML = `
//       <span>${index + 1}. </span>
//       <a href="#">${segment.address}</a>
//       <span>${segment.date}</span>
//       <div style="color:red">Duration: ${segment.duration}</div>
//     `;
//     segmentsList.appendChild(div);
//   });

//   // update segments count in bottom panel
//   segmentsText.textContent = `${segments.length} Segments`;
// }

// // Toggle expand/collapse
// expandBtn.addEventListener("click", () => {
//   isExpanded = !isExpanded;
//   if (isExpanded) {
//     renderSegments();
//     segmentsList.classList.remove("hidden");
//   } else {
//     segmentsList.classList.add("hidden");
//   }
// });

// // Sort list
// sortBtn.addEventListener("click", () => {
//   segments.sort((a, b) => {
//     // convert "03hr 30min" → total minutes
//     const toMinutes = (str) => {
//       const [h, m] = str.replace("hr", "").replace("min", "").trim().split(" ");
//       return parseInt(h) * 60 + parseInt(m || 0);
//     };
//     const timeA = toMinutes(a.duration);
//     const timeB = toMinutes(b.duration);
//     return sortAsc ? timeA - timeB : timeB - timeA;
//   });
//   sortAsc = !sortAsc;
//   if (isExpanded) renderSegments();
// });
