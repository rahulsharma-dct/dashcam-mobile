const options = [
  {
    ActivelyTransmitting: 2,
    EngineOff: 1,
    Idling: 3,
    HardAcceleration: 0,
    HardBraking: "August 18, 2025",
    SpeedViolation: 1,
    NotUpdates: 0,
  },
  {
    ActivelyTransmitting: 2,
    EngineOff: 1,
    Idling: 3,
    HardAcceleration: 0,
    HardBraking: "August 18, 2025",
    SpeedViolation: 1,
    NotUpdates: 0,
  },
  {
    ActivelyTransmitting: 2,
    EngineOff: 1,
    Idling: 3,
    HardAcceleration: 0,
    HardBraking: "August 18, 2025",
    SpeedViolation: 1,
    NotUpdates: 0,
  },
  {
    ActivelyTransmitting: 2,
    EngineOff: 1,
    Idling: 3,
    HardAcceleration: 0,
    HardBraking: "August 18, 2025",
    SpeedViolation: 1,
    NotUpdates: 0,
  },
  {
    ActivelyTransmitting: 2,
    EngineOff: 1,
    Idling: 3,
    HardAcceleration: 0,
    HardBraking: "August 18, 2025",
    SpeedViolation: 1,
    NotUpdates: 0,
  },
];

const geoDayDetails = document.querySelector(".geo-day-card");
console.log(geoDayDetails);

options.forEach((item) => {
  // Calculate sum of all numeric values
  const total = Object.values(item)
    .filter((val) => typeof val === "number")
    .reduce((sum, val) => sum + val, 0);

  const data = document.createElement("div");

  data.classList.add("geo-day-card-item");

  data.innerHTML = `
    <div class="geo-day-head">
            <span>August 04, 2025</span>
            <span class="geo-collapse-arrow">
              <!-- SVG for chevron-up in a rounded faded box -->
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.5"
                  y="0.5"
                  width="19"
                  height="17"
                  rx="4.5"
                  transform="matrix(-1 0 0 1 19 0.5)"
                  fill="white"
                />
                <rect
                  x="-0.5"
                  y="0.5"
                  width="19"
                  height="17"
                  rx="4.5"
                  transform="matrix(-1 0 0 1 19 0.5)"
                  stroke="#D7DBE2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5678 7.37249C9.68048 7.25984 9.83329 7.19656 9.99262 7.19656C10.1519 7.19656 10.3048 7.25984 10.4174 7.37249L13.8166 10.7716C13.874 10.827 13.9197 10.8933 13.9512 10.9667C13.9827 11.04 13.9993 11.1188 14 11.1986C14.0007 11.2784 13.9855 11.3575 13.9553 11.4313C13.925 11.5052 13.8804 11.5723 13.824 11.6287C13.7676 11.6851 13.7005 11.7297 13.6267 11.7599C13.5528 11.7902 13.4737 11.8054 13.3939 11.8047C13.3141 11.804 13.2353 11.7874 13.162 11.7559C13.0887 11.7244 13.0224 11.6786 12.9669 11.6212L9.99262 8.64694L7.0183 11.6212C6.90498 11.7307 6.7532 11.7913 6.59565 11.7899C6.4381 11.7885 6.2874 11.7253 6.17599 11.6139C6.06458 11.5025 6.00139 11.3518 6.00002 11.1943C5.99865 11.0367 6.05922 10.8849 6.16867 10.7716L9.5678 7.37249Z"
                  fill="#27B9CD"
                />
              </svg>
            </span>
          </div>
          <div class="geo-day-details">
            <div>Actively Transmitting <span>${item.ActivelyTransmitting}</span></div>
            <div>Engine Off <span>${item.EngineOff}</span></div>
            <div>Idling <span>${item.Idling}</span></div>
            <div>Hard Acceleration <span>${item.HardAcceleration}</span></div>
            <div>
              Hard Braking <span class="important">${item.HardBraking}</span>
            </div>
            <div>Speed Violation <span>${item.SpeedViolation}</span></div>
            <div>Not Updates <span>${item.NotUpdates}</span></div>
           <span     class="geo-summary-row">
              <div class="geo-styling">Summary</div>
              <div><span class="important">Total:${total}</span></div>
            </div>
          </div>
  `;

  geoDayDetails.appendChild(data);

  // Add toggle functionality
  const arrow = data.querySelector(".geo-collapse-arrow");
  arrow.addEventListener("click", () => {
    data.classList.toggle("open");
  });
});

// Search functionality for geo-day-card-item
const searchInput = document.querySelector(".toolbar-search-input");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".geo-day-card-item");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const dateRange = document.querySelector(".geo-date-input");

//   flatpickr(dateRange, {
//     mode: "range",
//     dateFormat: "Y-m-d",
//     onOpen: function () {
//       console.log("Date range clicked");
//     },
//     onClose: function (selectedDates) {
//       if (selectedDates.length === 2) {
//         const start = selectedDates[0].toISOString().split("T")[0];
//         const end = selectedDates[1].toISOString().split("T")[0];
//         console.log("Range selected:", start, "-", end);
//       }
//     },
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const dateRange = document.querySelector(".geo-date-input");
  const dateRangeDisplay = document.querySelector(".geo-date-range");

  flatpickr(dateRange, {
    mode: "range",
    dateFormat: "Y-m-d",
    onOpen: function () {
      console.log("Date range clicked");
    },
    onClose: function (selectedDates) {
      if (selectedDates.length === 2) {
        // Format dates to "Month DD, YYYY"
        const options = { year: "numeric", month: "long", day: "2-digit" };
        const start = selectedDates[0].toLocaleDateString("en-US", options);
        const end = selectedDates[1].toLocaleDateString("en-US", options);

        // Update the <div class="geo-date-range">
        if (dateRangeDisplay) {
          dateRangeDisplay.textContent = `${start} - ${end}`;
        }

        console.log("Range selected:", start, "-", end);
      }
    },
  });
});
