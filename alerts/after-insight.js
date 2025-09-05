// const options = [
//   {
//     name: "Sales Car 1",
//     id: "220902734",
//     withinHours: "05:52:03",
//     outsideHours: "22:49:43",
//   },
//   {
//     name: "Demo 1",
//     id: "220902734",
//     withinHours: "05:52:03",
//     outsideHours: "22:49:43",
//   },
//   {
//     name: "Demo 2",
//     id: "220902734",
//     withinHours: "05:52:03",
//     outsideHours: "22:49:43",
//   },
// ];

// // Keep a master array for rendering
// let filteredOptions = [...options];

// const periodResultCard = document.querySelector(".period-result-card");

// // Function to render cards based on an array
// function renderCards(array) {
//   periodResultCard.innerHTML = ""; // Clear previous cards

//   array.forEach((item) => {
//     const card = document.createElement("div");
//     card.classList.add("period-result-card");
//     card.innerHTML = `
//       <div class="result-title">${item.name}</div>
//       <div class="result-id">${item.id}</div>
//       <div class="result-row">
//         <div class="result-col-left">
//           <span class="result-label-within">Within Hours</span>
//           <span class="result-time-within">
//             <svg width="13" height="13" viewBox="0 0 10 10" fill="none">
//               <path d="M4.75016 0.964844C5.8868 0.964844 6.97689 1.41637 7.78062 2.2201C8.58435 3.02383 9.03588 4.11392 9.03588 5.25056C9.03588 6.3872 8.58435 7.47729 7.78062 8.28102C6.97689 9.08474 5.8868 9.53627 4.75016 9.53627C3.61352 9.53627 2.52343 9.08474 1.7197 8.28101C0.915976 7.47729 0.464447 6.3872 0.464447 5.25056C0.464447 4.11392 0.915976 3.02383 1.7197 2.2201C2.52343 1.41637 3.61352 0.964844 4.75016 0.964844ZM4.75016 1.41597C3.73317 1.41597 2.75782 1.81997 2.0387 2.5391C1.31957 3.25822 0.915575 4.23356 0.915575 5.25056C0.915575 6.26755 1.31957 7.2429 2.0387 7.96202C2.75782 8.68114 3.73317 9.08514 4.75016 9.08514C5.25373 9.08514 5.75236 8.98596 6.21759 8.79325C6.68283 8.60055 7.10555 8.31809 7.46162 7.96202C7.8177 7.60595 8.10015 7.18322 8.29286 6.71799C8.48556 6.25276 8.58475 5.75412 8.58475 5.25056C8.58475 4.23356 8.18075 3.25822 7.46162 2.5391C6.7425 1.81997 5.76716 1.41597 4.75016 1.41597ZM4.5246 2.76936L4.97573 2.76936L4.97572 5.21447L7.09603 6.43702L6.87046 6.82951L4.5246 5.47612L4.5246 2.76936Z" fill="#15803D"/>
//             </svg>
//             <span class="result-green">${item.withinHours}</span>
//           </span>
//         </div>
//         <div class="result-col-right">
//           <span class="result-label-outside">${item.withinHours}</span>
//           <span class="result-time-outside">
//             <svg width="13" height="13" viewBox="0 0 10 10" fill="none">
//               <path d="M4.75016 0.964844C5.8868 0.964844 6.97689 1.41637 7.78062 2.2201C8.58435 3.02383 9.03588 4.11392 9.03588 5.25056C9.03588 6.3872 8.58435 7.47729 7.78062 8.28102C6.97689 9.08474 5.8868 9.53627 4.75016 9.53627C3.61352 9.53627 2.52343 9.08474 1.7197 8.28101C0.915976 7.47729 0.464447 6.3872 0.464447 5.25056C0.464447 4.11392 0.915976 3.02383 1.7197 2.2201C2.52343 1.41637 3.61352 0.964844 4.75016 0.964844ZM4.75016 1.41597C3.73317 1.41597 2.75782 1.81997 2.0387 2.5391C1.31957 3.25822 0.915575 4.23356 0.915575 5.25056C0.915575 6.26755 1.31957 7.2429 2.0387 7.96202C2.75782 8.68114 3.73317 9.08514 4.75016 9.08514C5.25373 9.08514 5.75236 8.98596 6.21759 8.79325C6.68283 8.60055 7.10555 8.31809 7.46162 7.96202C7.8177 7.60595 8.10015 7.18322 8.29286 6.71799C8.48556 6.25276 8.58475 5.75412 8.58475 5.25056C8.58475 4.23356 8.18075 3.25822 7.46162 2.5391C6.7425 1.81997 5.76716 1.41597 4.75016 1.41597ZM4.5246 2.76936L4.97573 2.76936L4.97572 5.21447L7.09603 6.43702L6.87046 6.82951L4.5246 5.47612L4.5246 2.76936Z" fill="#F44336"/>
//             </svg>
//             <span class="result-red">${item.outsideHours}</span>
//           </span>
//         </div>
//       </div>
//     `;
//     periodResultCard.appendChild(card);
//   });
// }

// // Initial render
// renderCards(filteredOptions);

// // Search input logic
// const searchInput = document.querySelector(".toolbar-search-input");

// searchInput.addEventListener("input", function () {
//   const query = searchInput.value.toLowerCase();

//   // Filter the master array
//   filteredOptions = options.filter((item) =>
//     item.name.toLowerCase().includes(query)
//   );

//   // Re-render filtered array
//   renderCards(filteredOptions);
// });

const options = [
  {
    name: "Sales Car 1",
    id: "220902734",
    withinHours: "05:52:03",
    outsideHours: "22:49:43",
  },
  {
    name: "Demo 1",
    id: "220902734",
    withinHours: "05:52:03",
    outsideHours: "22:49:43",
  },
  {
    name: "Demo 2",
    id: "220902734",
    withinHours: "05:52:03",
    outsideHours: "22:49:43",
  },
  {
    name: "Demo 3",
    id: "220902734",
    withinHours: "06:00:00",
    outsideHours: "20:00:00",
  },
  {
    name: "Demo 4",
    id: "220902734",
    withinHours: "04:00:00",
    outsideHours: "22:00:00",
  },
];

let filteredOptions = [...options];
let currentPage = 1;
const itemsPerPage = 4;

const searchInput = document.querySelector(".toolbar-search-input");
const periodResultCard = document.querySelector(".period-results");
const paginationText = document.querySelector(".pagination-text");
const paginationButtons = document.querySelectorAll(".pagination-btn");

function renderCards(array = filteredOptions) {
  periodResultCard.innerHTML = "";

  const totalItems = array.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Clamp current page if it exceeds totalPages
  currentPage = Math.min(currentPage, totalPages) || 1;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToRender = array.slice(start, end);

  itemsToRender.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("period-result-card");
    card.innerHTML = `
      <div class="result-title">${item.name}</div>
      <div class="result-id">${item.id}</div>
      <div class="result-row">
        <div class="result-col-left">
           <span class="result-label-within">Within Hours</span>
           <span class="result-time-within">
            <svg width="13" height="13" viewBox="0 0 10 10" fill="none">
              <path d="M4.75016 0.964844C5.8868 0.964844 6.97689 1.41637 7.78062 2.2201C8.58435 3.02383 9.03588 4.11392 9.03588 5.25056C9.03588 6.3872 8.58435 7.47729 7.78062 8.28102C6.97689 9.08474 5.8868 9.53627 4.75016 9.53627C3.61352 9.53627 2.52343 9.08474 1.7197 8.28101C0.915976 7.47729 0.464447 6.3872 0.464447 5.25056C0.464447 4.11392 0.915976 3.02383 1.7197 2.2201C2.52343 1.41637 3.61352 0.964844 4.75016 0.964844ZM4.75016 1.41597C3.73317 1.41597 2.75782 1.81997 2.0387 2.5391C1.31957 3.25822 0.915575 4.23356 0.915575 5.25056C0.915575 6.26755 1.31957 7.2429 2.0387 7.96202C2.75782 8.68114 3.73317 9.08514 4.75016 9.08514C5.25373 9.08514 5.75236 8.98596 6.21759 8.79325C6.68283 8.60055 7.10555 8.31809 7.46162 7.96202C7.8177 7.60595 8.10015 7.18322 8.29286 6.71799C8.48556 6.25276 8.58475 5.75412 8.58475 5.25056C8.58475 4.23356 8.18075 3.25822 7.46162 2.5391C6.7425 1.81997 5.76716 1.41597 4.75016 1.41597ZM4.5246 2.76936L4.97573 2.76936L4.97572 5.21447L7.09603 6.43702L6.87046 6.82951L4.5246 5.47612L4.5246 2.76936Z" fill="#15803D"/>
             </svg>
             <span class="result-green">${item.withinHours}</span>
          </span>
         </div>
         <div class="result-col-right">
          <span class="result-label-outside">${item.withinHours}</span>
          <span class="result-time-outside">
            <svg width="13" height="13" viewBox="0 0 10 10" fill="none">
              <path d="M4.75016 0.964844C5.8868 0.964844 6.97689 1.41637 7.78062 2.2201C8.58435 3.02383 9.03588 4.11392 9.03588 5.25056C9.03588 6.3872 8.58435 7.47729 7.78062 8.28102C6.97689 9.08474 5.8868 9.53627 4.75016 9.53627C3.61352 9.53627 2.52343 9.08474 1.7197 8.28101C0.915976 7.47729 0.464447 6.3872 0.464447 5.25056C0.464447 4.11392 0.915976 3.02383 1.7197 2.2201C2.52343 1.41637 3.61352 0.964844 4.75016 0.964844ZM4.75016 1.41597C3.73317 1.41597 2.75782 1.81997 2.0387 2.5391C1.31957 3.25822 0.915575 4.23356 0.915575 5.25056C0.915575 6.26755 1.31957 7.2429 2.0387 7.96202C2.75782 8.68114 3.73317 9.08514 4.75016 9.08514C5.25373 9.08514 5.75236 8.98596 6.21759 8.79325C6.68283 8.60055 7.10555 8.31809 7.46162 7.96202C7.8177 7.60595 8.10015 7.18322 8.29286 6.71799C8.48556 6.25276 8.58475 5.75412 8.58475 5.25056C8.58475 4.23356 8.18075 3.25822 7.46162 2.5391C6.7425 1.81997 5.76716 1.41597 4.75016 1.41597ZM4.5246 2.76936L4.97573 2.76936L4.97572 5.21447L7.09603 6.43702L6.87046 6.82951L4.5246 5.47612L4.5246 2.76936Z" fill="#F44336"/>
            </svg>
            <span class="result-red">${item.outsideHours}</span>
          </span>
        </div>
      </div>
    `;
    periodResultCard.appendChild(card);
  });

  // Update pagination text
  const showingStart = totalItems === 0 ? 0 : start + 1;
  const showingEnd = Math.min(end, totalItems);
  paginationText.textContent = `Showing ${showingStart} to ${showingEnd} of ${totalItems} entries`;
}

// 🔍 Handle search
searchInput.addEventListener("input", function () {
  const query = searchInput.value.trim().toLowerCase();

  filteredOptions = options.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  currentPage = 1;
  renderCards();
});

// ⬅️ Pagination: Prev
paginationButtons[0].addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderCards();
  }
});

// ➡️ Pagination: Next
paginationButtons[1].addEventListener("click", () => {
  const totalPages = Math.ceil(filteredOptions.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderCards();
  }
});

// ▶️ Initial render
renderCards();

document.addEventListener("DOMContentLoaded", function () {
  const dateRange = document.getElementById("dateRange");

  flatpickr(dateRange, {
    mode: "range",
    dateFormat: "Y-m-d",
    onOpen: function () {
      console.log("Date range clicked");
    },
    onClose: function (selectedDates) {
      if (selectedDates.length === 2) {
        const start = selectedDates[0].toISOString().split("T")[0];
        const end = selectedDates[1].toISOString().split("T")[0];
        console.log("Range selected:", start, "-", end);
      }
    },
  });
});
