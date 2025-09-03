const geofences = [
  {
    id: 1,
    name: "Delhi Geofence",
    center: { lat: 28.6139, lng: 77.209 },
    radius: 1000, // in meters
    color: "red",
  },
  {
    id: 2,
    name: "Mumbai Geofence",
    center: { lat: 19.076, lng: 72.8777 },
    radius: 1500, // in meters
    color: "blue",
  },
  {
    id: 3,
    name: "Bangalore Geofence",
    center: { lat: 12.9716, lng: 77.5946 },
    radius: 2000, // in meters
    color: "green",
  },
  {
    id: 4,
    name: "Hyderabad Geofence",
    center: { lat: 17.385, lng: 78.4867 },
    radius: 1200, // in meters
    color: "purple",
  },
  {
    id: 5,
    name: "Chennai Geofence",
    center: { lat: 13.0827, lng: 80.2707 },
    radius: 1800, // in meters
    color: "yellow",
  },
];

const geofenceSelect = document.getElementById("geofenceSelect");

// Populate dropdown
geofences.forEach((fence) => {
  const option = document.createElement("option");
  option.value = fence.id; // unique identifier
  option.textContent = fence.name;
  geofenceSelect.appendChild(option);
});

let selectedGeofence = {};
geofenceSelect.addEventListener("change", (e) => {
  const selectedId = parseInt(e.target.value);
  selectedGeofence = geofences.find((f) => f.id === selectedId);

  if (selectedGeofence) {
    localStorage.setItem("selectedGeofence", JSON.stringify(selectedGeofence));
  }
});
