const services = [
  {
    mainHeading: "Transmission Fluid Change",
    ServiceType: "Transmission Fluid Change",
    LastServicedMiles: 50000,
    CurrentMileageMiles: -68,
    ServiceFrequencyDays: 180,
    LastServiceDate: "August 18, 2025",
  },
  {
    mainHeading: "Transmission Fluid Change",
    ServiceType: "Engine Oil Change",
    LastServicedMiles: 30000,
    CurrentMileageMiles: 32500,
    ServiceFrequencyDays: 90,
    LastServiceDate: "July 10, 2025",
  },
  {
    mainHeading: "Transmission Fluid Change",
    ServiceType: "Brake Pad Replacement",
    LastServicedMiles: 45000,
    CurrentMileageMiles: 47000,
    ServiceFrequencyDays: 365,
    LastServiceDate: "January 15, 2025",
  },
];

const mainservice = document.querySelector(".service-entry");
services.forEach((item, index) => {
  const data = document.createElement("div");
  data.classList.add("main-service");

  const titleClass = index === 0 ? "service-title-red" : "service-title-green";

  data.innerHTML = `
          <div class="service-entry-header">
           <div class="service-entry-title ${titleClass}">
              ${item.mainHeading}
            </div>
            <button class="service-entry-toggle active">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"+
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="-0.5"
                  width="19"
                  height="17"
                  rx="4.5"
                  transform="matrix(1 0 0 -1 0 17.5)"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="-0.5"
                  width="19"
                  height="17"
                  rx="4.5"
                  transform="matrix(1 0 0 -1 0 17.5)"
                  stroke="#D7DBE2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4322 11.6275C10.3195 11.7402 10.1667 11.8034 10.0074 11.8034C9.84805 11.8034 9.69525 11.7402 9.58257 11.6275L6.18344 8.22838C6.12605 8.17296 6.08027 8.10665 6.04878 8.03334C6.01729 7.96003 6.00072 7.88119 6.00002 7.80141C5.99933 7.72162 6.01453 7.6425 6.04474 7.56865C6.07496 7.49481 6.11957 7.42772 6.17599 7.3713C6.23241 7.31489 6.2995 7.27027 6.37334 7.24006C6.44719 7.20984 6.52631 7.19464 6.60609 7.19534C6.68588 7.19603 6.76472 7.2126 6.83803 7.2441C6.91134 7.27559 6.97764 7.32136 7.03307 7.37875L10.0074 10.3531L12.9817 7.37875C13.095 7.2693 13.2468 7.20873 13.4043 7.2101C13.5619 7.21147 13.7126 7.27466 13.824 7.38607C13.9354 7.49748 13.9986 7.64818 14 7.80573C14.0013 7.96328 13.9408 8.11506 13.8313 8.22838L10.4322 11.6275Z"
                  fill="#27B9CD"
                />
              </svg>
            </button>
          </div>
          <div class="service-entry-body">
            <div class="service-row">
              <span class="service-label">Service Type</span>
              <a href="#" class="service-link">${item.ServiceType}</a>
            </div>
            <div class="service-row">
              <span class="service-label">Last Serviced (Miles)</span>
              <span class="service-value">${item.LastServicedMiles}</span>
            </div>
            <div class="service-row">
              <span class="service-label">Current Mileage (Miles)</span>
              <span class="service-value">${item.CurrentMileageMiles}</span>
            </div>
            <div class="service-row">
              <span class="service-label">Service Frequency Days</span>
              <span class="service-value">${item.ServiceFrequencyDays}</span>
            </div>
            <div class="service-row">
              <span class="service-label">Last Service (Date)</span>
              <span class="service-value highlight">${item.LastServiceDate}</span>
            </div>
            <div class="service-note">
              <span class="note-label">Notes</span>
              <div class="note-content">Regular maintenance service</div>
            </div>
            <div class="service-alert-row">
              <span class="service-label">Alert</span>
              <div class="service-status">
                <span class="service-switch">
                  <span class="service-switch-slider"
                    ><svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.44"
                        y="0.94"
                        width="13.12"
                        height="13.12"
                        rx="1.20706"
                        stroke="#30A71A"
                        stroke-width="0.88"
                      />
                      <path
                        d="M6.18325 9.54698L9.91425 5.81598L9.50183 5.40298L6.18325 8.72098L4.52075 7.05848L4.10775 7.47148L6.18325 9.54698ZM3.27592 12.1673C3.0072 12.1673 2.783 12.0775 2.60334 11.8978C2.42367 11.7182 2.33364 11.4938 2.33325 11.2247V3.77665C2.33325 3.50793 2.42328 3.28373 2.60334 3.10407C2.78339 2.9244 3.00759 2.83437 3.27592 2.83398H10.7245C10.9928 2.83398 11.217 2.92401 11.3971 3.10407C11.5771 3.28412 11.667 3.50832 11.6666 3.77665V11.2252C11.6666 11.4936 11.5768 11.7178 11.3971 11.8978C11.2174 12.0779 10.993 12.1677 10.7239 12.1673H3.27592Z"
                        fill="#30A71A"
                      />
                    </svg>
                  </span>
                </span>
                <span class="service-status-on">ON</span>
              </div>
            </div>
            <div class="service-actions">
              <button class="service-edit-btn">Edit</button>
              <button class="service-delete-btn">Delete</button>
            </div>
          </div>
  `;
  mainservice.appendChild(data);

  const toggleBtn = data.querySelector(".service-entry-toggle");
  toggleBtn.addEventListener("click", () => {
    data.classList.toggle("open");
  });
});
