const salesCars = [
  {
    car: "Sales Car 1",
    status: "In Landmark 23e (Mesa)",
    duration: "2hrs:18m",
    date: "August 04, 2025",
    time: "13:15:33",
    latitude: "33.4979°N",
    longitude: "111.9286°W",
    location: "7014 E Cameback Rd, Scottsdale, AZ 85251",
  },
  {
    car: "Sales Car 2",
    status: "In Downtown Phoenix",
    duration: "1hrs:45m",
    date: "August 05, 2025",
    time: "09:32:12",
    latitude: "33.4484°N",
    longitude: "112.0740°W",
    location: "200 W Washington St, Phoenix, AZ 85003",
  },
  {
    car: "Sales Car 3",
    status: "In Chandler Blvd",
    duration: "3hrs:10m",
    date: "August 06, 2025",
    time: "11:05:22",
    latitude: "33.3062°N",
    longitude: "111.8413°W",
    location: "3033 W Ray Rd, Chandler, AZ 85226",
  },
  {
    car: "Sales Car 4",
    status: "In Tempe Marketplace",
    duration: "0hrs:55m",
    date: "August 07, 2025",
    time: "14:45:10",
    latitude: "33.4255°N",
    longitude: "111.9400°W",
    location: "2000 E Rio Salado Pkwy, Tempe, AZ 85281",
  },
  {
    car: "Sales Car 5",
    status: "In Glendale Westgate",
    duration: "4hrs:20m",
    date: "August 08, 2025",
    time: "16:22:05",
    latitude: "33.5387°N",
    longitude: "112.1859°W",
    location: "6751 N Sunset Blvd, Glendale, AZ 85305",
  },
  {
    car: "Sales Car 6",
    status: "In Mesa Riverview",
    duration: "2hrs:05m",
    date: "August 09, 2025",
    time: "10:40:55",
    latitude: "33.4353°N",
    longitude: "111.8766°W",
    location: "1061 N Dobson Rd, Mesa, AZ 85201",
  },
  {
    car: "Sales Car 7",
    status: "In Scottsdale Old Town",
    duration: "3hrs:33m",
    date: "August 10, 2025",
    time: "12:18:40",
    latitude: "33.4942°N",
    longitude: "111.9261°W",
    location: "7333 E Indian Plaza, Scottsdale, AZ 85251",
  },
  {
    car: "Sales Car 8",
    status: "In Paradise Valley",
    duration: "1hrs:12m",
    date: "August 11, 2025",
    time: "08:05:17",
    latitude: "33.5312°N",
    longitude: "111.9426°W",
    location: "7101 E Lincoln Dr, Paradise Valley, AZ 85253",
  },
  {
    car: "Sales Car 9",
    status: "In Peoria P83",
    duration: "2hrs:48m",
    date: "August 12, 2025",
    time: "15:27:44",
    latitude: "33.6339°N",
    longitude: "112.2366°W",
    location: "16101 N 83rd Ave, Peoria, AZ 85382",
  },
  {
    car: "Sales Car 10",
    status: "In Gilbert Heritage District",
    duration: "0hrs:39m",
    date: "August 13, 2025",
    time: "18:55:12",
    latitude: "33.3528°N",
    longitude: "111.7890°W",
    location: "222 N Ash St, Gilbert, AZ 85234",
  },
];

const geoReportCard = document.querySelector(".geo-report-card");
const searchInput = document.querySelector(".search-input");
const paginationBtns = document.querySelectorAll(".pagination-btn");
const paginationText = document.querySelector(".pagination-text");

let filteredCars = [...salesCars];
let currentPage = 1;
const itemsPerPage = 4;

// Render cards (SVG and design untouched)
function renderCards(array) {
  geoReportCard.innerHTML = "";

  array.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("geo-car-wrapper");

    div.innerHTML = `
      <div class="geo-car-card">
        <div class="geo-car-head">
          <span class="geo-car-title">${item.car}</span>
          <span class="geo-car-right">
            <span class="geo-collapse-arrow">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-0.5" y="0.5" width="20" height="20" rx="4.5" transform="matrix(-1 0 0 1 20 0)" fill="white"/>
                <rect x="-0.5" y="0.5" width="20" height="20" rx="4.5" transform="matrix(-1 0 0 1 20 0)" stroke="#D7DBE2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0766 8.2553C10.1892 8.14265 10.342 8.07937 10.5014 8.07937C10.6607 8.07937 10.8135 8.14265 10.9262 8.2553L14.3253 11.6544C14.3827 11.7099 14.4285 11.7762 14.46 11.8495C14.4915 11.9228 14.508 12.0016 14.5087 12.0814C14.5094 12.1612 14.4942 12.2403 14.464 12.3142C14.4338 12.388 14.3892 12.4551 14.3328 12.5115C14.2763 12.5679 14.2093 12.6125 14.1354 12.6428C14.0616 12.673 13.9824 12.6882 13.9027 12.6875C13.8229 12.6868 13.744 12.6702 13.6707 12.6387C13.5974 12.6072 13.5311 12.5615 13.4757 12.5041L10.5014 9.52975L7.52706 12.5041C7.41374 12.6135 7.26196 12.6741 7.10441 12.6727C6.94686 12.6713 6.79616 12.6081 6.68475 12.4967C6.57334 12.3853 6.51015 12.2346 6.50878 12.0771C6.50741 11.9195 6.56798 11.7678 6.67743 11.6544L10.0766 8.2553Z" fill="#27B9CD"/>
              </svg>
            </span>
          </span>
        </div>
        <div class="geo-car-details">
          <div class="geo-car-detail-row"><span class="geo-car-landmark">${item.status}</span><span class="geo-car-timer">${item.duration}</span></div>
          <div class="geo-car-detail-row"><span>Date</span><span>${item.date}</span></div>
          <div class="geo-car-detail-row"><span>Time</span><span>${item.time}</span></div>
          <div class="geo-car-detail-row"><span>Latitude</span><span>${item.latitude}</span></div>
          <div class="geo-car-detail-row"><span>Longitude</span><span>${item.longitude}</span></div>
          <div class="geo-car-detail-row"><span>Location</span><span class="styling"><a href="#" class="geoform-link">${item.location}</a></span></div>
        </div>
      </div>
    `;
    geoReportCard.appendChild(div);

    // Collapse arrow toggle
    const card = div.querySelector(".geo-car-card");
    const arrow = div.querySelector(".geo-collapse-arrow");
    arrow.addEventListener("click", () => card.classList.toggle("open"));
  });
}

// Render pagination based on filtered cars
function renderPagination() {
  const totalItems = filteredCars.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  renderCards(filteredCars.slice(start, end));

  const showingStart = totalItems === 0 ? 0 : start + 1;
  const showingEnd = Math.min(end, totalItems);
  paginationText.textContent = `Showing ${showingStart} to ${showingEnd} of ${totalItems} entries`;
}

// Search
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  filteredCars = salesCars.filter((car) =>
    car.car.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderPagination();
});

// Pagination buttons
paginationBtns[0].addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPagination();
  }
});
paginationBtns[1].addEventListener("click", () => {
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderPagination();
  }
});

// Initial render
renderPagination();
