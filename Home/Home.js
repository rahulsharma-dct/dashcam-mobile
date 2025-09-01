const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

const platform = new H.service.Platform({
  apikey: "kre4_OutjD9fpCNKHjwXfTrSbGWhVo7cG7id5zP2ULE",
});

const defaultLayers = platform.createDefaultLayers();

const map = new H.Map(
  document.getElementById("map"),
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
  { lat: 27.6139, lng: 77.209, color: "#30a71a", speed: "90 mph" },
  { lat: 27.6041, lng: 77.1025, color: "#e43c35", speed: "0 mph" },
  { lat: 27.6355, lng: 77.391, color: "#d4941a", speed: "55 mph" },
  { lat: 27.6345, lng: 77.281, color: "#d4941a", speed: "55 mph" },
];

vehicles.forEach((v) => {
  const svgMarkup = `
  <div>
  <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="${v.color}" d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 13 7 13s7-8.03 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="5.5" fill="#FFFFFF"/>
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
  bottom: 20%;
  background: ${v.color};
  color: #fff;
  font-weight: 600;
  border-radius: 20px;
  margin-top:-1.2rem;
  margin-left:-5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  transition: transform 0.2s;"
      ><svg
        width="22"
        height="15"
        viewBox="0 0 22 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="22" height="15" rx="7.5" fill="white" />
        <path
          d="M4 4.48157C4 4.70256 4.06925 4.84398 4.25387 5.06045L6.30384 7.43815C6.32304 7.46021 6.33846 7.47775 6.33846 7.5C6.33846 7.52206 6.32304 7.53979 6.304 7.56185L4.25387 9.93955C4.06925 10.156 4 10.2974 4 10.5184C4 10.8145 4.20004 11 4.46146 11C4.60767 11 4.7808 10.9295 4.9385 10.8631L11.5077 8.10112C11.8461 7.9597 12 7.75191 12 7.5C12 7.24809 11.8461 7.04049 11.5077 6.89907L4.9385 4.13689C4.7808 4.07071 4.60767 4 4.46146 4C4.20004 4 4 4.18554 4 4.48157Z"
          fill="#1C222A"
        />
        <path
          d="M17.4033 9.5H14.8838V5.29883H17.3066V6.06934H15.8301V7.00391H17.2041V7.77148H15.8301V8.73242H17.4033V9.5Z"
          fill="#1C222A"
        />
      </svg>
      ${v.speed}</vehicle-marker
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

// Minimal JS for toggle on arrow click
document.getElementById("menu-arrow").onclick = function () {
  var menu = document.getElementById("menu-list");
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "block"
      : "none";
};

document.querySelectorAll("#menu-list .menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    // Remove 'active' from all menu links
    document.querySelectorAll("#menu-list .menu-link").forEach((item) => {
      item.classList.remove("active");
    });

    // Add 'active' to the clicked one
    link.classList.add("active");
  });
});
