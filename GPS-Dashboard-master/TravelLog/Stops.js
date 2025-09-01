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
