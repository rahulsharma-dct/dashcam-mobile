// const options = [
//   {
//     name: "Demo 1",
//     maintenanceType: "Oil Filter Change",
//     lastServicedMiles: 50000,
//     currentMileage: 123456,
//     serviceIntervalMiles: 5000,
//     lastServiceDate: "2025-08-18",
//     serviceIntervalDays: 90,
//     notes: "Regular maintenance service",
//   },
//   {
//     name: "Demo 2",
//     maintenanceType: "Brake Pad Replacement",
//     lastServicedMiles: 60000,
//     currentMileage: 125000,
//     serviceIntervalMiles: 15000,
//     lastServiceDate: "2025-06-10",
//     serviceIntervalDays: 180,
//     notes: "Front brake pads replaced",
//   },
//   {
//     name: "Demo 3",
//     maintenanceType: "Engine Oil Change",
//     lastServicedMiles: 70000,
//     currentMileage: 131200,
//     serviceIntervalMiles: 7000,
//     lastServiceDate: "2025-07-05",
//     serviceIntervalDays: 120,
//     notes: "Synthetic oil used",
//   },
//   {
//     name: "Demo 4",
//     maintenanceType: "Air Filter Replacement",
//     lastServicedMiles: 80000,
//     currentMileage: 135500,
//     serviceIntervalMiles: 10000,
//     lastServiceDate: "2025-05-15",
//     serviceIntervalDays: 150,
//     notes: "Changed with premium air filter",
//   },
//   {
//     name: "Demo 5",
//     maintenanceType: "Coolant Flush",
//     lastServicedMiles: 90000,
//     currentMileage: 138900,
//     serviceIntervalMiles: 30000,
//     lastServiceDate: "2025-03-20",
//     serviceIntervalDays: 365,
//     notes: "Coolant replaced with long-life formula",
//   },
//   {
//     name: "Demo 6",
//     maintenanceType: "Transmission Fluid Change",
//     lastServicedMiles: 100000,
//     currentMileage: 142000,
//     serviceIntervalMiles: 40000,
//     lastServiceDate: "2025-04-10",
//     serviceIntervalDays: 400,
//     notes: "Automatic transmission fluid replaced",
//   },
//   {
//     name: "Demo 7",
//     maintenanceType: "Battery Replacement",
//     lastServicedMiles: 105000,
//     currentMileage: 145300,
//     serviceIntervalMiles: 60000,
//     lastServiceDate: "2025-02-05",
//     serviceIntervalDays: 730,
//     notes: "Replaced with AGM battery",
//   },
//   {
//     name: "Demo 8",
//     maintenanceType: "Spark Plug Change",
//     lastServicedMiles: 110000,
//     currentMileage: 148750,
//     serviceIntervalMiles: 30000,
//     lastServiceDate: "2025-01-25",
//     serviceIntervalDays: 365,
//     notes: "Installed iridium spark plugs",
//   },
//   {
//     name: "Demo 9",
//     maintenanceType: "Timing Belt Replacement",
//     lastServicedMiles: 115000,
//     currentMileage: 151900,
//     serviceIntervalMiles: 60000,
//     lastServiceDate: "2025-07-30",
//     serviceIntervalDays: 720,
//     notes: "Timing belt and tensioner replaced",
//   },
//   {
//     name: "Demo 10",
//     maintenanceType: "Tire Rotation",
//     lastServicedMiles: 118000,
//     currentMileage: 153400,
//     serviceIntervalMiles: 8000,
//     lastServiceDate: "2025-08-12",
//     serviceIntervalDays: 90,
//     notes: "All four tires rotated",
//   },
// ];

// const maintenanceList = document.querySelector(".maintenance-list"); // container

// options.forEach((item) => {
//   const maintenanceItem = document.createElement("div");
//   maintenanceItem.classList.add("maintenance-item");

//   maintenanceItem.innerHTML = `
//     <div class="maintenance-header">
//       <span class="maintenance-title">${item.name}</span>
//       <button class="maintenance-toggle active">
//         <svg
//           width="20"
//           height="19"
//           viewBox="0 0 20 19"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect
//             x="-0.5"
//             y="0.5"
//             width="19"
//             height="17"
//             rx="4.5"
//             transform="matrix(-1 0 0 1 19 0.5)"
//             fill="white"
//           />
//           <rect
//             x="-0.5"
//             y="0.5"
//             width="19"
//             height="17"
//             rx="4.5"
//             transform="matrix(-1 0 0 1 19 0.5)"
//             stroke="#D7DBE2"
//           />
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M9.5678 7.37249C9.68048 7.25984 9.83329 7.19656 9.99262 7.19656C10.1519 7.19656 10.3048 7.25984 10.4174 7.37249L13.8166 10.7716C13.874 10.827 13.9197 10.8933 13.9512 10.9667C13.9827 11.04 13.9993 11.1188 14 11.1986C14.0007 11.2784 13.9855 11.3575 13.9553 11.4313C13.925 11.5052 13.8804 11.5723 13.824 11.6287C13.7676 11.6851 13.7005 11.7297 13.6267 11.7599C13.5528 11.7902 13.4737 11.8054 13.3939 11.8047C13.3141 11.804 13.2353 11.7874 13.162 11.7559C13.0887 11.7244 13.0224 11.6786 12.9669 11.6212L9.99262 8.64694L7.0183 11.6212C6.90498 11.7307 6.7532 11.7913 6.59565 11.7899C6.4381 11.7885 6.2874 11.7253 6.17599 11.6139C6.06458 11.5025 6.00139 11.3518 6.00002 11.1943C5.99865 11.0367 6.05922 10.8849 6.16867 10.7716L9.5678 7.37249Z"
//             fill="#27B9CD"
//           />
//         </svg>
//       </button>
//     </div>
//     <div class="maintenance-body">
//       <div class="maintenance-row">
//         <span class="maintenance-label">${item.maintenanceType}</span>
//         <a href="#" class="maintenance-link">${item.maintenanceType}</a>
//       </div>
//       <div class="maintenance-row">
//         <span class="maintenance-label">Last Serviced (Miles)</span>
//         <span class="maintenance-value">${item.lastServicedMiles}</span>
//       </div>
//       <div class="maintenance-row">
//         <span class="maintenance-label">Current Mileage (Miles)</span>
//         <span class="maintenance-value">${item.currentMileage}</span>
//       </div>
//       <div class="maintenance-row">
//         <span class="maintenance-label">Service Interval (Miles)</span>
//         <span class="maintenance-value">${item.serviceIntervalMiles}</span>
//       </div>
//       <div class="maintenance-row">
//         <span class="maintenance-label">Last Service (Date)</span>
//         <span class="maintenance-value highlight">${item.lastServiceDate}</span>
//       </div>
//       <div class="maintenance-row">
//         <span class="maintenance-label">Service Interval (Days)</span>
//         <span class="maintenance-value">${item.serviceIntervalDays}</span>
//       </div>
//       <div class="maintenance-note">
//         <span class="note-label">Notes</span>
//         <div class="note-content">${item.notes}</div>
//       </div>
//     </div>
//   `;

//   maintenanceList.appendChild(maintenanceItem);

//   const toggleBtn = maintenanceItem.querySelector(".maintenance-toggle");
//   toggleBtn.addEventListener("click", () => {
//     maintenanceItem.classList.toggle("open");
//   });
// });

// // Search filter
// const searchInput = document.querySelector(".toolbar-search-input");

// searchInput.addEventListener("input", function () {
//   const query = searchInput.value.toLowerCase().trim();
//   const items = document.querySelectorAll(".maintenance-item");

//   items.forEach((item) => {
//     const text = item.textContent.toLowerCase();
//     item.style.display = text.includes(query) ? "" : "none";
//   });
// });
const options = [
  {
    name: "Demo 1",
    maintenanceType: "Oil Filter Change",
    lastServicedMiles: 50000,
    currentMileage: 123456,
    serviceIntervalMiles: 5000,
    lastServiceDate: "2025-08-18",
    serviceIntervalDays: 90,
    notes: "Regular maintenance service",
  },
  {
    name: "Demo 2",
    maintenanceType: "Brake Pad Replacement",
    lastServicedMiles: 60000,
    currentMileage: 125000,
    serviceIntervalMiles: 15000,
    lastServiceDate: "2025-06-10",
    serviceIntervalDays: 180,
    notes: "Front brake pads replaced",
  },
  {
    name: "Demo 3",
    maintenanceType: "Engine Oil Change",
    lastServicedMiles: 70000,
    currentMileage: 131200,
    serviceIntervalMiles: 7000,
    lastServiceDate: "2025-07-05",
    serviceIntervalDays: 120,
    notes: "Synthetic oil used",
  },
  {
    name: "Demo 4",
    maintenanceType: "Air Filter Replacement",
    lastServicedMiles: 80000,
    currentMileage: 135500,
    serviceIntervalMiles: 10000,
    lastServiceDate: "2025-05-15",
    serviceIntervalDays: 150,
    notes: "Changed with premium air filter",
  },
  {
    name: "Demo 5",
    maintenanceType: "Coolant Flush",
    lastServicedMiles: 90000,
    currentMileage: 138900,
    serviceIntervalMiles: 30000,
    lastServiceDate: "2025-03-20",
    serviceIntervalDays: 365,
    notes: "Coolant replaced with long-life formula",
  },
  {
    name: "Demo 6",
    maintenanceType: "Transmission Fluid Change",
    lastServicedMiles: 100000,
    currentMileage: 142000,
    serviceIntervalMiles: 40000,
    lastServiceDate: "2025-04-10",
    serviceIntervalDays: 400,
    notes: "Automatic transmission fluid replaced",
  },
  {
    name: "Demo 7",
    maintenanceType: "Battery Replacement",
    lastServicedMiles: 105000,
    currentMileage: 145300,
    serviceIntervalMiles: 60000,
    lastServiceDate: "2025-02-05",
    serviceIntervalDays: 730,
    notes: "Replaced with AGM battery",
  },
  {
    name: "Demo 8",
    maintenanceType: "Spark Plug Change",
    lastServicedMiles: 110000,
    currentMileage: 148750,
    serviceIntervalMiles: 30000,
    lastServiceDate: "2025-01-25",
    serviceIntervalDays: 365,
    notes: "Installed iridium spark plugs",
  },
  {
    name: "Demo 9",
    maintenanceType: "Timing Belt Replacement",
    lastServicedMiles: 115000,
    currentMileage: 151900,
    serviceIntervalMiles: 60000,
    lastServiceDate: "2025-07-30",
    serviceIntervalDays: 720,
    notes: "Timing belt and tensioner replaced",
  },
  {
    name: "Demo 10",
    maintenanceType: "Tire Rotation",
    lastServicedMiles: 118000,
    currentMileage: 153400,
    serviceIntervalMiles: 8000,
    lastServiceDate: "2025-08-12",
    serviceIntervalDays: 90,
    notes: "All four tires rotated",
  },
];

const maintenanceList = document.querySelector(".maintenance-list");
const searchInput = document.querySelector(".toolbar-search-input");
const paginationText = document.querySelector(".pagination-text");
const paginationBtns = document.querySelectorAll(".pagination-btn");

let allItems = [];
let filteredItems = [];
let currentPage = 1;
const itemsPerPage = 4;

// Render one maintenance item
function createMaintenanceItem(item) {
  const maintenanceItem = document.createElement("div");
  maintenanceItem.classList.add("maintenance-item");

  maintenanceItem.innerHTML = `
    <div class="maintenance-header">
      <span class="maintenance-title">${item.name}</span>
      <button class="maintenance-toggle active">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.5" y="0.5" width="19" height="17" rx="4.5" transform="matrix(-1 0 0 1 19 0.5)" fill="white"/>
          <rect x="-0.5" y="0.5" width="19" height="17" rx="4.5" transform="matrix(-1 0 0 1 19 0.5)" stroke="#D7DBE2"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5678 7.37249C9.68048 7.25984 9.83329 7.19656 9.99262 7.19656C10.1519 7.19656 10.3048 7.25984 10.4174 7.37249L13.8166 10.7716C13.874 10.827 13.9197 10.8933 13.9512 10.9667C13.9827 11.04 13.9993 11.1188 14 11.1986C14.0007 11.2784 13.9855 11.3575 13.9553 11.4313C13.925 11.5052 13.8804 11.5723 13.824 11.6287C13.7676 11.6851 13.7005 11.7297 13.6267 11.7599C13.5528 11.7902 13.4737 11.8054 13.3939 11.8047C13.3141 11.804 13.2353 11.7874 13.162 11.7559C13.0887 11.7244 13.0224 11.6786 12.9669 11.6212L9.99262 8.64694L7.0183 11.6212C6.90498 11.7307 6.7532 11.7913 6.59565 11.7899C6.4381 11.7885 6.2874 11.7253 6.17599 11.6139C6.06458 11.5025 6.00139 11.3518 6.00002 11.1943C5.99865 11.0367 6.05922 10.8849 6.16867 10.7716L9.5678 7.37249Z" fill="#27B9CD"/>
        </svg>
      </button>
    </div>
    <div class="maintenance-body">
      <div class="maintenance-row"><span class="maintenance-label">${item.maintenanceType}</span><a href="#" class="maintenance-link">${item.maintenanceType}</a></div>
      <div class="maintenance-row"><span class="maintenance-label">Last Serviced (Miles)</span><span class="maintenance-value">${item.lastServicedMiles}</span></div>
      <div class="maintenance-row"><span class="maintenance-label">Current Mileage (Miles)</span><span class="maintenance-value">${item.currentMileage}</span></div>
      <div class="maintenance-row"><span class="maintenance-label">Service Interval (Miles)</span><span class="maintenance-value">${item.serviceIntervalMiles}</span></div>
      <div class="maintenance-row"><span class="maintenance-label">Last Service (Date)</span><span class="maintenance-value highlight">${item.lastServiceDate}</span></div>
      <div class="maintenance-row"><span class="maintenance-label">Service Interval (Days)</span><span class="maintenance-value">${item.serviceIntervalDays}</span></div>
      <div class="maintenance-note"><span class="note-label">Notes</span><div class="note-content">${item.notes}</div></div>
    </div>
  `;

  // Toggle logic
  const toggleBtn = maintenanceItem.querySelector(".maintenance-toggle");
  toggleBtn.addEventListener("click", () => {
    maintenanceItem.classList.toggle("open");
  });

  return maintenanceItem;
}

// Render filtered items with pagination
function renderMaintenanceList() {
  maintenanceList.innerHTML = "";

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  filteredItems.slice(start, end).forEach((item) => {
    maintenanceList.appendChild(item);
  });

  const startEntry = totalItems === 0 ? 0 : start + 1;
  const endEntry = Math.min(end, totalItems);
  paginationText.textContent = `Showing ${startEntry} to ${endEntry} of ${totalItems} entries`;
}

// Setup initial list
function init() {
  allItems = options.map(createMaintenanceItem);
  filteredItems = allItems.slice();
  renderMaintenanceList();
}

// Search filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  filteredItems = allItems.filter((item) => {
    const title = item
      .querySelector(".maintenance-title")
      .textContent.toLowerCase();
    return title.includes(query);
  });

  currentPage = 1;
  renderMaintenanceList();
});

// Pagination buttons
paginationBtns[0].addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderMaintenanceList();
  }
});

paginationBtns[1].addEventListener("click", () => {
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderMaintenanceList();
  }
});

// Initialize on load
init();
