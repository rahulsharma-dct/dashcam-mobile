const options = [
  {
    device: "Device 1",
    service: "Transmission Fluid Change",
    date: "2025-09-01",
    postedSpeed: 60,
    speed: 65,
    overTheSpeedLimit: 5,
  },
  {
    device: "Device 2",
    service: "Oil Change",
    date: "2025-09-02",
    postedSpeed: 50,
    speed: 52,
    overTheSpeedLimit: 2,
  },
  {
    device: "Device 3",
    service: "Brake Inspection",
    date: "2025-09-03",
    postedSpeed: 40,
    speed: 38,
    overTheSpeedLimit: 0,
  },
  {
    device: "Device 4",
    service: "Tire Rotation",
    date: "2025-09-04",
    postedSpeed: 70,
    speed: 80,
    overTheSpeedLimit: 10,
  },
];

const vehicleAlertsList = document.querySelector(".vehicle-alerts-list");
const vehicleAlertItem = document.querySelector(".main-vehicle");

options.forEach((item) => {
  const data = document.createElement("div");
  data.classList.add("main-vehicle");

  data.innerHTML = `
  <div class="vehicle-alert-item expanded" style="border-bottom: 1px solid #E2E8F0">
    <div class="vehicle-alert-header">
      <span class="vehicle-alert-title">${item.device}</span>
      <button class="vehicle-alert-toggle active">
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
      </button>
    </div>
    <div class="vehicle-alert-body">
      <a href="#" class="vehicle-link">
        ${item.service}
      </a>
      <div class="vehicle-alert-details">
        <div class="vehicle-alert-row">
          <span>Date</span>
          <span>${item.date}</span>
        </div>
        <div class="vehicle-alert-row">
          <span>Posted Speed</span>
          <span>${item.postedSpeed}</span>
        </div>
        <div class="vehicle-alert-row">
          <span>Speed</span>
          <span>${item.speed}</span>
        </div>
        <div class="vehicle-alert-row">
          <span>Over The Speed Limit</span>
          <span>${item.overTheSpeedLimit}</span>
        </div>
      </div>
    </div>
  </div>`;

  vehicleAlertsList.appendChild(data);

  const alertItem = data.querySelector(".vehicle-alert-item");
  const toggleBtn = data.querySelector(".vehicle-alert-toggle");

  // toggle on click
  toggleBtn.addEventListener("click", () => {
    alertItem.classList.toggle("open");
  });
});
